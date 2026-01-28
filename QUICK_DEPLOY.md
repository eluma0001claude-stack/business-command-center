# 🚀 Quick Deploy Guide

**Repository:** https://github.com/eluma0001claude-stack/business-command-center

## ⚡ FASTEST: Netlify Drop (2 Minutes, No Account)

1. **Install dependencies & build:**
   ```bash
   cd /home/dev/clawd/projects/business-command-center
   npm install
   npm run build
   ```

2. **Deploy:**
   - Go to: https://app.netlify.com/drop
   - Drag & Drop the `out/` folder
   - Done! You get instant URL

## 🔥 ALTERNATIVE: Surge.sh (1 Command)

```bash
npm install -g surge
npm run build
cd out
surge . business-command-center.surge.sh
```

→ Live at: https://business-command-center.surge.sh

## 💻 ALTERNATIVE: GitHub Pages (Free Forever)

1. Go to: https://github.com/eluma0001claude-stack/business-command-center/settings/pages
2. Source: **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

→ Live at: https://eluma0001claude-stack.github.io/business-command-center

## 🎯 WHAT YOU GET

- **Full Kanban Board** (3 columns: New → Review → Approved)
- **Idea Tracking** (Title, Description, Cost, Time, Source)
- **Local Storage** (persists in browser)
- **Password Protected** (password: `amule2026`)
- **Mobile Responsive**

## 🔧 LOCAL TESTING

```bash
cd /home/dev/clawd/projects/business-command-center
npm install
npm run dev
```

Open: http://localhost:3000

---

**Status:** ✅ CODE COMPLETE | 📦 READY TO DEPLOY

Built by Jimmy 🤖
