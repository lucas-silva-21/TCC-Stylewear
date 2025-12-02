const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'R071207d',
    port: 3306,
    database: 'TCC',
    connectionLimit: 10,
});

module.exports = pool;