<template>
    <div>
      <h1>Admin Dashboard</h1>
      <div v-if="message">
        <p>{{ message }}</p>
      </div>
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
        message: null,
        errorMessage: null,
      };
    },
    mounted() {
      this.fetchDashboardData();
    },
    methods: {
      fetchDashboardData() {
        const headers = authService.getAuthHeader();
  
        // Making the API call to the dashboard route
        axios.get('http://localhost:3000/api/v1/admin/dashboard', { headers })
          .then(response => {
            this.message = response.data.message;
          })
          .catch(error => {
            this.errorMessage = error.response?.data?.error || 'An error occurred';
          });
      },
    },
  };
  </script>