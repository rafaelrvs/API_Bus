
class ChatController {
    enviaMensagem = async (req, res) => {
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

    }

}
export default new ChatController();
