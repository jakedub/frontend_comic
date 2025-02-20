import axios, { AxiosResponse } from 'axios';

// Define the API URL
const API_URL = 'http://localhost:3000/api/v1';  // Adjust this if necessary

// Define the type for the credentials parameter in login
interface Credentials {
  email: string;
  password: string;
}

// Define the response type structure from the login API
interface LoginResponse {
  token: string;
}

// Define the structure of the authService
const authService = {
  // Type the credentials parameter for the login method
  login(credentials: Credentials): Promise<LoginResponse> {
    return axios
      .post(`${API_URL}/login`, credentials)
      .then((response: AxiosResponse<LoginResponse>) => {
        if (response.data.token) {
          // Save token to local storage
          localStorage.setItem('admin_token', response.data.token);
        }
        return response.data;
      });
  },

  // Method to get the authorization header
  getAuthHeader() {
    const token = localStorage.getItem('admin_token');
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  },

  // Method to logout the user and remove the token from localStorage
  logout() {
    localStorage.removeItem('admin_token');
  },
};

export default authService;