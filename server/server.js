const express = require("express");
const testRoute = require("./routes/testRoute");

const app = express();

app.use(express.json());

app.use("/test", testRoute); // Asocia la nueva ruta

app.listen(3001, () => {
    console.log("Server Ok 3001");
});