# Business Command Center MVP

Kanban board for managing Amule business ideas.

## Features

- 3-column Kanban (New Ideas → Review → Approved)
- Simple password auth
- Cost & Time tracking
- localStorage persistence
- Mobile responsive

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npx vercel
```

## Login

Default password: `amule2026`

Change in Vercel env vars: `NEXT_PUBLIC_ADMIN_PASSWORD`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- localStorage (no database needed for MVP)

## MVP Limitations

- No real database (localStorage only)
- Simple password auth (no user management)
- No real-time sync
- No analytics/reports

## Future Enhancements

- Supabase backend
- Multi-user auth
- Real-time collaboration
- Analytics dashboard
- API for automation
