# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peak Life Performance TRT website built with Next.js 15 + React + TypeScript. Multi-page marketing site using the App Router architecture, featuring a component-based design with shadcn/ui (Radix UI primitives) and Tailwind CSS. Includes integrated contact form with Resend email delivery.

## Commands

### Development
```bash
npm run dev      # Start Next.js dev server (localhost:3000)
npm run build    # Production build with type checking
npm start        # Run production build locally
npm run lint     # Run ESLint with Next.js config
```

### Supabase Type Generation
```bash
npm run types:supabase   # Generate TypeScript types from Supabase schema
# Requires SUPABASE_PROJECT_ID environment variable
```

## Architecture

### Next.js App Router Structure
```
src/app/
  ├── layout.tsx                  # Root layout with metadata, fonts, analytics
  ├── page.tsx                    # Root route (renders Home component)
  ├── globals.css                 # Global styles, CSS variables, Tailwind
  ├── weight-management/
  │   └── page.tsx                # Weight Management/GLP-1 program page
  ├── faq/
  │   └── page.tsx                # FAQ page with 20 Q&As
  ├── about/
  │   └── page.tsx                # About Us page with team info
  └── api/
      └── contact/
          └── route.ts            # Contact form API endpoint (Resend integration)
```

**Key Architectural Patterns:**

- **App Router**: Next.js 15 App Router (not Pages Router)
- **Server/Client Split**: Root layout is Server Component, pages use Client Components
- **Multi-Page Design**: Home, Weight Management, FAQ, and About Us pages with shared navigation
- **Path Aliases**: `@/` maps to `./src/` (configured in tsconfig.json)
- **API Routes**: Contact form submission handled via Next.js API routes with Resend

### Component Hierarchy

**Home Page:**
```
app/layout.tsx (Server Component - metadata, fonts, analytics)
  └── app/page.tsx (Server Component wrapper)
      └── components/home.tsx (Client Component - "use client")
          ├── Navigation
          ├── HeroSection
          ├── SocialProofSection
          ├── BenefitsSection
          ├── ServicesSection
          ├── TrustSection
          ├── CTASection
          ├── Footer
          ├── ConsultationForm (Dialog modal)
          └── StickyMobileCTA
```

**Additional Pages:**
- `/weight-management` - WeightManagement.tsx (GLP-1 program, benefits, eligibility)
- `/faq` - FAQ.tsx (20 TRT-related Q&As with accordion UI)
- `/about` - AboutUs.tsx (Mission, team bios, core values)

**Shared Components:**
- `Navigation.tsx` - Fixed header navigation with mobile menu
- `ConsultationForm.tsx` - Contact form modal (submits to /api/contact)
- `Footer.tsx` - Site footer with contact info and links

### State Management

- **Modal State**: `isFormOpen` managed in `home.tsx` (Client Component)
- **Callback Pattern**: `handleCTAClick` prop passed to sections needing form trigger
- **No Global State**: Uses React's built-in useState (no Redux/Zustand)

### Component Organization

**Page Components** (`src/components/`):
- `home.tsx` - Home page orchestrator (Client Component with "use client")
- `WeightManagement.tsx` - Weight management/GLP-1 program page
- `FAQ.tsx` - FAQ page with accordion component
- `AboutUs.tsx` - About page with team and mission info
- `Navigation.tsx` - Fixed header navigation (used across all pages)
- Section components (Hero, Benefits, Services, Trust, CTA, Footer)
- `ConsultationForm.tsx` - Contact form modal (Dialog) with API integration
- `StickyMobileCTA.tsx` - Fixed mobile CTA button

**UI Primitives** (`src/components/ui/`):
- 40+ shadcn/ui components built on Radix UI
- Configured via `components.json` (New York style, CSS variables)
- Use `@/components/ui/*` for imports
- Accordion used in FAQ page

**API Routes** (`src/app/api/`):
- `contact/route.ts` - POST endpoint for contact form (sends email via Resend)

### Styling Architecture

**Tailwind CSS + CSS Variables:**
- Global styles in `src/app/globals.css`
- HSL-based color system via CSS variables (`--background`, `--primary`, etc.)
- Dark mode support: `darkMode: ["class"]` in tailwind.config.js
- Utility-first approach with semantic color tokens
- Use `cn()` helper from `@/lib/utils` for conditional classes

**Design Tokens:**
- Colors: `bg-background`, `text-foreground`, `bg-primary`, `text-accent`
- Radius: CSS variable `--radius` for consistent border-radius
- Typography: Inter font from next/font/google

### Metadata & SEO

Configured in `app/layout.tsx`:
- Comprehensive OpenGraph and Twitter card metadata
- Dynamic `metadataBase` from `NEXT_PUBLIC_SITE_URL` env var
- Viewport config exported separately
- Robots configuration for search engines

### Analytics & Tracking

**Conditionally loaded via environment variables:**
- Google Analytics: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Meta Pixel: `NEXT_PUBLIC_META_PIXEL_ID`
- Both use Next.js `<Script>` component with `strategy="afterInteractive"`

### Next.js Configuration

Key settings in `next.config.js`:
- **React Strict Mode**: Enabled
- **Image Optimization**: Allows `images.unsplash.com` remote patterns
- **Image Component**: Use Next.js `<Image>` for optimized images

### Environment Variables

Required in `.env.local` (see `.env.local.example`):
- `NEXT_PUBLIC_SITE_URL` - Base URL for metadata (default: https://peaktrt.com)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - (Optional) Google Analytics
- `NEXT_PUBLIC_META_PIXEL_ID` - (Optional) Meta Pixel
- `RESEND_API_KEY` - **Required** for contact form email delivery
- `CONTACT_EMAIL` - Email address to receive form submissions (default: PLP@peaklifeperformance.com)
- `SUPABASE_PROJECT_ID` - For type generation only

### Email Configuration (Resend)

The contact form uses [Resend](https://resend.com) for email delivery:

1. **Get API Key**: Sign up at resend.com and create an API key
2. **Add to `.env.local`**: Set `RESEND_API_KEY=re_xxxxx`
3. **Verify Domain** (Production): In Resend dashboard, verify your sending domain
4. **Update "from" address**: In `src/app/api/contact/route.ts`, update the `from` field to use your verified domain

**Development**: Use `onboarding@resend.dev` (default)
**Production**: Use verified domain (e.g., `noreply@peaklifeperformance.com`)

## Development Guidelines

### Adding New Page Sections

1. Create component in `src/components/`
2. Import in `home.tsx` and add to component tree
3. Pass `onCTAClick` prop if section includes CTA buttons
4. Ensure component uses "use client" directive if it needs interactivity
5. Follow existing section patterns for consistency

### Working with Server vs Client Components

- **Default**: Components are Server Components in App Router
- **Use "use client"** when component needs:
  - React hooks (useState, useEffect, etc.)
  - Event handlers (onClick, onChange, etc.)
  - Browser APIs
- **Current pattern**: Root layout is Server Component, home page content is Client Component

### Forms & Validation

- Use React Hook Form with Zod validation (already installed)
- Reference `ConsultationForm.tsx` for established patterns
- Use Radix Dialog (via shadcn/ui) for modal forms

### Styling Best Practices

- Use semantic color tokens: `bg-background`, `text-foreground`, etc.
- Leverage `cn()` utility from `@/lib/utils` for conditional classes
- Follow Radix UI patterns for accessible components
- Always use `@/` alias for imports from src directory
- Use Next.js `<Image>` component for images (configured for Unsplash)

### TypeScript Configuration

- TypeScript strict mode: **disabled** (`strict: false`)
- Module resolution: `bundler` (Next.js default)
- Path alias: `@/*` → `./src/*`
- Next.js plugin enabled for type checking

### ESLint Configuration

Custom rules in `.eslintrc.json`:
- Extends `next/core-web-vitals`
- Relaxed rules: unescaped entities, img elements, hooks (warnings not errors)
- Run with `npm run lint`

## Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **React**: 18.3.1
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 3.4.1
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase client (configured but requires setup)
- **Additional UI**:
  - cmdk (command palette)
  - embla-carousel-react
  - react-day-picker
  - vaul (drawer component)
  - react-resizable-panels

## File Structure Reference

```
peak/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Server Component)
│   │   ├── page.tsx                # Home route (renders Home component)
│   │   ├── globals.css             # Global styles + CSS variables
│   │   ├── weight-management/
│   │   │   └── page.tsx            # Weight Management page
│   │   ├── faq/
│   │   │   └── page.tsx            # FAQ page
│   │   ├── about/
│   │   │   └── page.tsx            # About Us page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts        # Contact form API endpoint
│   ├── components/
│   │   ├── home.tsx                # Home page (Client Component)
│   │   ├── WeightManagement.tsx    # Weight Management page
│   │   ├── FAQ.tsx                 # FAQ page with accordion
│   │   ├── AboutUs.tsx             # About Us page
│   │   ├── Navigation.tsx          # Fixed header navigation
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── ConsultationForm.tsx    # Contact form (Resend integration)
│   │   ├── StickyMobileCTA.tsx
│   │   └── ui/                     # 40+ shadcn/ui components
│   ├── lib/
│   │   └── utils.ts                # cn() helper for Tailwind
│   └── types/
│       └── supabase.ts             # Generated Supabase types
├── public/                         # Static assets (currently empty)
├── .env.local                      # Environment variables (not in git)
├── .env.local.example              # Example env vars
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind configuration
├── components.json                 # shadcn/ui configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies (includes resend)
```

## Browser Support

Modern browsers with ES2020 support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
