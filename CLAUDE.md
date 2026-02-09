# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A "Coming Soon" landing page for Tolu Consulting built with Vue 3, Vite, and Tailwind CSS. The site features a modern gradient design with animations and is configured for deployment to static hosting services.

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Dependencies
npm install          # Install all dependencies
```

**Important:** This project requires Node.js 22+. Use `nvm use` to automatically switch to the correct version (configured in `.nvmrc`).

## Architecture

**Tech Stack:**
- Vue 3 (Composition API with `<script setup>`)
- Vite 7 (build tool and dev server)
- Tailwind CSS v4 (with PostCSS)
- Native ES modules

**Project Structure:**
- `src/` - All source code
  - `main.js` - Application entry point
  - `App.vue` - Main landing page component (all UI is here)
  - `assets/logo.png` - Tolu Consulting logo
  - `style.css` - Global styles with Tailwind imports
- `dist/` - Production build output (git-ignored)
- `vite.config.js` - Build configuration with `base: './'` for deployment flexibility
- `tailwind.config.js` - Tailwind CSS configuration
- `.nvmrc` - Node version requirement (22)

**Key Features:**
- Responsive gradient background (pink/lavender to blue)
- Animated decorative shapes with floating effect
- Logo header with company name
- "Notify Me" button (opens mailto:info@toluconsulting.com)
- Social icons: LinkedIn (active), Instagram (disabled)
- Auto-updating copyright year
- Smooth fade-in and bounce animations
- Fully responsive for mobile, tablet, and desktop

**Key Configuration:**
- Tailwind CSS v4 uses `@import "tailwindcss"` syntax (not `@tailwind` directives)
- PostCSS configured with `@tailwindcss/postcss` plugin
- Vite uses relative paths (`base: './'`) for flexible deployment
- LinkedIn profile URL: https://www.linkedin.com/in/taofeek/

## Deployment

The build process generates static files in `dist/` that can be deployed to:
- Google Cloud Storage (static website hosting)
- Firebase Hosting
- Any static file hosting service

Upload the entire contents of the `dist/` folder after running `npm run build`.

## Development Notes

- All UI is in a single component (`App.vue`) - no separate components needed for this simple landing page
- The gradient, animations, and decorative shapes are defined in scoped styles
- Inter font family is loaded from Google Fonts
- Instagram icon is visually disabled (opacity-40, cursor-not-allowed) as requested
