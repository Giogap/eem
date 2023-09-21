const Band = require('../models/bands');

const createBand = (req, res) => {
  const { name, country, genre, biography, phone } = req.body;
  const logo = req.file.filename; // Nombre del archivo de la imagen

  const band = new Band(name, country, genre, logo, biography, phone);

  band.save()
    .then(() => res.status(201).json({ message: "Banda creada exitosamente" }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

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
