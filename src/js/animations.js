// Animations au scroll avec Intersection Observer
// À inclure dans votre layout : <script src="/js/animations.js"></script>

document.addEventListener('DOMContentLoaded', () => {
  
  // Configuration de l'Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  // Callback quand un élément entre dans le viewport
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };
  
  // Créer l'observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Observer tous les éléments avec les classes d'animation
  const animatedElements = document.querySelectorAll('.section-animate, .animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
  
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignorer les liens sans destination ou juste "#"
      if (!href || href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      // Offset pour la navigation fixe (hauteur du header)
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});