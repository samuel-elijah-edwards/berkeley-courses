const express = require("express");
const router = express.Router();
const { CourseRatings } = require("../models");

router.get("/", async (req, res) => {
  try {
    const { course_code } = req.query;

    // Check if course_code is provided, and filter if necessary
    const listOfRatings = course_code
      ? await CourseRatings.findAll({
          where: { course_code: course_code },
        })
      : await CourseRatings.findAll();

    res.json(listOfRatings);
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

// Existing code...

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Add logic to delete the rating based on id
    await CourseRatings.destroy({
      where: { id: id },
    });

    res.json({ message: "Rating deleted successfully" });
  } catch (error) {
    console.error("Error deleting rating:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
