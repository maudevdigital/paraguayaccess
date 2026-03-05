<!-- Paraguay Access - Copilot Instructions -->

## Project Overview
Professional landing page for **Paraguay Access** - a specialized firm providing relocation, residency, accounting, and tax advisory services in Paraguay.

## Tech Stack
- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS v4** for styling
- **Montserrat** font for professional typography

## Architecture
- Components are in `src/components/`
- i18n system uses React Context in `src/lib/i18n/`
- Dictionaries for EN, ES, PT in `src/lib/i18n/dictionaries/`

## Design Guidelines
- Primary color: Blue-700 (#1d4ed8)
- Professional, clean, neutral palette
- Font: Montserrat for all text
- Mobile-first responsive design

## Conventions
- All components are client components ("use client") for i18n
- Use `useLanguage()` hook to access translations
- Dictionary type is exported from `en.ts` as `Dictionary`
