import React, { useState } from 'react';
import axios from 'axios';

const MealPlanForm: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [responseText, setResponseText] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/openai', { prompt: 'Your prompt here' });
      setResponseText(response.data);
    } catch (error) {
      console.error('Error:', error);
      console.log(error)
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div>
      <h2>OpenAI API Query</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {responseText && (
        <div>
          <h3>Response:</h3>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
};

export default MealPlanForm;
