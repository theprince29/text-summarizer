// server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing JSON bodies



app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Summarize this text in 50 words: ${text}`;

    const result = await model.generateContent(prompt);

    // **IMPORTANT:** Assuming result is a plain string 
    
    const gettext = result.response.text()
    
 
    
    res.json({ summary: gettext });
  } catch (error) {
    console.error('Error summarizing text:', error.message);
    res.status(500).json({ error: 'Failed to summarize text' });
  }
});

// Serve the HTML file for the frontend
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
