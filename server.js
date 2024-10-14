import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cookieParser from 'cookie-parser'; // Importa o cookie-parser

// Carrega as variáveis de ambiente do arquivo .env
config();

const app = express();
const port = process.env.PORT || 80;

// Middleware para CORS
app.use(cors({
  origin: 'https://consultaonibus.rvstechsolucoes.com.br', // Permite múltiplas origens (para ambiente local e produção)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permite o envio de cookies entre o front-end e o back-end
}));

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para parsing de cookies
app.use(cookieParser()); // Adiciona o cookie-parser

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
      const resposta = await result.response.text();

      // Define o cookie com as opções SameSite=None e Secure
      res.cookie('mySecureCookie', 'cookieValue', {
        httpOnly: true,          // Impede o acesso ao cookie via JavaScript no front-end
        secure: true,            // Garante que o cookie só seja enviado em conexões HTTPS
        sameSite: 'None',        // Permite o envio do cookie em contextos de site cruzado
        maxAge: 3600000,         // Tempo de vida do cookie (1 hora, neste exemplo)
      });

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
