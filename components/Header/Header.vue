<template>
  <header>
    <ul>
      <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="#project">Le projet</a></li>
      <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="#about-us">Qui sommes-nous ?</a></li>
      <li><a @mouseenter="(e) => MouseIn(e)" @mouseleave="(e) => MouseOut(e)" class="menu-item" href="">Contact</a></li>
    </ul>
  </header>
</template>

<script lang="js" src="./Header.js"></script>
<style lang="scss" src="./Header.scss"></style>