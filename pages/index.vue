<template>
  <div>
    <Hero />
    <section id="project" class="pres bg--pink text--left">
      <div class="container">
        <div class="slider">
          <div class="half slider__content">
            <div>
              <h2 class="pink">Explore les évenements des BDE proches de chez toi</h2>
              <p>Grâce à la carte interactive tu peux naviguer entres les différents <span class="pink">événements organisés près de chez toi.</span> Les BDE sont plein de ressources, d'envies mais manquent souvent de moyens de communication et donc de visibilité. KeyEvent la leur offre <span class="pink"> quelques clics.</span></p>
            </div>
            <Button color="pink" value="Voir les maquettes" />
          </div>
          <div class="half slider__img">
            <Calendar class="hover-icon right bg--blue" />
            <img class="featured-img" src="~/assets/img/bde.jpeg" alt="">
          </div>
        </div>
      </div>
    </section>

     <section class="pres text--right">
      <div class="container">
        <div class="slider">
          <div class="half slider__img">
            <Beer class="hover-icon left bg--pink" />
            <img class="featured-img" src="~/assets/img/bar.jpeg" alt="">
          </div>
          <div class="half slider__content">
            <div>
              <h2 class="blue">Accède simplement aux avantages des bars</h2>
              <p class="blue">Bois des coups au meilleur prix grâce au <span class="blue">des différents happy hour</span> et tarifs de nos bars partenaires. KeyEvent recense pour le moment <span class="blue">la majorité des bars Bordelais</span> et tant à s'étendre prochainement dans les plus grandes villes françaises.</p>
            </div>
            <Button place="right" color="blue" value="Voir la liste des bars" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
