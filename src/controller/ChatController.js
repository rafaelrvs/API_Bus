import { linhas } from "../data.js"; // Importando o array de linhas de ônibus
import { DateTime } from "luxon"; // Importando o Luxon para trabalhar com fuso horário

class ChatController {
    static async enviaMensagem(req, res) {
        try {
            // Desestruturando os dados recebidos no corpo da requisição
            const { codigo } = req.body;

            // Validando se o campo obrigatório foi enviado
            if (!codigo) {
                return res.status(400).json({ error: 'Dados inválidos. Campo "codigo" é obrigatório.' });
            }

            // Filtrando o ônibus com base no código da linha recebido
            const onibusEscolhido = linhas.find(o => o.linha.startsWith(codigo));

            if (!onibusEscolhido) {
                return res.status(404).json({ error: 'Ônibus não encontrado.' });
            }

            // Determinando o tipo de dia (dia útil, sábado, domingo/feriado)
            const dataAtual = DateTime.now().setZone("America/Sao_Paulo"); // Horário de Brasília
            let tipoDia;

            if (dataAtual.weekday === 7) {
                tipoDia = 'domingo_feriado';
            } else if (dataAtual.weekday === 6) {
                tipoDia = 'sabado';
            } else {
                tipoDia = 'dia_util';
            }

            // Verificando se o tipo de dia é válido no objeto de horários
            const horariosDisponiveis = onibusEscolhido.horarios[tipoDia]?.horarios;

            if (!horariosDisponiveis) {
                return res.status(400).json({ error: 'Horário inválido. Não há horários disponíveis para o tipo de dia selecionado.' });
            }

            // Função para converter horário em minutos (para comparação)
            const converterHorarioParaMinutos = (horario) => {
                const [hora, minuto] = horario.split(':').map(Number);
                return hora * 60 + minuto;
            };

            // Convertendo o horário atual de Brasília para minutos
            const horarioAtualEmMinutos = dataAtual.hour * 60 + dataAtual.minute;

            // Convertendo todos os horários disponíveis para minutos e removendo a legenda
            const horariosEmMinutos = horariosDisponiveis.map(h => {
                const horario = h.split(' ')[0];
                return { horarioOriginal: h, horarioEmMinutos: converterHorarioParaMinutos(horario) };
            });

            // Primeiro método de busca do próximo horário: usando find para o primeiro horário futuro
            const horarioProximoFind = horariosEmMinutos.find(h => h.horarioEmMinutos > horarioAtualEmMinutos);

            // Segundo método de busca do próximo horário: filtrando todos os futuros e pegando o menor
            const horariosFuturos = horariosEmMinutos.filter(h => h.horarioEmMinutos > horarioAtualEmMinutos);
            const horarioProximoFiltered = horariosFuturos.length > 0
                ? horariosFuturos.reduce((prev, curr) => (curr.horarioEmMinutos < prev.horarioEmMinutos ? curr : prev))
                : null;

            // Comparando os dois resultados para verificar consistência
            if (!horarioProximoFind && !horarioProximoFiltered) {
                return res.status(404).json({ error: 'Não há horários disponíveis no momento.' });
            }

            if (horarioProximoFind?.horarioOriginal !== horarioProximoFiltered?.horarioOriginal) {
                console.warn("Os métodos de busca retornaram resultados diferentes. Verifique a lógica.");
            }

            // Escolhendo um dos resultados como resposta
            const horarioProximo = horarioProximoFind || horarioProximoFiltered;

            // Resposta com o próximo horário
            return res.status(200).json({ resposta: `O próximo horário do ${onibusEscolhido.linha} é: ${horarioProximo.horarioOriginal}` });

        } catch (error) {
            // Logando o erro para análise
            console.error(error);
            return res.status(500).json({ error: 'Erro no servidor.' });
        }
    }
}

export default ChatController;
