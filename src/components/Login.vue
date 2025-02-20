<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label>Email:</label>
          <input v-model="email" type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import authService from '@/services/authService';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: null,
      };
    },
    methods: {
      login() {
        authService.login({ email: this.email, password: this.password })
          .then(() => {
            // Redirect to the admin dashboard or another page
            this.$router.push('/admin/dashboard');
          })
          .catch(error => {
            this.errorMessage = error.response?.data?.error || 'Login failed';
          });
      },
    },
  };
  </script>