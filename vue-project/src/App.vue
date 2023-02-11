<script setup>
import { RouterView } from "vue-router";
import MyFooter from "./components/MyFooter.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="navbar">
    <NavBar msg="Jenny G" />
    <RouterView />

    <some-component></some-component>
  </div>
  <!-- Props from MyFooter.vue -->
  <MyFooter :date="230209"></MyFooter>
</template>

<style scoped>
.navbar {
  padding-bottom: 10vh;
}
</style>
