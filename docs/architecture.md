# Architecture Notes

This project is a Next.js (App Router) marketing site built with React and TypeScript. UI is implemented with Tailwind CSS and shadcn/ui components (Radix primitives).

## Commands

```bash
pnpm dev         # Start dev server (localhost:3000)
pnpm build       # Production build
pnpm start       # Run the production server locally
pnpm lint        # ESLint (Next.js config)
```

## App Structure

- `src/app/` contains routes (App Router).
- `src/components/` contains reusable sections and UI components.
- `src/components/ui/` contains shadcn/ui components.

## Forms and Integrations

The contact form posts to `src/app/api/contact/route.ts`:

- Primary: append submissions to Google Sheets (if configured)
- Backup: send email notifications via Resend (if configured)
- If neither is configured, submissions are accepted and logged server-side

Google Sheets setup: `docs/integrations/google-sheets.md`

## Styling

- Tailwind CSS with semantic tokens (e.g. `bg-background`, `text-foreground`)
- `cn()` helper in `src/lib/utils` for conditional class merging

## Assets and Imagery

Keep imagery consistent with brand positioning and the target audience. Prefer clinic, lifestyle, and abstract/scientific visuals over generic stock.

