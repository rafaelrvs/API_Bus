import { linhas } from '../data.js'; // Certifique-se de que a importação está correta

class ItinerarioController {
    buscaOnibus = (req, res) => {
        const { codigo } = req.query;

        try {
            // Filtra as linhas para encontrar a que tenha o código solicitado (antes do traço)
            const resultado = linhas.filter(itens => {
                // Verifica se 'linha' existe e é uma string antes de aplicar o 'split'
                if (typeof itens.linha === 'string') {
                    return itens.linha.split(' - ')[0].trim().toUpperCase() === codigo.trim().toUpperCase();
                }
                return false; // Se 'linha' não for uma string, não inclui no resultado
            });

            // Caso a linha não seja encontrada, retorna um erro 404
            if (resultado.length === 0) {
                return res.status(404).json({ message: 'Linha não encontrada' });
            }

            // Verificação de dados de horários, garantindo que sempre será um array
            const horarios = {
                dia_util: Array.isArray(resultado[0].horarios?.dia_util?.horarios) ? resultado[0].horarios.dia_util.horarios : [],
                sabado: Array.isArray(resultado[0].horarios?.sabado?.horarios) ? resultado[0].horarios.sabado.horarios : [],
                domingo_feriado: Array.isArray(resultado[0].horarios?.domingo_feriado?.horarios) ? resultado[0].horarios.domingo_feriado.horarios : []
            };

            // Retornando os detalhes da linha, incluindo os horários
            res.status(200).json({
                linha: resultado[0].linha,
                informacoes_gerais: resultado[0].informacoes_gerais,
                horarios: horarios, // Retorna os horários separados por dia útil, sábado e domingo/feriado
                itinerarios: resultado[0].itinerarios
            });

        } catch (error) {
            // Log detalhado do erro no servidor para diagnóstico
            console.error('Escolha o codigo de seu onibus:', error.message, error.stack);

            // Retornando um erro genérico para o cliente
            res.status(500).json({ error: 'Escolha o codigo de seu onibuss', details: error.message });
        }
    }
}

export default new ItinerarioController();
