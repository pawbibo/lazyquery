const mysql = require('mysql');

require('dotenv').config({ path: 'variables.env' });

const pool = mysql.createPool({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

exports.pool = pool;

pool.getConnection((err, conn) => {
  conn.query('SHOW TABLES', (err, tables, fields) => {
    conn.release();
    if (err) throw err;
    exports.tables = tables;
  });
});