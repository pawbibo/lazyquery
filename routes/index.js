var express = require('express');
var router = express.Router();

const tablesController = require('../controllers/tablesController');
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'lazyquery', tables: db.tables });
});

router.get('/tables/:table', tablesController.showTable);
router.get('/table/query', tablesController.query);

module.exports = router;
