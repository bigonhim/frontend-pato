import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // This points to your Django backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// ... rest of your interceptor code stays the same ...

export default api;