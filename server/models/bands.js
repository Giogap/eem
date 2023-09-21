const { database } = require('../config/db');

class Bands {
    constructor(name, country, genre, logo, biography, phone) {
        this.name = name;
        this.country = country;
        this.genre = genre;
        this.logo = logo;
        this.biography = biography;
        this.phone = phone;
    }

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

    static findById(id) {
        return database('bands').where({ band_id: id }).first();
    }

    static getAllBands() {
        return database('bands');
    }
}

module.exports = Bands;

