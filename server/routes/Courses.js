const express = require("express");
const router = express.Router();
const db = require("../models");

// Define a route for fetching courses in a specific department
router.get("/:departmentCode", async (req, res) => {
  const departmentCode = req.params.departmentCode.toUpperCase();

  try {
    // Find the dynamic model for the specified department
    const DynamicModel = db.sequelize.models[departmentCode];

    if (!DynamicModel) {
      return res.status(404).json({ error: "Department not found" });
    }

    // Query the database for courses in the department
    const courses = await DynamicModel.findAll();

    // Return the courses in JSON format
    res.json({ department: departmentCode, courses });
  } catch (error) {
    console.error("Error fetching department courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route for fetching a specific course within a department based on course_code
router.get("/:departmentCode/:course_code", async (req, res) => {
  const departmentCode = req.params.departmentCode.toUpperCase();
  const course_code = req.params.course_code;

  try {
    // Find the dynamic model for the specified department
    const DynamicModel = db.sequelize.models[departmentCode];

    if (!DynamicModel) {
      return res.status(404).json({ error: "Department not found" });
    }

    // Query the database for the specific course based on course_code
    const course = await DynamicModel.findOne({
      where: { course_code: course_code },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Return the course in JSON format
    res.json({ department: departmentCode, course });
  } catch (error) {
    console.error("Error fetching specific course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
