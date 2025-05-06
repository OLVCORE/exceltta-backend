// config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  openaiApiKey: process.env.OPENAI_API_KEY,
  mongoUri: process.env.MONGO_URI
};
