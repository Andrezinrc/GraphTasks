const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'user',
    password: 'password',
    database: 'database'
});

connection.connect((err) => {
    if(err){
        console.error('erro ao tentar conectar o banco', err.message);
        return;
    }
    console.log('conectado ao banco de dados');
});

module.exports = connection;