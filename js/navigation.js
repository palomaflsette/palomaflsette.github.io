/**
 * Navigation Management
 * Handles navigation menu, mobile menu, and scroll effects
 * Author: Paloma L. Sette
 */

(function() {
    'use strict';

    const Navigation = {
        navbar: null,
        navLinks: null,
        mobileMenuButton: null,
        isScrolled: false,
        
        init() {
            this.navbar = document.querySelector('.master-navigation');
            this.navLinks = document.querySelectorAll('.nav-link');
            
            if (!this.navbar) return;
            
            this.attachScrollListener();
            this.attachLinkHoverEffects();
            this.attachMobileMenu();
            this.attachColorChangeEffects();
        },
        
        /**
         * Handle navbar on scroll
         */
        attachScrollListener() {
            const handleScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 50 && !this.isScrolled) {
                    this.navbar.classList.add('scrolled');
                    this.isScrolled = true;
                } else if (scrollTop <= 50 && this.isScrolled) {
                    this.navbar.classList.remove('scrolled');
                    this.isScrolled = false;
                }
            };
            
            window.addEventListener('scroll', App.Utils.throttle(handleScroll, 100));
            handleScroll(); // Initial check
        },
        
        /**
         * Link hover effects
         */
        attachLinkHoverEffects() {
            this.navLinks.forEach(link => {
                const bg = link.querySelector('.nav-link-bg');
                
                if (!bg) return;
                
                link.addEventListener('mouseenter', () => {
                    bg.style.width = '100%';
                });
                
                link.addEventListener('mouseleave', () => {
                    if (!link.classList.contains('active')) {
                        bg.style.width = '0';
                    }
                });
            });
        },
        
        /**
         * Mobile menu toggle
         */
        attachMobileMenu() {
            // Create mobile menu button if it doesn't exist
            const mobileButton = document.querySelector('.mobile-menu-button');
            if (!mobileButton) {
                this.createMobileMenuButton();
            }
            
            // Close menu when clicking a link
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        },
        
        createMobileMenuButton() {
            const button = document.createElement('button');
            button.className = 'mobile-menu-button';
            button.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
            button.setAttribute('aria-label', 'Toggle navigation menu');
            
            // Add styles
            button.style.cssText = `
                display: none;
                flex-direction: column;
                gap: 5px;
                background: none;
                border: none;
                padding: 10px;
                cursor: pointer;
            `;
            
            button.querySelectorAll('span').forEach(span => {
                span.style.cssText = `
                    display: block;
                    width: 25px;
                    height: 3px;
                    background: var(--color-primary, #2A2119);
                    transition: all 0.3s ease;
                `;
            });
            
            // Show on mobile
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: flex !important;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Toggle functionality
            button.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
            
            const navContainer = this.navbar.querySelector('.nav-container');
            if (navContainer) {
                navContainer.insertBefore(button, navContainer.firstChild);
            }
            
            this.mobileMenuButton = button;
        },
        
        toggleMobileMenu() {
            const navLinks = this.navbar.querySelector('.wrap-navigation-links');
            if (!navLinks) return;
            
            const isOpen = navLinks.classList.contains('mobile-open');
            
            if (isOpen) {
                this.closeMobileMenu();
            } else {
                this.openMobileMenu();
            }
        },
        
        openMobileMenu() {
            const navLinks = this.navbar.querySelector('.wrap-navigation-links');
            if (!navLinks) return;
            
            navLinks.classList.add('mobile-open');
            
            if (this.mobileMenuButton) {
                this.mobileMenuButton.classList.add('open');
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        },
        
        closeMobileMenu() {
            const navLinks = this.navbar.querySelector('.wrap-navigation-links');
            if (!navLinks) return;
            
            navLinks.classList.remove('mobile-open');
            
            if (this.mobileMenuButton) {
                this.mobileMenuButton.classList.remove('open');
            }
            
            // Restore body scroll
            document.body.style.overflow = '';
        },
        
        /**
         * Color change effects based on section
         */
        attachColorChangeEffects() {
            const sections = document.querySelectorAll('section[id]');
            
            const updateNavColor = () => {
                const scrollPos = window.pageYOffset + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionColor = section.getAttribute('color');
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        // Update navbar background based on section
                        if (sectionColor === 'bg') {
                            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                        } else if (sectionColor === 'dark') {
                            this.navbar.style.background = 'rgba(42, 33, 25, 0.95)';
                            this.navLinks.forEach(link => {
                                link.style.color = '#ffffff';
                            });
                        } else {
                            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                            this.navLinks.forEach(link => {
                                link.style.color = '';
                            });
                        }
                    }
                });
            };
            
            window.addEventListener('scroll', App.Utils.throttle(updateNavColor, 100));
        },
        
        /**
         * Highlight active section in nav
         */
        highlightActiveSection() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.pageYOffset + 120;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    // Remove active from all links
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        const bg = link.querySelector('.nav-link-bg');
                        if (bg) bg.style.width = '0';
                    });
                    
                    // Add active to current section link
                    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        const bg = activeLink.querySelector('.nav-link-bg');
                        if (bg) bg.style.width = '100%';
                    }
                }
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => Navigation.init());
    } else {
        Navigation.init();
    }

    // Update active section on scroll
    window.addEventListener('scroll', App.Utils.throttle(() => {
        Navigation.highlightActiveSection();
    }, 100));

    // Export to global scope
    window.Navigation = Navigation;

})();
