const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const testOpenaiRoute = require('./routes/test-openai');

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Permitir acesso a arquivos estáticos da pasta 'public' (ex: test.html)
app.use(express.static('public'));

// ✅ Rota de teste para OpenAI
app.use('/test-openai', testOpenaiRoute);

const PORT = process.env.PORT || 10000;

// ✅ Conexão com MongoDB Atlas
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
