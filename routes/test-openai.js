const express = require('express');
const router = express.Router();
const openai = require('../openai');

router.post('/test-openai', async (req, res) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "user", content: "Olá, quem é você?" }
      ]
    });

    res.json(completion.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
