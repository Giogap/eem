const express = require('express');
const router = express.Router();
const { database } = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [rows, fields] = await database.execute('SELECT 1');
    res.json({ message: 'Conexión exitosa a la base de datos' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
