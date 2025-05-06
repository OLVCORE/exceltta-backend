const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const testOpenaiRoute = require('./routes/test-openai');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/test-openai', testOpenaiRoute);

const PORT = process.env.PORT || 10000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conectado ao MongoDB com sucesso");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.error("Erro ao conectar MongoDB:", err);
});
