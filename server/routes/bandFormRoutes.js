const express = require("express");
const bandFormController = require("../controllers/bandFormController");


const router = express.Router();

// Ruta para crear una banda (POST)
router.post("/createBand", bandFormController.createBand);

// Ruta para actualizar una banda (PUT)
router.put("/updateBand", bandFormController.updateBand);

// Ruta para eliminar una banda (DELETE)
router.delete("/deleteBand/:id", bandFormController.deleteBand);

// Ruta para obtener la lista de bandas (GET)


module.exports = router;
