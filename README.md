# Static Site

A Vue 3 + Vite static site project.

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

## Deployment

After building, the `dist/` folder contains all static files ready for deployment. These files can be uploaded to any static hosting service.

### Google Cloud Storage / Firebase Hosting

For Google-based deployment, you can use:
- **Firebase Hosting**: Run `firebase init` and `firebase deploy`
- **Google Cloud Storage**: Upload the `dist/` folder contents to a storage bucket configured for static website hosting

## Project Structure

- `src/` - Source files
  - `components/` - Vue components
  - `assets/` - Static assets
  - `App.vue` - Root component
  - `main.js` - Application entry point
- `dist/` - Build output (generated)
- `vite.config.js` - Vite configuration
