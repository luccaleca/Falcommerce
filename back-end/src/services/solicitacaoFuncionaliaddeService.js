const SolicitacoesFuncionalidade = require('../models/SolicitacoesFuncionalidade');

class SolicitacaoFuncionalidadeService {
    
    // Método para criar uma nova solicitação de funcionalidade
    async criarSolicitacao({ usuarioId, funcionalidadeId, tipo, departamento, descricao }) {
        try {
            // Validações
            if (tipo === 'hibrida' && !funcionalidadeId) {
                throw new Error('funcionalidadeId é necessário para funcionalidades híbridas');
            }

            if (tipo === 'personalizada' && funcionalidadeId) {
                throw new Error('funcionalidadeId não deve ser fornecido para funcionalidades personalizadas');
            }

            const novaSolicitacao = await SolicitacoesFuncionalidade.create({
                usuarioId,
                funcionalidadeId: tipo === 'hibrida' ? funcionalidadeId : null,
                tipo,
                departamento,
                descricao
            });

            return novaSolicitacao;
        } catch (error) {
            console.error('Erro ao criar solicitação de funcionalidade:', error);
            throw new Error('Erro ao criar solicitação');
        }
    }
}

module.exports = new SolicitacaoFuncionalidadeService();