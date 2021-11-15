<template>
  <div :class="place" class="button-container">
    <a :class="color" target="blank" :href="link">{{ value }}</a>
  </div>
</template>

<script lang="js" src="./Button.js"></script>
<style lang="scss" src="./Button.scss" scoped></style>
