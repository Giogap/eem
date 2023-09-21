const express = require("express");
const router = express.Router();
const { createBand } = require("../controllers/bandController");
const multer = require("multer");

// Configuración de multer para manejar los archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // Aquí es donde se almacenarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Ruta para crear una banda
router.post("/createBand", upload.single("logo"), createBand);

module.exports = router;

