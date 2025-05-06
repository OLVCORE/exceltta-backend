require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  openaiApiKey: process.env.OPENAI_API_KEY
};
