# Bishal Ojha - Portfolio Website

A modern portfolio website showcasing the artistic talent and speedcubing achievements of Bishal Ojha. Built with React and featuring elegant animations, glassmorphism design, and interactive features.

---

## Features

### Art Portfolio
- Interactive gallery with hover effects
- Full-screen lightbox modal for artwork viewing
- Lazy-loaded images for optimal performance
- Professional sketch and portrait showcase

### WCA Profile Integration
- Real-time speedcubing statistics
- Direct link to World Cube Association profile
- Competition history and solve counts
- Interactive profile card with glassmorphism

### Modern UI/UX
- Dark theme with vibrant gradients
- Glassmorphism design elements
- Smooth page transitions
- Scroll-to-top navigation
- Fully responsive across all devices

---

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/bishal-ojha-portfolio.git
   cd bishal-ojha-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open in browser
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
Bishal_Ojha_Site/
├── public/
│   ├── profile.jpg           # Profile picture
│   └── artworks/             # Gallery images
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── WCACard.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── ImageLightbox.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   └── Dueling.jsx
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   └── main.jsx              # Entry point
├── package.json
└── vite.config.js
```

---

## Design System

### Color Palette
- Primary: #ff4b2b (Orange Red)
- Secondary: #8b5cf6 (Purple)
- Accent: #fb923c (Orange)
- Background: #050505 (Deep Graphite)

### Typography
- Display Font: Outfit (Google Fonts)
- Body Font: Inter (Google Fonts)

### Key Design Elements
- Glassmorphism cards with backdrop-filter
- Gradient text effects
- Smooth transitions and micro-animations
- Box shadows with color tints

---

## Build for Production

### Create optimized build
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Preview production build
```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Pages

### Home (/)
- Hero section with call-to-action buttons
- WCA profile card
- Featured artwork preview

### Gallery (/gallery)
- Grid layout of artwork
- Hover effects with view icon
- Click to open full-screen lightbox
- Lazy loading for performance

### Dueling (/dueling)
- Speedcubing achievements
- WCA competition highlights
- Personal bests showcase

---

## Key Features Explained

### Image Lightbox
Click the eye icon on any gallery image to view it full-screen:
- Smooth fade-in animation
- Click outside or press Esc to close
- Body scroll locked when open
- Displays image caption

### Scroll-to-Top
Automatically scrolls to page top when navigating between pages using React Router.

### Responsive Design
- Desktop: Full-width layout with side-by-side components
- Tablet: Adjusted grid layouts
- Mobile: Single-column stacked layout

---

## Adding New Artwork

1. Add image to public folder:
   ```
   public/artworks/your-artwork.jpg
   ```

2. Update artworks array in Gallery.jsx:
   ```javascript
   const artworks = [
     {
       id: 9,
       title: "Your Artwork Title",
       description: "Description here",
       image: "/artworks/your-artwork.jpg"
     },
     // ... other artworks
   ];
   ```

3. Image recommendations:
   - Format: JPG or PNG
   - Resolution: 1920x1080 (or similar aspect ratio)
   - File size: < 500KB for faster loading

---

## Troubleshooting

### Images not loading
- Check file paths (should start with /)
- Verify images exist in public/ folder
- Clear browser cache

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## License

This project is licensed under the MIT License.

---

<div align="center">
  <p>Built using React + Vite</p>
  <p>© 2026 Bishal Ojha. All rights reserved.</p>
</div>
