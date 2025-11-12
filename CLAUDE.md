# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peak Life Performance TRT landing page built with Vite + React + TypeScript. Single-page application (SPA) with React Router, featuring a modern component-based architecture using Radix UI primitives and Tailwind CSS.

## Commands

### Development
```bash
npm run dev              # Start Vite dev server on localhost:5173
npm run build            # TypeScript compilation + production build
npm run build-no-errors  # Build without type errors blocking
npm run preview          # Preview production build locally
npm run lint             # Run ESLint on TypeScript files
```

### Supabase (if configured)
```bash
npm run types:supabase   # Generate TypeScript types from Supabase schema
# Requires SUPABASE_PROJECT_ID environment variable
```

## Architecture

### Component Organization
The application follows a sectioned single-page architecture:

- **Entry Point**: `src/main.tsx` → `src/App.tsx` → `src/components/home.tsx`
- **Routing**: React Router v6 (currently only home route defined)
- **State Management**: React useState for form modal state in home component
- **Page Sections**: Each visual section is a self-contained component in `src/components/`
- **UI Primitives**: Radix UI components in `src/components/ui/`

### Key Architectural Patterns

**Component Hierarchy**:
```
App.tsx (Router wrapper)
  └── home.tsx (Page orchestrator)
      ├── HeroSection
      ├── SocialProofSection
      ├── BenefitsSection
      ├── ServicesSection
      ├── TrustSection
      ├── CTASection
      ├── Footer
      ├── ConsultationForm (modal)
      └── StickyMobileCTA
```

**State Management**:
- Modal form state (`isFormOpen`) managed in `home.tsx`
- `handleCTAClick` callback passed to all sections that need to trigger the form modal
- No global state library (Redux, Zustand, etc.) - uses React's built-in state

**Styling Architecture**:
- Tailwind CSS with custom design tokens via CSS variables
- HSL color system for theme consistency
- CSS variables defined in `src/index.css` (--background, --foreground, --primary, etc.)
- Dark mode support via `darkMode: ["class"]` in Tailwind config
- Utility-first approach with Radix UI for accessible component primitives

**Path Aliases**:
- `@/` maps to `./src/` (configured in vite.config.ts)
- Use `@/components/...` for imports instead of relative paths

### Vite Configuration

Key settings in `vite.config.ts`:
- **Base Path**: Dynamic based on environment (dev vs production)
- **Plugin**: @vitejs/plugin-react-swc for fast HMR using SWC
- **Alias**: `@` → `./src`
- **Server**: Allows all hosts for development flexibility

### Supabase Integration

The project includes Supabase client setup:
- Type definitions can be generated in `src/types/supabase.ts`
- Requires `SUPABASE_PROJECT_ID` environment variable for type generation
- Client configuration should be in environment variables

### Stories Directory

`src/stories/` contains component documentation/examples (possibly for Storybook or Tempobook based on `tempo.config.json` presence).

## File Structure Reference

```
peak/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Router setup
│   ├── index.css             # Global styles, CSS variables, Tailwind directives
│   ├── vite-env.d.ts         # Vite type definitions
│   ├── components/
│   │   ├── home.tsx          # Main page component
│   │   ├── HeroSection.tsx   # Landing hero section
│   │   ├── SocialProofSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── ConsultationForm.tsx  # Contact form modal
│   │   ├── StickyMobileCTA.tsx   # Mobile sticky button
│   │   └── ui/               # Radix UI primitives (40+ components)
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── card.tsx
│   │       └── ... (accordion, alert, form components, etc.)
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn helper)
│   ├── types/
│   │   └── supabase.ts       # Generated Supabase types
│   └── stories/              # Component stories/documentation
├── public/                   # Static assets
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # shadcn/ui configuration
└── tempo.config.json         # Tempobook configuration (if used)
```

## Development Guidelines

### Adding New Pages
1. Create page component in `src/components/`
2. Add route in `src/App.tsx` within `<Routes>`
3. Follow existing pattern with Suspense fallback

### Adding New Sections
1. Create section component in `src/components/`
2. Import and add to `home.tsx` in appropriate order
3. Pass `onCTAClick` prop if section includes CTA buttons
4. Follow existing section patterns for consistency

### Working with Forms
- Use React Hook Form with Zod validation (already installed)
- Form validation patterns established in `ConsultationForm.tsx`
- Use Radix Dialog for modal forms

### Styling Best Practices
- Use CSS variables from index.css (e.g., `bg-background`, `text-foreground`)
- Leverage `cn()` utility from `@/lib/utils` for conditional classes
- Follow Radix UI patterns for accessible components
- Use `@/` alias for all imports from src directory

### TypeScript Patterns
- Strict mode enabled in tsconfig.json
- Define prop interfaces for all components
- Use type imports from `@/types/` when available

### Component Stories
- Add component examples/documentation in `src/stories/`
- Follow existing story patterns if Storybook/Tempobook is being used

## Tech Stack

- **Build Tool**: Vite 6.2.3
- **Framework**: React 18.2
- **Language**: TypeScript 5.8
- **Routing**: React Router v6
- **Backend**: Supabase (configured but requires setup)
- **Styling**: Tailwind CSS 3.4.1
- **UI Library**: Radix UI (complete primitive set)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Additional UI**:
  - cmdk (command palette)
  - embla-carousel-react
  - react-day-picker
  - react-resizable-panels
  - vaul (drawer component)

## Browser Support

Modern browsers with ES2017+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
