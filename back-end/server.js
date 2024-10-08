//server.js
const express = require('express');
const db = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const registerRoutes = require('./src/routes/registerRoutes');
const homeRoutes = require('./src/routes/index');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/register', registerRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});