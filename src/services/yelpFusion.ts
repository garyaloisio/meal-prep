import axios from 'axios';

const API_KEY = ''; // Replace with your actual Yelp API key

const axiosInstance = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
