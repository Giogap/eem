const express = require("express");
const router = express.Router();

const bandFormRoutes = require("./bandFormRoutes");

router.use("/bands", bandFormRoutes);

module.exports = router;
