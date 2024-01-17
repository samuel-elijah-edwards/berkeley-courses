// routes/auth.js

const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/register", async (req, res) => {
  try {
    const { email, password, confirmPassword } = await req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    // Create user in the database
    const newUser = await User.create({ email, password });

    // You can customize the response as needed
    res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    // Handle validation errors or any other registration errors
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
