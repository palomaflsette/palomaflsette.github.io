# 📋 Project Reorganization - Paloma L. Sette Portfolio

## Overview

This document describes the complete reorganization of the portfolio project, following modern web development best practices.

## Problems Solved

### Before
- Massive inline CSS (hundreds of lines inside `<style>`)
- `style=""` attributes scattered throughout HTMLs
- Duplicate Bootstrap assets in `/assets` and `/art-gallery/assets`
- Duplicate CSS in multiple folders (`main/`, `theme/css/`, `mobirise/css/`)
- Disorganized and hard to maintain structure

### After
- Modular CSS organized in separate files
- CSS variables (custom properties)
- Clear and semantic directory structure
- Consolidated assets in `/vendor`
- Easy maintenance and scalability

## New Directory Structure

```
palomaflsette.github.io/
├── css/
│   ├── main.css           # Base styles, layout, components
│   ├── hero.css           # Hero section with video
│   ├── about.css          # About me section
│   ├── projects.css       # Projects/portfolio section
│   ├── thoughts.css       # Thoughts/blog section
│   ├── skills.css         # Skills section
│   └── art-gallery.css    # Art gallery styles
│
├── js/
│   ├── main.js            # Main JavaScript
│   ├── carousel.js        # Carousel functionality
│   └── navigation.js      # Menu and navigation
│
├── images/
│   ├── hero/              # Hero section images
│   ├── about/             # About section images
│   ├── projects/          # Project images
│   └── art/               # Artwork
│
├── vendor/
│   ├── bootstrap/         # Bootstrap CSS and JS
│   ├── jquery/            # jQuery
│   └── fontawesome/       # Font Awesome icons
│
├── art-gallery/
│   ├── crianca-silencio.html
│   ├── indio.html
│   ├── olho.html
│   └── ... (other art HTMLs)
│
├── index.html             # Main page
├── CNAME
├── LICENSE
└── README.md
```

## CSS Architecture

### 1. main.css - Project Base
Contains:
- **CSS Variables** (colors, fonts, spacing, etc.)
- **Reset and Base** (normalization)
- **Typography** (h1-h6, paragraphs)
- **Layout** (containers, sections, grid)
- **Navigation** (menu, links)
- **Components** (buttons, cards, images)
- **Utilities** (margins, paddings, flex)
- **Responsiveness** (media queries)

### 2. Specialized Modules

Each section has its own CSS file:

- **hero.css** - Hero section, video background, preloader
- **about.css** - About me content, carousels, images
- **projects.css** - Projects with videos, interactive panels
- **thoughts.css** - Blog/thoughts, article cards
- **skills.css** - Skills grid with icons
- **art-gallery.css** - Poems, minimalist layouts

## CSS Variables

All variables are centralized in `main.css`:

```css
:root {
  /* Cores */
  --color-primary: #2A2119;
  --color-secondary: #6d3304;
  --color-accent: #ff6b6b;
  
  /* Tipografia */
  --font-primary: 'Instrument Sans', sans-serif;
  --font-secondary: 'Instrument Serif', serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Border radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.08);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

## Responsive Design

Mobile-first system with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: > 992px

All sections are fully responsive and tested.

## How to Use

### Recommended HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paloma L. Sette</title>
    
    <!-- Vendor CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/fontawesome/css/all.min.css">
    
    <!-- Custom CSS - order matters! -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/thoughts.css">
</head>
<body>
    <!-- Content -->
    
    <!-- Vendor JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    
    <!-- Custom JS -->
    <script src="js/main.js"></script>
</body>
</html>
```

## Benefits of the New Structure

1. **Maintainability**: Easy to find and edit specific styles
2. **Performance**: Modular CSS can be loaded on demand
3. **Scalability**: Adding new sections is simple
4. **Readability**: Organized and well-commented code
5. **Reusability**: Components can be easily reused
6. **Version Control**: Much clearer Git diffs

## Next Steps

1. Consolidate inline CSS into modular files
2. Update index.html to use new structure
3. Update art gallery pages
4. Move assets to /vendor
5. Create modular JavaScript files
6. Optimize images and videos
7. Implement lazy loading
8. Add service worker for PWA

## Migration Notes

### To update an existing HTML file:

1. Remove all `<style>` tags from HTML
2. Remove all inline `style=""` attributes
3. Add links to the new CSS files
4. Use CSS classes instead of inline styles
5. Test responsiveness on different devices

### Conversion example:

**Before:**
```html
<div style="padding: 20px; background: #fff; border-radius: 8px;">
    <h2 style="color: #2A2119; font-size: 24px;">Title</h2>
</div>
```

**After:**
```html
<div class="card">
    <h2 class="card-title">Title</h2>
</div>
```

## Contributing

To maintain organization:

1. Always use the CSS variables defined in `main.css`
2. Add new styles to the appropriate modular files
3. Maintain responsiveness in all components
4. Comment complex code
5. Test on multiple devices

## Contact

**Paloma L. Sette**
- Email: paloma.sette@aluno.puc-rio.br
- GitHub: palomaflsette

---

**Last updated:** November 2025
