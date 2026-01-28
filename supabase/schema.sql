-- Business Command Center Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Ideas table
CREATE TABLE IF NOT EXISTS ideas (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    cost DECIMAL(10,2) DEFAULT 0,
    time_hours INTEGER DEFAULT 0,
    source TEXT DEFAULT 'Manual',
    status TEXT NOT NULL CHECK (status IN ('new', 'review', 'approved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    created_by UUID REFERENCES auth.users(id),
    
    -- Indexes for better performance
    INDEX idx_ideas_status ON ideas(status),
    INDEX idx_ideas_created_at ON ideas(created_at DESC)
);

-- Enable Row Level Security
ALTER TABLE ideas ENABLE ROW LEVEL SECURITY;

-- Policies (everyone can read, authenticated users can insert/update)
CREATE POLICY "Anyone can view ideas"
    ON ideas FOR SELECT
    USING (true);

CREATE POLICY "Authenticated users can insert ideas"
    ON ideas FOR INSERT
    WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update ideas"
    ON ideas FOR UPDATE
    USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete ideas"
    ON ideas FOR DELETE
    USING (auth.uid() IS NOT NULL);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_ideas_updated_at
    BEFORE UPDATE ON ideas
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE ideas IS 'Business ideas pipeline for Amule';
COMMENT ON COLUMN ideas.status IS 'Workflow status: new, review, or approved';
COMMENT ON COLUMN ideas.cost IS 'Estimated cost in EUR';
COMMENT ON COLUMN ideas.time_hours IS 'Estimated time in hours';
