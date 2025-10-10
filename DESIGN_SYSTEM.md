# Bohemian Vegan Leather Brand - Design System

## Color Palette

### Cork (Primary - Natural Brown)
The cork color represents the natural, sustainable material at the heart of the brand.

- `cork-50`: #faf8f5 - Lightest, for subtle backgrounds
- `cork-100`: #f5f0e8
- `cork-200`: #e8dcc8
- `cork-300`: #d9c5a3
- `cork-400`: #c9ad7f
- `cork-500`: #b8945b - Base cork color
- `cork-600`: #9a7646 - Primary buttons and accents
- `cork-700`: #7a5a35 - Hover states
- `cork-800`: #5c4327 - Text and navigation
- `cork-900`: #3e2d1b - Darkest, for main text

### Sand (Secondary - Warm Beige)
Sand tones provide warmth and complement the cork colors beautifully.

- `sand-50`: #faf9f7 - Background color
- `sand-100`: #f4f1ec - Light backgrounds
- `sand-200`: #e8e0d5
- `sand-300`: #dccfbe
- `sand-400`: #c9b89d
- `sand-500`: #b5a17c
- `sand-600`: #9a8562
- `sand-700`: #7d6a4e
- `sand-800`: #5f503a
- `sand-900`: #423728

### Sage (Accent - Soft Green)
Sage green represents sustainability and natural living.

- `sage-50`: #f5f7f4
- `sage-100`: #e8ede5
- `sage-200`: #d1dbc9
- `sage-300`: #b5c5a8
- `sage-400`: #98ae87
- `sage-500`: #7c9766
- `sage-600`: #647d52 - Secondary buttons
- `sage-700`: #4d6340
- `sage-800`: #384a2f
- `sage-900`: #25331f

### Terracotta (Accent - Earthy Red-Orange)
Terracotta adds warmth and a bohemian touch to the palette.

- `terracotta-50`: #fdf6f3
- `terracotta-100`: #f9e8df
- `terracotta-200`: #f2d0bf
- `terracotta-300`: #e8b49a
- `terracotta-400`: #dd9474
- `terracotta-500`: #d17450
- `terracotta-600`: #b85f3e
- `terracotta-700`: #95492f
- `terracotta-800`: #713623
- `terracotta-900`: #4e2518

## Typography

### Font Families

1. **Cormorant Garamond** (Display Font)
   - Used for: All headings (h1-h6)
   - Style: Elegant, serif, classic
   - Weights: 400, 500, 600, 700

2. **Playfair Display** (Alternative Serif)
   - Used for: Special headings, quotes
   - Style: Luxurious, high-contrast serif
   - Weights: 400, 500, 600, 700

3. **Inter** (Body Font)
   - Used for: Body text, buttons, navigation
   - Style: Clean, modern, highly legible
   - Weights: 300, 400, 500, 600, 700

## Custom Components

### Buttons

**Primary Button (.btn-primary)**
- Background: cork-600
- Hover: cork-700
- Text: white
- Padding: py-3 px-6
- Border radius: rounded-lg
- Transition: 200ms

**Secondary Button (.btn-secondary)**
- Background: sage-600
- Hover: sage-700
- Text: white
- Padding: py-3 px-6
- Border radius: rounded-lg
- Transition: 200ms

### Cards

**Product Card (.card)**
- Background: white
- Border radius: rounded-xl
- Shadow: shadow-md
- Hover shadow: shadow-lg
- Overflow: hidden
- Transition: shadow 300ms

### Navigation

**Nav Link (.nav-link)**
- Color: cork-800
- Hover: cork-600
- Font weight: medium
- Transition: 200ms

## Design Principles

1. **Earth Tones**: Use natural, earthy colors throughout
2. **Smooth Transitions**: All interactive elements have smooth transitions
3. **Generous Spacing**: Use consistent spacing for breathability
4. **Rounded Corners**: Prefer rounded corners for a softer, more organic feel
5. **Natural Imagery**: Include plant emojis and nature-inspired elements
6. **Sustainability Focus**: Emphasize eco-friendly and vegan aspects

## Usage Examples

### Hero Section
```jsx
<div className="bg-gradient-to-br from-sand-100 via-cork-50 to-sage-50">
  <h1 className="text-5xl font-display text-cork-900">
    Sustainable Luxury
  </h1>
  <p className="text-xl text-cork-700">
    Beautiful, sustainable, and ethical
  </p>
  <button className="btn-primary">Shop Collection</button>
</div>
```

### Product Card
```jsx
<div className="card">
  <div className="aspect-square bg-gradient-to-br from-cork-200 to-sand-200">
    🌿
  </div>
  <div className="p-6">
    <h3 className="text-xl font-display text-cork-900">Product Name</h3>
    <p className="text-cork-600">Description</p>
    <span className="text-2xl font-bold text-cork-800">$99.99</span>
  </div>
</div>
```

### Navigation
```jsx
<nav className="bg-white shadow-sm">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/products" className="nav-link">Products</Link>
</nav>
```

## Responsive Design

The design uses Tailwind's responsive utilities:

- **Mobile First**: Base styles for mobile
- **sm** (640px): Small tablets
- **md** (768px): Tablets and small laptops
- **lg** (1024px): Laptops and desktops
- **xl** (1280px): Large desktops

All components are fully responsive and adapt gracefully across screen sizes.
