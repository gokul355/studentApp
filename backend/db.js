const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'gokul',
    database: 'wordline'
  });



module.exports = connection