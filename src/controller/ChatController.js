import axios from 'axios';

class ChatController {
    constructor() {
        this.apiKey = process.env.API_KEY; // Use a chave da API do ambiente
        this.apiUrl = 'https://api.google-gemini.com/v1/generate'; // Substitua pelo endpoint correto
    }

    enviaMensagem = async (req, res) => {
        const { text: blocosEncontrados } = req.body; // Extrai o campo "text" do corpo da requisição
        console.log(req.body);

        // Verifica se o campo "text" foi fornecido na requisição
        if (!blocosEncontrados) {
            return res.status(400).json({ error: 'O campo "text" é obrigatório.' });
        }

        try {
            // Faz a requisição para a API do Google Gemini
            const response = await axios.post(
                this.apiUrl,
                {
                    prompt: {
                        text: blocosEncontrados, // Usa o texto enviado pelo usuário como prompt
                    }
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Verifica se a resposta da API contém um texto válido
            if (response.data && response.data.message && typeof response.data.message.text === 'string') {
                const resposta = response.data.message.text;

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
                // Retorna um erro se a resposta da API for inválida
                res.status(500).json({ error: 'Falha ao obter uma resposta válida do modelo.' });
            }
        } catch (error) {
            // Captura e trata qualquer erro que ocorrer durante o processo
            console.error('Erro ao gerar conteúdo:', error);
            res.status(500).json({ error: 'Erro ao gerar conteúdo.' });
        }
    }
}

export default new ChatController();
