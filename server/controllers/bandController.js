const Band = require('../models/Band');

// Crear una nueva banda
const createBand = (req, res) => {
  const { name, country, genre, logo, biography, contactNumber } = req.body;
  const band = new Band(name, country, genre, logo, biography, contactNumber);

  band.save()
    .then(() => res.status(201).json({ message: 'Banda creada exitosamente' }))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener una banda por su ID
const getBandById = (req, res) => {
  const { id } = req.params;

  Band.findById(id)
    .then(band => {
      if (band) {
        res.json(band);
      } else {
        res.status(404).json({ message: 'Banda no encontrada' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Obtener todas las bandas
const getAllBands = (req, res) => {
  Band.getAllBands()
    .then(bands => res.json(bands))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  createBand,
  getBandById,
  getAllBands
};
