# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev          # Start dev server with Turbopack on port 9002
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
npm run genkit:dev   # Start Genkit AI development server
npm run genkit:watch # Start Genkit with file watching
```

## Architecture Overview

This is a Next.js 15 portfolio website with AI-powered SEO generation.

### AI Integration (Genkit + Google AI)
- `src/ai/genkit.ts` - Genkit configuration with Google AI plugin (Gemini 2.5 Flash)
- `src/ai/flows/` - AI flows for SEO generation
  - `generate-seo-text.ts` - Generates SEO-optimized text for each page section
  - `generate-seo-tags.ts` - Generates meta tags for pages
- AI flows are called server-side in `src/app/page.tsx` and `src/app/layout.tsx` to generate SEO content at build/request time

### Page Structure
- Single-page portfolio with sections: Hero, About, Projects, Resume, Contact
- Each section receives AI-generated `seoText` prop from parent page
- Layout generates dynamic metadata via `generateMetadata()` using AI

### Server Actions
- `src/actions/send-message.ts` - Contact form submission handler

### UI Components
- `src/components/ui/` - shadcn/ui components (Radix UI primitives)
- `src/components/sections/` - Page section components
- `src/components/icons/` - Custom SVG icon components
- `src/components/layout/` - Header and Footer

### Data and Types
- `src/lib/data.ts` - Static content (skills, experience, education, projects)
- `src/lib/types.ts` - TypeScript interfaces (Skill, Experience, Project, Education)

## Naming Conventions

- **Variables and methods**: Use `camelCase`
- **Files and classes**: Use `camelCase`
