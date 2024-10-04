const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.envMYSQL_DATABASE, process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,{
        host:process.env.MYSQL_HOST,
        direct:'mysql',
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Banco esta conectado');
    } catch (error) {
        console.error('Erro ao conectar no banco de dados', error);
    }
};

module.exports = { sequelize, connectDB };
