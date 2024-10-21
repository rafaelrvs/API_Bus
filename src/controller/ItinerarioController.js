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

            if (resultado.length === 0) {
                return res.status(404).json({ message: 'Linha não encontrada' });
            }

            // Verificar se cada bloco de horários está presente antes de tentar acessá-los
            const horarios = resultado.map(itens => {
                return {
                    dia_util: itens.horarios?.dia_util?.horarios || [], // Verifica se existe, senão retorna um array vazio
                    sabado: itens.horarios?.sabado?.horarios || [], // Verifica se existe, senão retorna um array vazio
                    domingo_feriado: itens.horarios?.domingo_feriado?.horarios || [] // Verifica se existe, senão retorna um array vazio
                };
            });

            // Retornando todos os detalhes da linha selecionada, incluindo os horários
            res.status(200).json({
                linha: resultado[0].linha,
                informacoes_gerais: resultado[0].informacoes_gerais,
                horarios: horarios[0], // Retorna os horários separados por dia útil, sábado e domingo/feriado
                itinerarios: resultado[0].itinerarios
            });
            
        } catch (error) {
            console.error('Erro ao buscar os ônibus:', error);
            res.status(500).json({ error: 'Erro ao buscar os ônibus' });
        }
    }
}

export default new ItinerarioController();
