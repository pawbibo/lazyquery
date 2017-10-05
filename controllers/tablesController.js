const mysql = require('mysql');
const db = require('../db');

exports.showTable = (req, res) => {
  db.pool.getConnection((err, conn) => {
    conn.query(`DESCRIBE ${req.params.table}`, (err, results, fields) => {
      conn.release();
      if (err) throw err;

      res.render('table', {
        title: req.params.table,
        tables: db.tables,
        table_def: results
      });
    });
  });
};

exports.query = (req, res) => {
  const fields = req.query.fields.join(', ');
  db.pool.getConnection((err, conn) => {
    conn.query(`SELECT ${fields} FROM ${req.query.table} LIMIT 5`, (err, results, fields) => {
      conn.release();
      if (err) throw err;

      res.render('results', { results });
    });
  });
};