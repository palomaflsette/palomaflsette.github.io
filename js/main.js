/**
 * Main JavaScript File
 * Core functionality and initialization
 * Author: Paloma L. Sette
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        preloaderDelay: 1000,
        scrollOffset: 80,
        videoAutoplay: true
    };

    /**
     * Preloader Management
     */
    const Preloader = {
        element: null,
        
        init() {
            this.element = document.querySelector('.preloader');
            if (this.element) {
                this.hide();
            }
        },
        
        hide() {
            setTimeout(() => {
                this.element.classList.add('hidden');
                setTimeout(() => {
                    this.element.style.display = 'none';
                }, 300);
            }, CONFIG.preloaderDelay);
        }
    };

    /**
     * Smooth Scrolling
     */
    const SmoothScroll = {
        init() {
            this.attachEvents();
        },
        
        attachEvents() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href && href !== '#') {
                        e.preventDefault();
                        this.scrollTo(href);
                    }
                });
            });
        },
        
        scrollTo(target) {
            const element = document.querySelector(target);
            if (element) {
                const offset = CONFIG.scrollOffset;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    /**
     * Video Management
     */
    const VideoManager = {
        init() {
            this.setupVideos();
            this.handleMobileVideos();
        },
        
        setupVideos() {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                // Ensure autoplay on mobile
                video.setAttribute('playsinline', '');
                video.setAttribute('muted', '');
                
                // Try to play when ready
                video.addEventListener('loadeddata', () => {
                    if (CONFIG.videoAutoplay) {
                        video.play().catch(err => {
                            console.log('Video autoplay prevented:', err);
                        });
                    }
                });
                
                // Remove controls completely
                video.controls = false;
                video.removeAttribute('controls');
            });
        },
        
        handleMobileVideos() {
            // Mobile-specific video handling
            if (window.innerWidth <= 768) {
                const videos = document.querySelectorAll('.absolute-video video, .video-services video');
                videos.forEach(video => {
                    video.style.objectFit = 'contain';
                });
            }
        }
    };

    /**
     * Navigation Active State
     */
    const NavigationManager = {
        init() {
            this.updateActiveState();
            window.addEventListener('scroll', () => this.updateActiveState());
        },
        
        updateActiveState() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.pageYOffset + CONFIG.scrollOffset + 1;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.setActiveLink(sectionId);
                }
            });
        },
        
        setActiveLink(sectionId) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    };

    /**
     * Resize Handler
     */
    const ResizeHandler = {
        init() {
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    this.handleResize();
                }, 250);
            });
        },
        
        handleResize() {
            // Recalculate video sizes
            VideoManager.handleMobileVideos();
            
            // Trigger custom resize event
            window.dispatchEvent(new CustomEvent('appResize'));
        }
    };

    /**
     * Utility Functions
     */
    const Utils = {
        // Check if element is in viewport
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        
        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };

    /**
     * Initialize App
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
    }

    function initializeApp() {
        console.log('Initializing Paloma L. Sette Portfolio...');
        
        // Initialize modules
        Preloader.init();
        SmoothScroll.init();
        VideoManager.init();
        NavigationManager.init();
        ResizeHandler.init();
        
        console.log('Portfolio initialized successfully!');
    }

    // Export to global scope if needed
    window.App = {
        CONFIG,
        Preloader,
        SmoothScroll,
        VideoManager,
        NavigationManager,
        Utils
    };

    // Start the app
    init();

})();
