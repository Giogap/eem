const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database/database");

const authController = {};

authController.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    db.query("SELECT * FROM users WHERE username = ?", [username], async (error, results) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error retrieving user" });
      } else if (results.length === 0) {
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        const user = results[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          const token = jwt.sign({ userId: user.id }, "your-secret-key", { expiresIn: "1h" });
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = authController;
