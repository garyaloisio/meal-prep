// openai.ts

import axios from 'axios';

const API_KEY = ''; // Replace with your actual OpenAI API key

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer `, // Use the API_KEY variable here
  },
});

export default openai;
