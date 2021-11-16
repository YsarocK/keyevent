<template>
  <section id="about-us" class="about-us">
    <div class="container">
      <div>
        <div class="about-us__content">
          <div class="about-us__content__name">
            <p @click="current = 'Alexis'" :class="{active: current == 'Alexis'}">Alexis</p>
            <p @click="current = 'Etienne'" :class="{active: current == 'Etienne'}">Etienne</p>
          </div>
          <div class="about-us__content__description">
            <p :class="{current: current == 'Alexis'}">Né à Bordeaux en 2001, Alexis a grandi en gironde à Lacanau de Mios, il est un pur produit du terroir.
  Passionné depuis toujours par le sport il pratique la voile sur la scène nationale et s’est déjà illustré
  lors de nombreuses compétitions (championnat de France, championnat du monde…).</p>
            <p :class="{current: current == 'Etienne'}">Etienne est né à Toulouse et arrivé à Bordeaux pour ses études. Il se passionne depuis petit pour le code et se lance en freelance en 2020. Alexis le contacte début 2021 pour lui parler de KeyEvent, de là, il devient le développeur de l'application mobile.</p>
          </div>
          <div class="about-us__content__tags">
            <a target="blank" href="https://www.instagram.com/_etienne_mrt_/" :class="{current: current == 'Etienne'}"><Instagram /> Son Instagram</a>
            <a target="blank" href="https://www.instagram.com/alexis_pyrt/" :class="{current: current == 'Alexis'}"><Instagram /> Son Instagram</a>
          </div>
        </div>
        <div class="about-us__img">
          <img :class="{current: current == 'Alexis'}" src="~/assets/img/alexis.jpeg" alt="">
          <img :class="{current: current == 'Etienne'}" src="~/assets/img/etienne.jpeg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js" src="./Aboutus.js"></script>
<style lang="scss" src="./Aboutus.scss" scoped></style>