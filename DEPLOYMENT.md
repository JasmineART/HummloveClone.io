# Deployment Guide

## Quick Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages. Follow these steps:

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the project
2. Push the build directory to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

Your site will be available at: `https://JasmineART.github.io/HummloveClone.io/`

## Configuration Details

### Package.json Homepage
The `homepage` field in `package.json` is set to:
```json
"homepage": "https://JasmineART.github.io/HummloveClone.io"
```

### React Router Basename
The `BrowserRouter` in `App.js` uses the basename:
```jsx
<BrowserRouter basename="/HummloveClone.io">
```

This ensures all routes work correctly when hosted on GitHub Pages.

### SPA Routing with 404.html
The `public/404.html` file is a copy of `index.html` to handle client-side routing. When a user directly accesses a route like `/products`, GitHub Pages will serve the 404.html file, which loads the React app and lets React Router handle the routing.

## Verification

After deployment, verify the following:
1. Homepage loads correctly
2. Navigation links work (Home, Products, About, Cart)
3. Direct URL access works (e.g., `/HummloveClone.io/products`)
4. Styles are applied correctly
5. Fonts load from Google Fonts

## Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check that the `homepage` field in `package.json` matches your GitHub Pages URL.

### Issue: Routes return 404
**Solution**: Ensure `404.html` exists in the `public/` directory and is identical to `index.html`.

### Issue: Styles not loading
**Solution**: Clear your browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R).

### Issue: Fonts not loading
**Solution**: Check that the Google Fonts links in `index.html` are correct and not blocked by an ad blocker.

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the build directory to the gh-pages branch:
   ```bash
   git subtree push --prefix build origin gh-pages
   ```

## GitHub Pages Settings

In your GitHub repository:
1. Go to Settings → Pages
2. Source should be set to "gh-pages" branch
3. Directory should be "/ (root)"
4. Save and wait for deployment

## Development vs Production

**Development (Local)**:
- URL: `http://localhost:3000/HummloveClone.io`
- Hot reload enabled
- Source maps available
- Larger file sizes

**Production (GitHub Pages)**:
- URL: `https://JasmineART.github.io/HummloveClone.io/`
- Optimized and minified
- No source maps
- Smaller file sizes (54.78 kB JS, 3.34 kB CSS gzipped)

## Updating the Site

To update the deployed site:

1. Make your changes
2. Test locally with `npm start`
3. Deploy with `npm run deploy`

The changes will be live in a few minutes.
