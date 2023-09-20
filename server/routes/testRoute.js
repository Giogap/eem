const express = require('express');
const router = express.Router();
const { database } = require('../config/db');

router.get('/', (req, res) => {
  database.query('SELECT 1', (error, results, fields) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Conexión exitosa a la base de datos' });
  });
});

module.exports = router;
