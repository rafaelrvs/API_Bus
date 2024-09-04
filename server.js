import express from 'express';
import cors from 'cors';  // Adicionando o cors
import { config } from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Carrega as variáveis de ambiente do arquivo .env
config();

const app = express();
const port = process.env.PORT || 80;

// Configura o CORS para permitir requisições de outras origens (por exemplo, do seu front-end)
app.use(cors({
  origin: 'http://127.0.0.1:5500' // Permite requisições dessa origem específica (onde está seu front-end)
}));

// Middleware para parsing de JSON
app.use(express.json());

// Inicializa o GoogleGenerativeAI com a chave de API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Seleciona o modelo "gemini-1.5-flash"
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Endpoint para análise de blocos de texto
app.post('/analyze', async (req, res) => {
  const { text: blocosEncontrados } = req.body;

  if (!blocosEncontrados) {
    return res.status(400).json({ error: 'O campo "text" é obrigatório.' });
  }

  try {
    // Gera o conteúdo a partir do modelo
    const result = await model.generateContent(blocosEncontrados);

    // Garante que o resultado tenha uma resposta válida
    if (result && result.response && result.response.text()) {
      const resposta = result.response.text();
      res.json({ resposta });
    } else {
      res.status(500).json({ error: 'Falha ao obter uma resposta válida do modelo.' });
    }
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).json({ error: 'Erro ao gerar conteúdo.' });
  }
});

// Inicializa o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
