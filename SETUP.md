# Setup Guide

## Prerequisites
- Node.js 14 or higher
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JasmineART/HummloveClone.io.git
cd HummloveClone.io
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000/HummloveClone.io`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Deployment to GitHub Pages

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Tailwind CSS Customization

The Tailwind configuration is located in `tailwind.config.js`. The custom bohemian color palette includes:

- **Cork**: Natural brown tones (50-900)
- **Sand**: Warm beige tones (50-900)
- **Sage**: Soft green tones (50-900)
- **Terracotta**: Earthy red-orange tones (50-900)

Custom fonts:
- **Display**: Cormorant Garamond (headings)
- **Serif**: Playfair Display
- **Sans**: Inter (body text)

## Project Structure

```
HummloveClone.io/
├── public/
│   ├── index.html          # Main HTML file
│   └── 404.html            # GitHub Pages SPA routing
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind directives and custom styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## Custom Tailwind Classes

The project includes custom component classes:

- `.btn-primary` - Primary button (cork colored)
- `.btn-secondary` - Secondary button (sage colored)
- `.card` - Product card with shadow and hover effect
- `.nav-link` - Navigation link with hover transition

## Styling Guidelines

To maintain the bohemian, sustainable aesthetic:

1. Use earth tones from the custom color palette
2. Apply smooth transitions for interactive elements
3. Use the custom font families for typography
4. Maintain consistent spacing and rounded corners
5. Include natural imagery and emojis (🌿, 🌱, 💚, ✨)

## Support

For issues or questions, please open an issue on GitHub.
