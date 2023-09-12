// models/Band.js

const { database } = require('../config/db'); // Importa la configuración de la base de datos

class Bands {
  // Constructor que toma los datos de la banda
  constructor(name, country, genre, logo, biography, phone) {
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.logo = logo;
    this.biography = biography;
    this.phone = phone;
  }

  // Método para guardar una banda en la base de datos
  save() {
    return database('bands').insert({
      name: this.name,
      country: this.country,
      genre: this.genre,
      logo: this.logo,
      biography: this.biography,
      phone: this.phone
    });
  }

  // Método para buscar una banda por su ID
  static findById(id) {
    return database('bands').where({ band_id: id }).first();
  }

  // Método para obtener todas las bandas
  static getAllBands() {
    return database('bands');
  }
}

module.exports = Bands;
