# Business Command Center - Deployment Guide

## 🚀 Quick Deploy to Vercel (RECOMMENDED)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub:**
   ```bash
   cd /home/dev/clawd/projects/business-command-center
   git init
   git add .
   git commit -m "Initial commit: Business Command Center MVP"
   git remote add origin <YOUR_GITHUB_REPO>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Add Environment Variable:
     - Name: `NEXT_PUBLIC_ADMIN_PASSWORD`
     - Value: `amule2026` (or your custom password)
   - Click "Deploy"

✅ **Done! You'll get a live URL in ~2 minutes**

---

### Option 2: Deploy via CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd /home/dev/clawd/projects/business-command-center
   vercel
   ```

4. **Set Production Environment Variable:**
   ```bash
   vercel env add NEXT_PUBLIC_ADMIN_PASSWORD
   # Enter: amule2026 (or your custom password)
   # Select: Production
   ```

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

---

## 🔐 Security

### Change Password

**In Vercel Dashboard:**
1. Project Settings → Environment Variables
2. Edit `NEXT_PUBLIC_ADMIN_PASSWORD`
3. Enter new password
4. Redeploy

**Or via CLI:**
```bash
vercel env rm NEXT_PUBLIC_ADMIN_PASSWORD production
vercel env add NEXT_PUBLIC_ADMIN_PASSWORD production
# Enter new password
vercel --prod
```

---

## 🧪 Test Locally

```bash
cd /home/dev/clawd/projects/business-command-center
npm run dev
```

Open http://localhost:3000

**Login:** Use password `amule2026`

---

## 📊 Usage

1. **Login** with password
2. **Add Ideas** via "+ Add Idea" button
3. **Move Ideas:**
   - New Ideas → Click "Review" → In Review
   - In Review → Click "Approve" → Approved
4. **Delete Ideas:** Click "Delete" in New Ideas column

---

## 🔧 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Storage:** Browser localStorage (no database)
- **Auth:** Simple password (localStorage)
- **Deployment:** Vercel (recommended)

---

## ⚠️ MVP Limitations

- ✅ No database = No hosting costs
- ✅ Fast deployment
- ❌ Data stored per browser (not synced)
- ❌ No multi-user support
- ❌ No API access
- ❌ Manual data entry only

---

## 🚀 Future Enhancements

When needed, upgrade to full system:
- Supabase backend (PostgreSQL)
- Multi-user authentication
- Real-time sync
- API for automation (Jimmy can auto-post ideas)
- Analytics & reporting
- Export/Import data

---

## 📞 Support

Built by Jimmy 🤖
Project: `/home/dev/clawd/projects/business-command-center`
