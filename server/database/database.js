const mysql = require("mysql");
const keys = require("../config/keys"); // Ruta correcta para importar keys.js

const db = mysql.createConnection({
  host: keys.database.host,
  user: keys.database.user,
  password: keys.database.password,
  database: keys.database.database,
});

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos: " + err.message);
  } else {
    console.log("Conexión DB Ok");
  }
});

module.exports = db;
