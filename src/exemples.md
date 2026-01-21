---
layout: base.njk
metaTitle: NOTTALYS – Chanson de mariage personnalisée
metaDesc: Transformez votre histoire d’amour en musique. NOTTALYS crée des chansons de mariage personnalisées, uniques et intemporelles.

---




<div class="back-header">
    <a href="/" class="back-link"><span>←</span><span>RETOUR</span></a>


  <div class="logo">
    <a href="/#">
    <img src="/media/images/logo-nottalys.svg" alt="Nottalys logo" />
    </a>
  </div>
</div>




<main>
    <section class="hero">
        <div class="container">
            <h1>Exemples de musiques <br/>de mariage personnalisées</h1>
            <p class="subtitle">Des chansons uniques créées à partir de votre histoire, grâce à une composition musicale assistée par intelligence artificielle.<br/>
            L’émotion reste humaine. La technologie nous permet d’aller plus loin dans la personnalisation.</p>
        </div>
    </section>

  <div class="stats container">
    <div>NOTTALYS crée des chansons de mariage uniques et sur-mesure. Voici trois exemples de créations, conçues pour accompagner différents moments de la journée : la première danse, l'ouverture de bal et le vin d'honneur. Ces exemples montrent comment l’IA permet aujourd’hui de créer une chanson de mariage personnalisée, sans compromis sur l’émotion.
   </div>
</div>


<section class="steps-section section container scroll-animate" id="process">
    <div class="steps grid-3">

  <div class="step">
        <h3>Entrée de cérémonie</h3>
        <p>Une émotion suspendue</p>
        <p>Une chanson intime et personnalisée, créée pour accompagner l’entrée des mariés lors de la cérémonie, qu’elle soit civile, laïque ou symbolique.  Les paroles racontent leur histoire avec délicatesse, tandis que la musique installe le silence, l’émotion et l’attente.  Un moment hors du temps, vécu avant tout comme un passage, un seuil, une promesse.</p>
        <p>Style: Émotionnel / acoustique<br/>Voix: Masculine<br/>Moment: Entrée de cérémonie</p>

        <a href="/exemples/entree-ceremonie/" class="btn btn-secondary" aria-label="Créer notre chanson de mariage">Découvrir cet exemple</a>
  </div>

  </div>


</section>





        

        <!-- Formulaire de contact -->
 <section class="form-section section scroll-animate" id="commencer">

<div class="form-container">

<form id="contactForm" action="https://formsubmit.co/rastien@gmail.com" method="POST">
        <div class="form-header">
        <h2>Racontez-nous votre histoire</h2>
        <p class="microcopy">Quelques mots suffisent pour commencer. Nous vous répondrons personnellement.</p>

 <a href="index.html#commencer" class="btn btn-primary" aria-label="Créer notre chanson de mariage">   Commencer notre chanson ↗</a>

  </div>


</form>
</div>
</section>



</main>



<script>


            // ============================================
            // STEPS
            // ============================================

            document.addEventListener('DOMContentLoaded', () => {
              if (window.innerWidth > 768) return;

              const steps = document.querySelector('.steps');
              if (!steps) return;

              const wrapper = steps.parentElement;
              wrapper.classList.add('steps-wrapper');

              const updateGradients = () => {
                const scrollLeft = steps.scrollLeft;
                const maxScroll = steps.scrollWidth - steps.clientWidth;

                // gauche
                if (scrollLeft > 10) {
                  wrapper.classList.add('has-left-gradient');
                  } else {
                      wrapper.classList.remove('has-left-gradient');
                  }

                  // droite
                  if (scrollLeft < maxScroll - 10) {
                      wrapper.classList.add('has-right-gradient');
                      } else {
                          wrapper.classList.remove('has-right-gradient');
                      }
                  };

                  // init
                  updateGradients();

                  // on scroll
                  steps.addEventListener('scroll', updateGradients);
                  });
                  </script>

