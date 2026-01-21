

        // ============================================
        // MOBILE MENU
        // ============================================
        
        // Toggle mobile menu
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            const burger = document.querySelector('.burger-menu');
            menu.classList.toggle('active');
            burger.classList.toggle('active');
        }

        // ============================================
        // SCROLL ANIMATIONS
        // ============================================
        
        // Intersection Observer pour les animations au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observer toutes les sections avec la classe scroll-animate
        document.querySelectorAll('.scroll-animate').forEach(section => {
            observer.observe(section);
        });