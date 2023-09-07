const db = require("../database/database");


const createBand = (req, res) => {
    const name = req.body.name;
    const contry = req.body.contry;
    const genre = req.body.genre;
    const logo = req.body.logo;
    const biography = req.body.biography;
    const phone = req.body.phone;

    db.query('INSERT INTO bands(name, contry, genre, logo, biography, phone) VALUES (?, ?, ?, ?, ?, ?)', [name, contry, genre, logo, biography, phone], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        }
    });
};

const updateBand = (req, res) => {
    const name = req.body.name;
    const contry = req.body.contry;
    const genre = req.body.genre;
    const logo = req.body.logo;
    const biography = req.body.biography;
    const phone = req.body.phone;
    const id = req.body.id;

    db.query('UPDATE bands SET name = ?, contry = ?, genre = ?, logo = ?, biography = ?, phone = ? WHERE id = ?', [name, contry, genre, logo, biography, phone, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Actualizado Ok");
        }
    });
};

const deleteBand = (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM bands WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};



module.exports = {
    createBand,
    updateBand,
    deleteBand,
};

