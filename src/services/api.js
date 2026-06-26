import axios from 'axios';
import { auth } from '../lib/firebase';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Automatically attach Firebase ID token to every request
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.error || error.message);
    if (error.response?.status === 401 || error.response?.status === 403) {
      // You could dispatch a global event here to force logout if token expires
    }
    return Promise.reject(error);
  }
);

export default api;
