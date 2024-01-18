const express = require("express");
const router = express.Router();
const { CourseRatings } = require("../models");

router.get("/", async (req, res) => {
  try {
    const { course_code } = req.query;

    // Check if course_code is provided, and filter if necessary
    const listofRatings = course_code
      ? await CourseRatings.findAll({
          where: { course_code: course_code },
        })
      : await CourseRatings.findAll();

    res.json(listofRatings);
  } catch (error) {
    console.error("Error fetching ratings data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const rating = req.body;
  await CourseRatings.create(rating);
  res.json(rating);
});

module.exports = router;
