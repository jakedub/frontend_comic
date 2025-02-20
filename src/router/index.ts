// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/components/Login.vue';  // Update to point to components folder
import Dashboard from '@/components/Dashboard.vue';  // Update to point to components folder

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        next('/login'); // Redirect to login if not authenticated
      } else {
        next(); // Proceed to the dashboard
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;