const express = require("express");
const cors = require("cors");
const bandRoute = require("./routes/bandRoute"); // Importa la nueva ruta

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bands", bandRoute); // Asocia la nueva ruta

app.listen(3001, () => {
    console.log("Server Ok 3001");
});
