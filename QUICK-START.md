# ⚡ Quick Start - New Structure

Quick guide to start using the new organized structure.

## Quick Start (5 minutes)

### 1. File Structure

```
your-project/
├── css/                    # ← All styles here
│   ├── main.css           # ← Always include FIRST
│   ├── hero.css
│   ├── about.css
│   ├── projects.css
│   ├── thoughts.css
│   ├── skills.css
│   └── art-gallery.css
│
├── js/                     # ← All JavaScript here
│   ├── main.js            # ← Core functionality
│   ├── navigation.js
│   └── carousel.js
│
├── images/                 # ← All images organized
│   ├── hero/
│   ├── about/
│   ├── projects/
│   └── art/
│
├── vendor/                 # ← External libraries (Bootstrap, etc)
│   ├── bootstrap/
│   ├── jquery/
│   └── fontawesome/
│
└── index.html             # ← Your main page
```

### 2. Basic HTML Template

Create any HTML page using this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    
    <!-- Vendor CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <!-- Custom CSS - ALWAYS in this order! -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/about.css">
    <!-- Add others as needed -->
</head>
<body>
    <!-- Your content here -->
    
    <!-- Vendor JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    
    <!-- Custom JS -->
    <script src="js/main.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/carousel.js"></script>
</body>
</html>
```

### 3. Using CSS Variables

All variables are in `css/main.css`. Use them like this:

```css
/* DON'T do this (hardcoded values): */
.my-element {
  color: #2A2119;
  padding: 20px;
  border-radius: 8px;
}

/* DO this (using variables): */
.my-element {
  color: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

**Available variables:**

```css
/* Colors */
--color-primary: #2A2119;
--color-secondary: #6d3304;
--color-accent: #ff6b6b;
--color-text: #333;
--color-text-light: #666;
--color-bg-white: #ffffff;

/* Spacing */
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */

/* Border Radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;

/* Shadows */
--shadow-sm: 0 4px 12px rgba(0,0,0,0.1);
--shadow-md: 0 8px 24px rgba(0,0,0,0.08);

/* Transitions */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
```

### 4. Ready-Made Utility Classes

Use ready-made classes to save time:

```html
<!-- Spacing -->
<div class="mb-4">Margin bottom 4</div>
<div class="p-3">Padding 3</div>

<!-- Layout -->
<div class="flex-center">Centered</div>
<div class="w-100">Width 100%</div>

<!-- Text -->
<p class="text-center">Centered</p>
<p class="text-justify">Justified</p>
```

### 5. Ready-Made Components

#### Button
```html
<a href="#" class="btn btn-primary">Click here</a>
```

#### Card
```html
<div class="card">
    <div class="card-image">
        <img src="images/example.jpg" alt="Image">
    </div>
    <div class="card-content">
        <h3 class="card-title">Card Title</h3>
        <p class="card-description">Card description here.</p>
    </div>
</div>
```

#### Container/Section
```html
<section class="section">
    <div class="container">
        <h2>My Section</h2>
        <p>Content here...</p>
    </div>
</section>
```

### 6. Adding a New Section

**Step 1:** Create the CSS (e.g., `css/contact.css`)
```css
.contact-section {
  background: var(--color-bg-light);
  padding: var(--spacing-xxl) 0;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
```

**Step 2:** Include in HTML
```html
<link rel="stylesheet" href="css/contact.css">
```

**Step 3:** Add the HTML
```html
<section id="contact" class="section contact-section">
    <div class="container">
        <h2>Contact</h2>
        <form class="contact-form">
            <!-- Your form -->
        </form>
    </div>
</section>
```

### 7. Automatic Responsiveness

The structure is already responsive! But you can customize:

```css
/* Desktop first */
.my-element {
  font-size: 24px;
  padding: 40px;
}

/* Tablet */
@media (max-width: 991px) {
  .my-element {
    font-size: 20px;
    padding: 30px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .my-element {
    font-size: 18px;
    padding: 20px;
  }
}
```

## Practical Examples

### Create a New Project Page

**1. Create the file:** `new-project.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Project</title>
    
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/projects.css">
</head>
<body>
    <section class="section">
        <div class="container">
            <div class="content-wrapper">
                <h1>My New Project</h1>
                <p class="text-justify">Project description...</p>
                
                <div class="image-wrapper">
                    <img src="images/projects/new-project.jpg" alt="New Project">
                </div>
            </div>
        </div>
    </section>
    
    <script src="js/main.js"></script>
</body>
</html>
```

**2. Add the image:** `images/projects/new-project.jpg`

**3. Done!**

### Add Icon with Font Awesome

```html
<!-- Find icons at: https://fontawesome.com/icons -->

<div class="skill-card">
    <div class="skill-icon">
        <i class="fa-solid fa-code"></i>
    </div>
    <h3>Programming</h3>
</div>
```

### Create Image Gallery

```html
<div class="row">
    <div class="col-md-4">
        <div class="image-wrapper">
            <img src="images/art/work1.jpg" alt="Work 1">
            <div class="image-caption">
                <p class="caption-text">Work title - 2024</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="image-wrapper">
            <img src="images/art/work2.jpg" alt="Work 2">
            <div class="image-caption">
                <p class="caption-text">Another work - 2024</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="image-wrapper">
            <img src="images/art/work3.jpg" alt="Work 3">
            <div class="image-caption">
                <p class="caption-text">One more work - 2024</p>
            </div>
        </div>
    </div>
</div>
```

## Golden Rules

1. **ALWAYS** include `main.css` FIRST (before other custom CSS)
2. **NEVER** use inline styles (`style=""`) - use classes
3. **USE** CSS variables instead of hardcoded values
4. **ORGANIZE** images in the correct subfolders (`images/hero/`, `images/about/`, etc)
5. **TEST** on mobile after any change

## Quick Help

### Problem: CSS doesn't work
```html
<!-- Make sure main.css is loaded FIRST -->
<link rel="stylesheet" href="css/main.css"> <!-- ✅ -->
<link rel="stylesheet" href="css/hero.css">
```

### Problem: Image doesn't appear
```bash
# Check the path
# From: <img src="assets/images/photo.jpg">
# To: <img src="images/about/photo.jpg">
```

### Problem: JavaScript doesn't work
```html
<!-- Load in order: jQuery → Bootstrap → Your scripts -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
```

## Complete Documentation

- **REORGANIZATION.md** - Structure overview
- **MIGRATION-GUIDE.md** - Complete migration guide
- **index-new.html** - Complete page example

## Ready!

You're now ready to create clean and organized pages! 

**Tip:** Use `index-new.html` as a reference whenever you have questions.

---

**Created by Paloma L. Sette**
