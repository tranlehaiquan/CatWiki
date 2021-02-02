import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 1000,
  headers: {
    'x-api-key': 'DEMO-API-KEY',
  },
});

export default axiosInstance;