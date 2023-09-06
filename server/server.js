const express = require("express");
const cors = require("cors");
const bandFormRoutes = require("./routes/bandFormRoutes");
const keys = require("./config/keys");

const app = express();

app.use(cors());
app.use(express.json());

// Asigna tus rutas al enrutador
app.use("/api/bands", bandFormRoutes);

app.listen(3001, () => {
    console.log("Server Ok 3001");
});

