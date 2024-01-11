const express = require("express");
const router = express.Router();
const { Courses } = require("../models");

router.get("/", async (req, res) => {
  const listOfCourses = await Courses.findAll();
  res.json(listOfCourses);
});

module.exports = router;
