<script setup>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue';

</script>

<template>
      <NavBar></NavBar>
      <RouterView />
</template>

<style>
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>
