# Supabase Setup - 2 Minuten

## 1️⃣ Create Supabase Account & Project

1. Go to https://supabase.com
2. Click **"Start your project"**
3. Sign up with GitHub (fastest)
4. Click **"New Project"**
5. Fill in:
   - **Name:** `business-command-center`
   - **Database Password:** (generate strong password, save it)
   - **Region:** Choose closest to you
6. Click **"Create new project"** (takes ~2 min)

---

## 2️⃣ Run Database Schema

1. Wait for project to finish setting up
2. Go to **SQL Editor** (left sidebar)
3. Click **"New query"**
4. Copy entire content from `supabase/schema.sql`
5. Paste into editor
6. Click **"Run"** (bottom right)
7. ✅ You should see: "Success. No rows returned"

---

## 3️⃣ Get API Credentials

1. Go to **Project Settings** (gear icon, left sidebar)
2. Click **"API"** section
3. Copy these two values:
   - **Project URL** (e.g., `https://abc123.supabase.co`)
   - **anon public** key (long string)

---

## 4️⃣ Add to Vercel

### If already deployed:

1. Go to your Vercel project
2. **Settings** → **Environment Variables**
3. Add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = <your-project-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY = <your-anon-key>
   ```
4. **Redeploy**

### If not deployed yet:

1. Create `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and paste your credentials
3. Deploy to Vercel (it will prompt for env vars)

---

## ✅ Done!

Your Business Command Center now has:
- ✅ Real database (PostgreSQL)
- ✅ Multi-device sync
- ✅ Row Level Security
- ✅ Scalable architecture

---

## 🧪 Test Locally

```bash
# Make sure .env.local has your credentials
npm run dev
```

Open http://localhost:3000

Ideas will now be saved to Supabase! 🎉
