
<template>
  <body
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <router-view />
</body>
</template>

<script setup>
/* ---------- */
/* Imports    */
/* ---------- */
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
/* ---------- */
/* Variables  */
/* ---------- */
const image = ref("home");
const route = useRoute();
const pathName = ref("home");
/* ---------- */
/* Functions  */
/* ---------- */
// chnage the background image based on the current path
watch(
  () => route.name,
  () => {
    pathName.value = route.name;
    image.value = `../src/assets/backgrounds/background-${pathName.value}.jpg`;
  }
);
</script>

<style>

body {
  grid-template-rows: min-content 1fr;
  background-size: cover;
  background-position: bottom center;
}

a{
  text-decoration: none;
  color: inherit;
}

</style>