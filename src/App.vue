<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <a href="https://vite.dev" target="_blank" class="m-4">
      <img src="/vite.svg" class="logo hover:filter-none" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" class="m-4">
      <img src="./assets/vue.svg" class="logo hover:filter-none" alt="Vue logo" />
    </a>
    <HelloWorld msg="Vite + Vue + Tailwind" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>