import { GoogleGenerativeAI } from '@google/generative-ai';

class ChatController {
    constructor() {
        // Inicializa o cliente da API Google Generative AI com a chave API
        this.genAI = new GoogleGenerativeAI({
            apiKey: process.env.API_KEY, // Use a chave da API do ambiente
        });
    }

    // Método que envia uma mensagem para a API Google Generative AI
    enviaMensagem = async (req, res) => {
        const { text: blocosEncontrados } = req.body; // Extrai o campo "text" do corpo da requisição

        // Verifica se o campo "text" foi fornecido na requisição
        if (!blocosEncontrados) {
            return res.status(400).json({ error: 'O campo "text" é obrigatório.' });
        }

        try {
            // Envia o prompt para a API Google Generative AI e aguarda a resposta
            const result = await this.genAI.generateMessage({
                prompt: {
                    text: blocosEncontrados, // Usa o texto enviado pelo usuário como prompt
                }
            });

            // Verifica se a resposta do modelo contém um texto válido
            if (result && result.message && typeof result.message.text === 'string') {
                const resposta = result.message.text;

                // Define o cookie com as opções SameSite=None e Secure
                res.cookie('mySecureCookie', 'cookieValue', {
                    httpOnly: true,          // Impede o acesso ao cookie via JavaScript no front-end
                    secure: true,            // Garante que o cookie só seja enviado em conexões HTTPS
                    sameSite: 'None',        // Permite o envio do cookie em contextos de site cruzado
                    maxAge: 3600000,         // Tempo de vida do cookie (1 hora, neste exemplo)
                });

                // Retorna a resposta gerada para o cliente
                res.json({ resposta });
            } else {
                // Retorna um erro se a resposta do modelo for inválida
                res.status(500).json({ error: 'Falha ao obter uma resposta válida do modelo.' });
            }
        } catch (error) {
            // Captura e trata qualquer erro que ocorrer durante o processo
            console.error('Erro ao gerar conteúdo:', error);
            res.status(500).json({ error: 'Erro ao gerar conteúdo.' });
        }
    }
}

// Exporta o controlador como uma instância única
export default new ChatController();
