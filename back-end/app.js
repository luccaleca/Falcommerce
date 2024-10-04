const express = require('express');
const authRoutes = require('./routes/AuthRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});