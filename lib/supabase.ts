import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Idea {
  id: string;
  title: string;
  description: string;
  cost: number;
  time_hours: number;
  source: string;
  status: 'new' | 'review' | 'approved';
  created_at: string;
  updated_at: string;
  created_by: string | null;
}
