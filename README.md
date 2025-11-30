# Paloma L. Sette - Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fpalomaflsette.github.io)](https://palomaflsette.github.io)

Personal portfolio of Paloma L. Sette - PhD Student at Harvard and AI/ML Researcher/Developer at Ford Motor Company.

## About

This is my personal portfolio where I share:
- **Research & Development Projects**
- **Thoughts** on technology and science
- **Art** and poetry
- **Academic and Professional** experiences

## Complete Reorganization (v2.0)

This project underwent a **complete reorganization** to follow modern web development best practices.

### What Changed?

#### Before
- Massive inline CSS (1000+ lines)
- Duplicate styles across multiple files
- Disorganized structure
- Difficult maintenance

#### Now
- **Modular CSS**: 7 files organized by section
- **Modular JavaScript**: 3 files separated by functionality
- **CSS Variables**: Consistent design system
- **Complete Documentation**: Guides and examples
- **Responsive**: Tested across all devices
- **Performance**: Optimized and scalable

## Project Structure

```
palomaflsette.github.io/
├── css/                    # Modular and organized CSS
│   ├── main.css           # Base, variables, components
│   ├── hero.css           # Hero section
│   ├── about.css          # About me
│   ├── projects.css       # Projects
│   ├── thoughts.css       # Blog
│   ├── skills.css         # Skills
│   └── art-gallery.css    # Art gallery
│
├── js/                    # Modular JavaScript
│   ├── main.js           # Core functionality
│   ├── navigation.js     # Menu and navigation
│   └── carousel.js       # Carousels
│
├── images/               # Organized images
├── vendor/               # External libraries
├── art-gallery/          # Art gallery
├── index.html            # Main page
└── docs/                 # Documentation
    ├── REORGANIZATION.md
    ├── MIGRATION-GUIDE.md
    ├── QUICK-START.md
    ├── SUMMARY.md
    └── CHECKLIST.md
```

## Getting Started

### Option 1: View the Website
Visit: [https://palomaflsette.github.io](https://palomaflsette.github.io)

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/palomaflsette/palomaflsette.github.io.git

# Enter the folder
cd palomaflsette.github.io

# Open in browser
# Option A: Using Python
python -m http.server 8000

# Option B: Using Node.js
npx http-server

# Access http://localhost:8000
```

### Option 3: Development

```bash
# Clone and create branch
git clone https://github.com/palomaflsette/palomaflsette.github.io.git
cd palomaflsette.github.io
git checkout -b feature/my-feature

# Install dependencies (if using npm)
npm install

# Develop...

# Commit and push
git add .
git commit -m "feat: add new feature"
git push origin feature/my-feature
```

## Documentation

### For Beginners
**[QUICK-START.md](QUICK-START.md)** - Start here!
- Ready-to-use HTML template
- Practical examples
- Get started in 5 minutes

### To Understand the Structure
**[REORGANIZATION.md](REORGANIZATION.md)**
- Architecture overview
- Available CSS variables
- Component system

### To Migrate Old Code
**[MIGRATION-GUIDE.md](MIGRATION-GUIDE.md)**
- Step-by-step guide
- Before and after
- Troubleshooting

### To Track Progress
**[CHECKLIST.md](CHECKLIST.md)**
- Complete checklist
- Visual progress
- Organized phases

### Executive Summary
**[SUMMARY.md](SUMMARY.md)**
- Metrics and improvements
- Created resources
- Next steps

## Technologies

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Modern styles with CSS variables
- **JavaScript ES6+** - Interactive functionality
- **Bootstrap 5** - Grid system and components
- **Font Awesome 6** - Icons

### Tools
- **Git** - Version control
- **GitHub Pages** - Hosting
- **VS Code** - Editor

### Fonts
- **Instrument Sans** - Main font
- **Instrument Serif** - Secondary font
- **Georgia** - Fallback font

## Features

### CSS Variables
```css
/* Main colors */
--color-primary: #2A2119;
--color-secondary: #6d3304;
--color-accent: #ff6b6b;

/* Spacing */
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;

/* And much more... */
```

### Ready-to-Use Components
- Responsive buttons
- Cards with hover effects
- Carousels with swipe support
- Smooth scroll navigation
- Complete responsive layout

### Utility Classes
- Spacing (mb-1 to mb-5, p-1 to p-5)
- Layout (flex-center, w-100, h-100)
- Text (text-center, text-justify)
- Display (d-none, d-flex, d-grid)

## Responsiveness

Tested and optimized for:
- Desktop (> 1200px)
- Laptop (1024px)
- Tablet (768px)
- Mobile Large (414px)
- Mobile Medium (375px)
- Mobile Small (320px)

## Supported Browsers

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Performance

- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Optimized and modular CSS
- Asynchronous JavaScript
- Optimized images (in progress)

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the project
2. Create a branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'feat: Add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Use the existing modular structure
- Follow established CSS and JS patterns
- Use CSS variables instead of hardcoded values
- Test across multiple devices
- Document significant changes

## Commit Structure

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Refactoring
test: Tests
chore: Maintenance
```

## Bugs and Suggestions

Found a bug or have a suggestion?

1. Check if an [issue](https://github.com/palomaflsette/palomaflsette.github.io/issues) already exists
2. If not, [create a new issue](https://github.com/palomaflsette/palomaflsette.github.io/issues/new)
3. Describe the problem or suggestion in detail
4. Add screenshots if relevant

## Contact

**Paloma L. Sette**

- Email: [paloma.sette@aluno.puc-rio.br](mailto:paloma.sette@aluno.puc-rio.br)
- LinkedIn: [linkedin.com/in/palomasette](https://linkedin.com/in/paloma-sett)
- GitHub: [@palomaflsette](https://github.com/palomaflsette)
- Website: [palomasette.com](https://palomasette.com)

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- **Bootstrap** - CSS Framework
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **GitHub Pages** - Free hosting

## Roadmap

### v2.0 (Current)
- [x] Complete structure reorganization
- [x] Modular CSS
- [x] Modular JavaScript
- [x] Complete documentation

### v2.1 (Next)
- [ ] Migration of all pages
- [ ] Image optimization (WebP)
- [ ] Lazy loading
- [ ] Critical CSS

### v2.2 (Future)
- [ ] Service Worker (PWA)
- [ ] Blog with CMS
- [ ] Automated testing
- [ ] CI/CD pipeline

### v3.0 (Vision)
- [ ] Modern framework (React/Vue)
- [ ] Custom backend
- [ ] Projects API
- [ ] Administrative area

## Project Status

```
Reorganization:  ████████████████████ 100%
Migration:       ███░░░░░░░░░░░░░░░░░  15%
Optimization:    ░░░░░░░░░░░░░░░░░░░░   0%
Testing:         ░░░░░░░░░░░░░░░░░░░░   0%

Overall Progress: 30%
```

## Show Your Support

If you liked this project, consider giving it a star!

---

**Built with ❤️ by Paloma L. Sette**

*Last update: November 2025*
