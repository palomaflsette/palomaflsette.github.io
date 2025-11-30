/**
 * Carousel Management
 * Handles all carousel functionality (thoughts, projects, images)
 * Author: Paloma L. Sette
 */

(function() {
    'use strict';

    const CarouselManager = {
        carousels: [],
        
        init() {
            this.initThoughtsCarousel();
            this.initProjectsCarousel();
            this.initImageCarousels();
        },
        
        /**
         * Thoughts Carousel
         */
        initThoughtsCarousel() {
            const container = document.querySelector('.thoughts-carousel-container');
            if (!container) return;
            
            const track = container.querySelector('.thoughts-carousel-track');
            const cards = container.querySelectorAll('.thoughts-card');
            const dots = container.querySelectorAll('.thoughts-dots .dot');
            
            if (!track || cards.length === 0) return;
            
            let currentIndex = 0;
            const totalCards = cards.length;
            
            // Function to update carousel
            const updateCarousel = (index) => {
                currentIndex = index;
                const offset = -currentIndex * 100;
                track.style.transform = `translateX(${offset}%)`;
                
                // Update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            };
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateCarousel(index);
                });
            });
            
            // Auto-play (optional)
            const autoPlay = () => {
                const nextIndex = (currentIndex + 1) % totalCards;
                updateCarousel(nextIndex);
            };
            
            // Uncomment to enable auto-play every 5 seconds
            // setInterval(autoPlay, 5000);
            
            // Touch/swipe support
            this.addSwipeSupport(container, () => {
                const nextIndex = (currentIndex + 1) % totalCards;
                updateCarousel(nextIndex);
            }, () => {
                const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCarousel(prevIndex);
            });
            
            // Initialize first slide
            updateCarousel(0);
        },
        
        /**
         * Projects Carousel (horizontal scroll panels)
         */
        initProjectsCarousel() {
            const panels = document.querySelectorAll('.panel');
            if (panels.length === 0) return;
            
            // Add scroll snap behavior
            const container = document.querySelector('.projects-carousel-container');
            if (container) {
                container.style.scrollSnapType = 'x mandatory';
                
                panels.forEach(panel => {
                    panel.style.scrollSnapAlign = 'start';
                });
            }
            
            // Optional: Add navigation dots/arrows
            this.addPanelNavigation(panels);
        },
        
        /**
         * Image Carousels (Bootstrap-based)
         */
        initImageCarousels() {
            const imageCarousels = document.querySelectorAll('[id^="imageCarousel"]');
            
            imageCarousels.forEach(carousel => {
                // Bootstrap carousel is already initialized via Bootstrap JS
                // Add custom behavior if needed
                
                carousel.addEventListener('slide.bs.carousel', (e) => {
                    // Custom behavior on slide
                    console.log('Carousel sliding to:', e.to);
                });
            });
        },
        
        /**
         * Add swipe support for mobile
         */
        addSwipeSupport(element, onSwipeLeft, onSwipeRight) {
            let touchStartX = 0;
            let touchEndX = 0;
            const minSwipeDistance = 50;
            
            element.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            element.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX, minSwipeDistance, onSwipeLeft, onSwipeRight);
            }, { passive: true });
        },
        
        handleSwipe(startX, endX, minDistance, onSwipeLeft, onSwipeRight) {
            const distance = endX - startX;
            
            if (Math.abs(distance) < minDistance) return;
            
            if (distance < 0 && onSwipeLeft) {
                onSwipeLeft();
            } else if (distance > 0 && onSwipeRight) {
                onSwipeRight();
            }
        },
        
        /**
         * Add navigation for panel carousel
         */
        addPanelNavigation(panels) {
            if (panels.length === 0) return;
            
            const container = panels[0].parentElement;
            if (!container) return;
            
            // Create navigation dots
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'panel-dots';
            dotsContainer.style.cssText = `
                position: fixed;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 100;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            
            panels.forEach((panel, index) => {
                const dot = document.createElement('div');
                dot.className = 'panel-dot';
                dot.style.cssText = `
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                `;
                
                dot.addEventListener('click', () => {
                    panel.scrollIntoView({ behavior: 'smooth' });
                });
                
                dotsContainer.appendChild(dot);
            });
            
            document.body.appendChild(dotsContainer);
            
            // Update active dot on scroll
            const updateActiveDot = () => {
                const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
                
                panels.forEach((panel, index) => {
                    const panelTop = panel.offsetTop;
                    const panelHeight = panel.offsetHeight;
                    const dot = dotsContainer.children[index];
                    
                    if (scrollPos >= panelTop - 100 && scrollPos < panelTop + panelHeight - 100) {
                        dot.style.background = '#fff';
                        dot.style.transform = 'scale(1.3)';
                    } else {
                        dot.style.background = 'rgba(255,255,255,0.5)';
                        dot.style.transform = 'scale(1)';
                    }
                });
            };
            
            window.addEventListener('scroll', App.Utils.throttle(updateActiveDot, 100));
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => CarouselManager.init());
    } else {
        CarouselManager.init();
    }

    // Export to global scope
    window.CarouselManager = CarouselManager;

})();
