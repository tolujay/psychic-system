# Tolu Consulting - Coming Soon

A modern "Coming Soon" landing page for Tolu Consulting built with Vue 3, Vite, and Tailwind CSS.

## Requirements

- Node.js 22+ (use `nvm use` to switch automatically)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- 🎨 Modern gradient design with animated decorative shapes
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 📧 "Notify Me" button with email integration
- 🔗 Social media links (LinkedIn, Instagram)
- ©️ Auto-updating copyright year

## Deployment

After building, the `dist/` folder contains all static files ready for deployment.

### Google Cloud Storage / Firebase Hosting

For Google-based deployment:
- **Firebase Hosting**: `firebase init` and `firebase deploy`
- **Google Cloud Storage**: Upload `dist/` contents to a bucket configured for static website hosting

Upload the entire contents of the `dist/` folder to your hosting service.

## Tech Stack

- Vue 3 (Composition API)
- Vite 7
- Tailwind CSS v4
- Inter font family
