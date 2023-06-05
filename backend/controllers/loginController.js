const express = require("express");
const router = express.Router();

const { default: mongoose } = require("mongoose");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await mongoose.connection
      .collection("userData")
      .findOne({ email });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: "Enter your email and password" });
    }
    // If the password not match return an error
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credential" });
    }
    // Else send the Success message
    res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error occurred during login" });
  }
});
module.exports = router;