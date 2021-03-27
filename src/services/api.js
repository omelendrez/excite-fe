import axios from 'axios';

const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000'
});

export default api;