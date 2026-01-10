# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peak Life Performance TRT website built with Next.js 15 + React + TypeScript. Multi-page marketing site using the App Router architecture, featuring a component-based design with shadcn/ui (Radix UI primitives) and Tailwind CSS. Includes integrated contact form with Resend email delivery and Google Sheets integration.

## Commands

```bash
pnpm dev         # Start Next.js dev server (localhost:3000)
pnpm build       # Production build with type checking
pnpm start       # Run production build locally
pnpm lint        # Run ESLint with Next.js config
```

## Architecture

**Key Patterns:**
- **App Router**: Next.js 15 App Router (not Pages Router)
- **Server/Client Split**: Root layout is Server Component, pages use Client Components with "use client"
- **Path Aliases**: `@/` maps to `./src/`
- **API Routes**: Contact form via `/api/contact` (Resend + Google Sheets)

### Component Hierarchy

```
app/layout.tsx (Server Component - metadata, fonts, analytics)
  └── app/page.tsx → components/home.tsx (Client Component)
          ├── Navigation, HeroSection, SocialProofSection
          ├── BenefitsSection, ServicesSection, TrustSection
          ├── CTASection, Footer, StickyMobileCTA
          └── ConsultationForm (Dialog modal)
```

**Routes:**
- `/` - Home (`home.tsx`)
- `/weight-management` - GLP-1 program (`WeightManagement.tsx`)
- `/weight-loss` - Weight loss landing page (`WeightLossLandingPage.tsx`)
- `/trt` - TRT landing page (`TRTLandingPage.tsx`)
- `/faq` - FAQ with accordion (`FAQ.tsx`)
- `/about` - About page (`AboutUs.tsx`)
- `/additional-services` - Additional services (`AdditionalServices.tsx`)
- `/privacy-policy`, `/terms`, `/medical-disclaimer` - Legal pages

### State Management

- **Modal State**: `isFormOpen` in `home.tsx`, passed via `onCTAClick` prop to sections
- **No Global State**: React useState only (no Redux/Zustand)

### UI Components

- **shadcn/ui**: Components in `src/components/ui/` built on Radix UI
- **Config**: `components.json` (New York style, CSS variables)
- **Import pattern**: `@/components/ui/*`

### Styling

- **Tailwind CSS** with HSL-based CSS variables in `globals.css`
- **Semantic tokens**: `bg-background`, `text-foreground`, `bg-primary`, etc.
- **cn() helper**: `@/lib/utils` for conditional class merging
- **Inter font** via next/font/google

### Environment Variables

Required in `.env.local`:
```
RESEND_API_KEY=re_xxxxx           # Required for contact form
CONTACT_EMAIL=...                  # Form submission recipient
GOOGLE_SHEETS_ID=...              # Optional: log submissions to sheet
GOOGLE_SERVICE_ACCOUNT_KEY=...    # Optional: Google Sheets auth
NEXT_PUBLIC_SITE_URL=...          # Base URL for metadata
NEXT_PUBLIC_GA_MEASUREMENT_ID=... # Optional: Google Analytics
NEXT_PUBLIC_META_PIXEL_ID=...     # Optional: Meta Pixel
```

### Integrations

**Contact Form (`/api/contact`):**
- Primary: Google Sheets (see `GOOGLE_SHEETS_SETUP.md`)
- Backup: Email via Resend
- Update `from` address in `src/app/api/contact/route.ts` for production

## Development Guidelines

### Adding New Sections/Pages

1. Create component in `src/components/`
2. Add "use client" directive if component needs hooks, event handlers, or browser APIs
3. Pass `onCTAClick` prop if section includes CTA buttons (triggers consultation modal)
4. For new routes: create `src/app/[route]/page.tsx`

### Forms

- Use React Hook Form + Zod validation (reference `ConsultationForm.tsx`)
- Modal forms use Radix Dialog via shadcn/ui

### Images

- **NEVER use photos of women on this site** - This is a men's health clinic.
- Use Unsplash images via `images.unsplash.com`
- Always use Next.js `<Image>` component

### Configuration Notes

- **TypeScript strict mode**: disabled (`strict: false`)
- **ESLint**: extends `next/core-web-vitals`, relaxed rules for entities/img/hooks
- **Images**: Use Next.js `<Image>` (configured for `images.unsplash.com`, `avatars.githubusercontent.com`, `raw.githubusercontent.com`)

## Tech Stack

Next.js 15.0.7 | React 18.3 | TypeScript 5.8 | Tailwind CSS 3.4 | shadcn/ui (Radix) | React Hook Form + Zod | Framer Motion | Lucide React
