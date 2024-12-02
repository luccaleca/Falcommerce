const SolicitacaoFuncionalidade = require('../models/solicitacaoFuncionalidadeModels');

class SolicitacaoFuncionalidadeService {
    
    // Método para criar uma nova solicitação de funcionalidade
    async criarSolicitacao({ usuarioId, funcionalidadeId, tipo, departamento, descricao }) {
        try {
            // Criação da solicitação
            const novaSolicitacao = await SolicitacaoFuncionalidade.create({
                usuarioId,                
                funcionalidadeId: tipo === 'hibrida' ? funcionalidadeId : null, // funcionalidadeId é usado apenas para 'hibrida'
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