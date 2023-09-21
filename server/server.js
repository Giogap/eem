const express = require("express");
const cors = require("cors");
const bandRoute = require("./routes/bandRoute"); // Importa la nueva ruta
const testRoute = require("./routes/testRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bands", bandRoute); // Asocia la nueva ruta
app.use("/test", testRoute);

app.listen(3001, () => {
    console.log("Server Ok 3001");
});
