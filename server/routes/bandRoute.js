const express = require('express');
const router = express.Router();

const bandController = require('../controllers/bandController');

// Ruta para crear una nueva banda
router.post('/createBand', bandController.createBand);

// Ruta para obtener una banda por su ID
router.get('/getBand/:id', bandController.getBandById);

// Ruta para obtener todas las bandas
router.get('/getAllBands', bandController.getAllBands);

module.exports = router;
