const { createUser } = require('../models/userModels')

const registerUser = async (req, res) => {
    try {
        const { nome_usuario, senha, email } = req.body;

        //validação mínima
        if(!nome_usuario || !senha || !email) {
            return res.status(400).json({ message: 'Todos os campos são obrigatorios'});
        }

        await createUser(nome_usuario, senha, email);
        res.status(201).json ({ messsage: 'Usuario registrado com sucesso'});
    } catch (error) {
        console.error(error) 
        res.status(500).json({ message: 'Erro ao registrar usuario'});
        }
    };

    module.exports = { registerUser };
