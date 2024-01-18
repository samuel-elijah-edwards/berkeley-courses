const express = require("express");
const router = express.Router();
const { CourseRatings } = require("../models");

router.get("/", async (req, res) => {
  const listofRatings = await CourseRatings.findAll();
  res.json(listofRatings);
});

router.post("/", async (req, res) => {
  const rating = req.body;
  await CourseRatings.create(rating);
  res.json(rating);
});

module.exports = router;
