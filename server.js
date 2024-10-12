import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Carrega as variáveis de ambiente do arquivo .env
config();

const app = express();
const port = process.env.PORT || 80;

// Configura o CORS para permitir a origem do front-end na Vercel
app.use(cors({
  origin: 'https://www.rvstechsolucoes.com.br/', // Corrigido para o domínio correto
  methods: ['GET', 'POST'], // Definir os métodos permitidos
}));

// Middleware para parsing de JSON
app.use(express.json());

// Inicializa o GoogleGenerativeAI com a chave de API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
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
    if (result && result.response && typeof result.response.text === 'function') {
      const resposta = await result.response.text(); // Adicionado 'await' para garantir a resolução
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
