const mysql = require('mysql');

const mysqlPool = mysql.createPool({
    connectionLimit : 4,
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'contactsdb'
});

module.exports = mysqlPool;