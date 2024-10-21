import { GoogleGenerativeAI } from "@google/generative-ai";

class ChatController {
    static async enviaMensagem(req, res) {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        try {
            const { text, horarios } = req.body;
            if (!text || !horarios) {
                return res.status(400).json({ error: 'Dados inválidos' });
            }
            const prompt = `${text}${horarios}`
            const result = await model.generateContent(prompt);

            const resposta = result.response.text();
            return res.status(200).json({ resposta });
        } catch (error) {
            return res.status(500).json({ error: 'Erro no servidor' });
        }
    }
}

export default ChatController;
