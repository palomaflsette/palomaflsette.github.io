# 🔄 Migration Guide - Old Structure → New

This guide shows how to migrate your current project to the new organized structure.

## Migration Checklist

- [ ] Backup current project
- [ ] Create new folder structure
- [ ] Move assets to /vendor
- [ ] Extract inline CSS into modular files
- [ ] Remove inline styles from HTML files
- [ ] Update references in HTML files
- [ ] Test all pages
- [ ] Verify responsiveness
- [ ] Validate links and images
- [ ] Commit changes

## Step by Step

### 1. Backup

```bash
# Via Git
git checkout -b refactor/clean-structure

# Or copy folder
cp -r palomaflsette.github.io palomaflsette.github.io-backup
```

### 2. Create New Structure

```bash
cd palomaflsette.github.io

# Create new folders
mkdir css js images vendor

# Create subfolders
mkdir vendor/bootstrap vendor/jquery vendor/fontawesome
mkdir images/hero images/about images/projects images/art
```

### 3. Move Assets

#### Bootstrap

```bash
# From: assets/bootstrap/ and art-gallery/assets/bootstrap/
# To: vendor/bootstrap/

cp -r assets/bootstrap/css vendor/bootstrap/
cp -r assets/bootstrap/js vendor/bootstrap/
```

#### jQuery

```bash
# From: art-gallery/assets/web/assets/jquery/
# To: vendor/jquery/

cp -r art-gallery/assets/web/assets/jquery/* vendor/jquery/
```

#### Others

```bash
# Font Awesome, other plugins
cp -r assets/socicon vendor/
cp -r assets/parallax vendor/
# etc.
```

### 4. Migrate CSS

#### A. Identify Inline CSS

Look for:

- `<style>` tags in HTML
- `style=""` attributes in elements

#### B. Extract to Files

**Example - Hero Section Migration:**

**BEFORE (index.html):**

```html
<style>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-logo-section img {
  max-width: 300px;
  width: 100%;
}
</style>
```

**AFTER (css/hero.css):**

```css
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-logo-section img {
  max-width: 300px;
  width: 100%;
}
```

**And in HTML:**

```html
<link rel="stylesheet" href="css/hero.css">
```

#### C. Convert Inline Styles

**BEFORE:**

```html
<div style="padding: 20px; background: #fff; margin-bottom: 2rem;">
  <h2 style="color: #2A2119; font-size: 24px;">Title</h2>
  <p style="line-height: 1.6; color: #666;">Text</p>
</div>
```

**AFTER:**

HTML:

```html
<div class="content-box">
  <h2 class="content-title">Title</h2>
  <p class="content-text">Text</p>
</div>
```

CSS (css/main.css):

```css
.content-box {
  padding: var(--spacing-lg);
  background: var(--color-bg-white);
  margin-bottom: var(--spacing-lg);
}

.content-title {
  color: var(--color-primary);
  font-size: 24px;
}

.content-text {
  line-height: 1.6;
  color: var(--color-text-light);
}
```

### 5. Update index.html

#### BEFORE:

```html
<head>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/theme/css/style.css">
  <link rel="stylesheet" href="assets/main/webflow.css">
  
  <style>
    /* 500+ lines of inline CSS here */
  </style>
</head>
```

#### AFTER:

```html
<head>
  <!-- Vendor CSS -->
  <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
  
  <!-- Custom CSS - Modular -->
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/projects.css">
  <link rel="stylesheet" href="css/thoughts.css">
</head>
```

### 6. Migrate JavaScript

#### BEFORE (all in inline scripts):

```html
<script>
  // Navigation code
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // code...
    });
  });
  
  // Carousel code
  // Video code
  // etc...
</script>
```

#### AFTER (modular):

```html
<script src="js/main.js"></script>
<script src="js/navigation.js"></script>
<script src="js/carousel.js"></script>
```

### 7. Migrate art-gallery/

For each HTML file in the art gallery:

1. Replace:

```html
<!-- BEFORE -->
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<style>
  /* Inline CSS */
</style>

<!-- AFTER -->
<link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/art-gallery.css">
```

2. Remove `<style>` tags
3. Convert inline styles to classes

### 8. Update Image Paths

Organize images by section:

```bash
# Hero images
mv assets/images/hello.png images/hero/
mv assets/images/medieval_tech.gif images/hero/

# About images
mv assets/images/paloma.png images/about/

# Art images
mv art-gallery/assets/images/* images/art/
```

Update in HTML files:

```html
<!-- BEFORE -->
<img src="assets/images/hello.png" alt="Logo">
<img src="art-gallery/assets/images/obra.jpg" alt="Arte">

<!-- AFTER -->
<img src="images/hero/hello.png" alt="Logo">
<img src="images/art/obra.jpg" alt="Arte">
```

## Tests

### Test Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works in all sections
- [ ] Videos autoplay
- [ ] Carousels work (thoughts, projects, images)
- [ ] Internal links work
- [ ] External links work
- [ ] Images load correctly
- [ ] Fonts load correctly
- [ ] Font Awesome icons appear

### Responsive Testing

Test on:

- [ ] Desktop (> 1200px)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobile Large (414px)
- [ ] Mobile Medium (375px)
- [ ] Mobile Small (320px)

### Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Common Problems and Solutions

### Problem: CSS doesn't load

**Cause:** Incorrect path

**Solution:**

```html
<!-- Make sure paths are correct -->
<!-- If index.html is in root: -->
<link rel="stylesheet" href="css/main.css">

<!-- If HTML is in subfolder (e.g., art-gallery/): -->
<link rel="stylesheet" href="../css/main.css">
```

### Problem: Images don't appear

**Cause:** Incorrect image path after reorganization

**Solution:**

```bash
# Use find and replace across the project
# BEFORE: assets/images/
# AFTER: images/

# In VSCode: Ctrl+Shift+H (Find & Replace in Files)
```

### Problem: JavaScript doesn't work

**Cause:** Script loading order

**Solution:**

```html
<!-- Load in correct order -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script src="js/navigation.js"></script>
<script src="js/carousel.js"></script>
```

### Problem: CSS variables don't work

**Cause:** main.css is not being loaded first

**Solution:**

```html
<!-- main.css MUST be the first custom CSS -->
<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css"> <!-- FIRST! -->
<link rel="stylesheet" href="css/hero.css">
<link rel="stylesheet" href="css/about.css">
```

## Before/After Comparison

### Before:

```
index.html                    2,481 lines (with 1000+ lines of inline CSS)
art-gallery/index.html        1,607 lines (with 600+ lines of inline CSS)
crianca-silencio.html           753 lines (with 300+ lines of inline CSS)
+ 5 other similar pages
= Duplicated code, difficult maintenance
```

### After:

```
index-new.html                  ~250 lines (semantic HTML only)
css/main.css                    ~400 lines (reusable)
css/hero.css                    ~150 lines (modular)
css/about.css                   ~200 lines (modular)
css/projects.css                ~250 lines (modular)
css/thoughts.css                ~180 lines (modular)
css/art-gallery.css             ~200 lines (modular)
js/main.js                      ~200 lines (core functionality)
js/navigation.js                ~200 lines (isolated navigation)
js/carousel.js                  ~200 lines (isolated carousels)
= Organized code, easy maintenance, reusable
```

## Benefits Achieved

**Duplication reduction:** ~70% less duplicated code
**Maintainability:** 10x easier to find and edit code
**Performance:** CSS can be cached and loaded on demand
**Scalability:** Adding new sections is simple and fast
**Collaboration:** Other developers understand the structure easily
**Version control:** Git diff shows real changes, not mixed with CSS

## Next Steps After Migration

1. **Asset Optimization**

   - Minify CSS and JS for production
   - Optimize images (WebP, lazy loading)
   - Implement critical CSS
2. **Performance**

   - Add service worker
   - Implement cache strategy
   - Lazy load videos and images
3. **SEO**

   - Add complete meta tags
   - Schema.org markup
   - Sitemap.xml
4. **Accessibility**

   - ARIA labels
   - Color contrast
   - Keyboard navigation

## Support

If you have questions during migration:

1. Check REORGANIZATION.md for structure overview
2. See index-new.html as a complete example
3. Compare old vs new files to understand the changes

---

**Good luck with the migration!**
