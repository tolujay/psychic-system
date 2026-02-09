# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vue 3 + Vite static site project configured for deployment to static hosting services.

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Dependencies
npm install          # Install all dependencies
```

## Architecture

**Tech Stack:**
- Vue 3 (Composition API with `<script setup>`)
- Vite 7 (build tool and dev server)
- Native ES modules

**Project Structure:**
- `src/` - All source code
  - `main.js` - Application entry point, mounts Vue app
  - `App.vue` - Root component
  - `components/` - Vue components (SFCs)
  - `assets/` - Static assets
  - `style.css` - Global styles
- `dist/` - Production build output (git-ignored)
- `vite.config.js` - Build configuration with `base: './'` for deployment flexibility

**Key Configuration:**
- `vite.config.js` uses relative paths (`base: './'`) to support various deployment targets
- Build output uses standard `dist/` directory
- Vue SFCs use `<script setup>` syntax (Composition API)

## Deployment

The build process generates static files in `dist/` that can be deployed to:
- Firebase Hosting
- Google Cloud Storage (static website hosting)
- Any static file hosting service

Upload the entire contents of the `dist/` folder after running `npm run build`.
