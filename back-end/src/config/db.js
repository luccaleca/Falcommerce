require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    
});

console.log('Host:', process.env.MYSQL_HOST);
console.log('User:', process.env.MYSQL_USER);
console.log('Password:', process.env.MYSQL_PASSWORD);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

module.exports = connection;