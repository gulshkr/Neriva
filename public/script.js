document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Toggle icon
            if (mainNav.classList.contains('active')) {
                mobileToggle.textContent = '✕';
            } else {
                mobileToggle.textContent = '☰';
            }
        });
    }

    // Close mobile nav when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileToggle.textContent = '☰';
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Account for sticky header height
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Testimonials Carousel with Auto-scroll and Pause on Hover
    const testimonialsTrack = document.getElementById('testimonials-track');
    const prevTestimonialBtn = document.getElementById('testimonial-prev');
    const nextTestimonialBtn = document.getElementById('testimonial-next');

    if (testimonialsTrack) {
        let isPaused = false;
        let isUserInteracting = false;
        let resumeTimeout = null;
        const scrollSpeed = 0.75; // px per frame (gentle, readable pace)

        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function autoScroll() {
            if (!isPaused && !isUserInteracting && !prefersReducedMotion) {
                testimonialsTrack.scrollLeft += scrollSpeed;

                // Infinite seamless loop: when halfway through duplicate cards, wrap back to 0
                const halfWidth = testimonialsTrack.scrollWidth / 2;
                if (testimonialsTrack.scrollLeft >= halfWidth) {
                    testimonialsTrack.scrollLeft -= halfWidth;
                }
            }
            requestAnimationFrame(autoScroll);
        }

        // Start auto-scroll
        requestAnimationFrame(autoScroll);

        // Pause on mouse hover & focus
        testimonialsTrack.addEventListener('mouseenter', () => { isPaused = true; });
        testimonialsTrack.addEventListener('mouseleave', () => { isPaused = false; });
        testimonialsTrack.addEventListener('focusin', () => { isPaused = true; });
        testimonialsTrack.addEventListener('focusout', () => { isPaused = false; });

        // Pause on touch interaction for mobile
        testimonialsTrack.addEventListener('touchstart', () => {
            isPaused = true;
            if (resumeTimeout) clearTimeout(resumeTimeout);
        }, { passive: true });

        testimonialsTrack.addEventListener('touchend', () => {
            if (resumeTimeout) clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => { isPaused = false; }, 3000);
        });

        const getCardStep = () => {
            const card = testimonialsTrack.querySelector('.testimonial-card');
            return card ? card.offsetWidth + 24 : 384;
        };

        const temporarilyPause = (duration = 4000) => {
            isPaused = true;
            if (resumeTimeout) clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                isPaused = false;
            }, duration);
        };

        // Arrow Controls
        if (nextTestimonialBtn) {
            nextTestimonialBtn.addEventListener('click', () => {
                temporarilyPause();
                const step = getCardStep();
                testimonialsTrack.scrollBy({ left: step, behavior: 'smooth' });
                setTimeout(() => {
                    const halfWidth = testimonialsTrack.scrollWidth / 2;
                    if (testimonialsTrack.scrollLeft >= halfWidth) {
                        testimonialsTrack.scrollLeft -= halfWidth;
                    }
                }, 400);
            });
        }

        if (prevTestimonialBtn) {
            prevTestimonialBtn.addEventListener('click', () => {
                temporarilyPause();
                const step = getCardStep();
                if (testimonialsTrack.scrollLeft <= 10) {
                    const halfWidth = testimonialsTrack.scrollWidth / 2;
                    testimonialsTrack.scrollLeft += halfWidth;
                }
                testimonialsTrack.scrollBy({ left: -step, behavior: 'smooth' });
            });
        }

        // Mouse drag support for desktop
        let isDown = false;
        let startX = 0;
        let scrollStart = 0;

        testimonialsTrack.addEventListener('mousedown', (e) => {
            isDown = true;
            isUserInteracting = true;
            isPaused = true;
            startX = e.pageX - testimonialsTrack.offsetLeft;
            scrollStart = testimonialsTrack.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                isUserInteracting = false;
                temporarilyPause(3000);
            }
        });

        testimonialsTrack.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsTrack.offsetLeft;
            const walk = (x - startX) * 1.5;
            testimonialsTrack.scrollLeft = scrollStart - walk;
        });
    }
});
