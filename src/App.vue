<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import SideBar from './components/SideBar.vue';
import TheWelcome from './components/TheWelcome.vue';

</script>

<template>
  <header>
    <div class="wrapper overflow-hidden">
      <Navbar />
    </div>
  </header>
  <div class="app-bottom">
  <SideBar />
  <RouterView />
  </div>

</template>

<style>
@import '@/assets/base.css';

.app-bottom {
  height: 100vh;
  overflow-y: auto;
}

</style>
