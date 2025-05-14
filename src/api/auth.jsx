import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // adjust for your Laravel URL
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginUser = (credentials) => API.post('/login', credentials);
export const registerUser = (userData) => API.post('/register', userData);

// You can also add logout and other protected routes here
export const logoutUser = () => API.post('/logout');
export default API;
