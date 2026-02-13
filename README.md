# Peak Life Performance

Production marketing website and lead-capture experience for Peak Life Performance.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Resend for email notifications
- Optional Google Sheets logging for form submissions

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Environment Variables

1. Create `.env.local` from `.env.local.example`
2. Set values as needed for your environment

Key variables:

- `RESEND_API_KEY` (optional)
- `RESEND_FROM_EMAIL` (optional)
- `CONTACT_EMAIL` (optional)
- `GOOGLE_SHEETS_ID` (optional)
- `GOOGLE_SERVICE_ACCOUNT_KEY` (optional)
- `NEXT_PUBLIC_SITE_URL` (recommended for production metadata)

Google Sheets setup notes: `docs/integrations/google-sheets.md`

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm types:supabase
```

## Project Notes

- Architecture overview: `docs/architecture.md`
- App routes live in `src/app/` and shared UI in `src/components/`.
