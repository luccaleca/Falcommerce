const solicitacaoFuncionalidadeService = require('../services/solicitacaoFuncionalidadeService');

exports.criarSolicitacao = async (req, res) => {
    try {
        const { usuarioId, funcionalidadeId, tipo, departamento, descricao } = req.body;

<<<<<<< HEAD
        

=======
>>>>>>> 8856e814d9e825c65159e1c63f544e5317a67936
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