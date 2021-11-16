<template>
  <footer>
    <div class="container">
      <ul>
        <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="#project">Le projet</a></li>
        <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="#about-us">Qui sommes-nous ?</a></li>
        <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="">Contact</a></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="js" src="./Footer.js"></script>
<style lang="scss" src="./Footer.scss"></style>