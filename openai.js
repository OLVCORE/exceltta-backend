// openai.js
const { Configuration, OpenAIApi } = require("openai");
const config = require("./config");

const configuration = new Configuration({
  apiKey: config.openaiApiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
