// routes/auth.js

const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/register", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // Check if another user with the same email exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }

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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if a user with the provided email exists
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Check if the password is correct
    const isPasswordValid = await existingUser.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // You can customize the response as needed
    res.status(200).json({ message: "Login successful.", user: existingUser });
  } catch (error) {
    // Handle any login errors
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;

module.exports = router;
