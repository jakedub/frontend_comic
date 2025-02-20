// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import your router

createApp(App)
  .use(router)  // Register the router with the app
  .mount('#app');