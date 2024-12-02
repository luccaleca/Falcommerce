const solicitacaoFuncionalidadeService = require('../services/solicitacaoFuncionalidadeService');

exports.criarSolicitacao = async (req, res) => {
    try {
        const { usuarioId, funcionalidadeId, tipo, departamento, descricao } = req.body;

        

        // Chama o serviço para criar a solicitação
        const novaSolicitacao = await solicitacaoFuncionalidadeService.criarSolicitacao({
            usuarioId,
            funcionalidadeId,
            tipo,
            departamento,
            descricao
        });

        // Retorna a resposta de sucesso
        res.status(201).json({ message: 'Solicitação criada com sucesso', solicitacao: novaSolicitacao });
    } catch (error) {
        // Lida com erros durante a criação da solicitação
        console.error('Erro no controlador ao criar solicitação:', error);
        res.status(400).json({ message: error.message });
    }
};