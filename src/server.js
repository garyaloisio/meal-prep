const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT =  8080;

// Enable CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Route for fetching data from Yelp API
app.get('/businesses/search', async (req, res) => {
  try {
    const { term, location } = req.query;
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      params: {
        term,
        location,
      },
      headers: {
        'Authorization': `Bearer `,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for OpenAI API query
app.post('/openai', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt,
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer `, // Replace with your actual OpenAI API key
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
