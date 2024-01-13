const express = require("express");
const db = require("./models");

const router = express.Router();

router.get("/:departmentCode/courses", async (req, res) => {
  const departmentCode = req.params.departmentCode;

  try {
    const DynamicModel = db.sequelize.model(departmentCode);

    const courses = await DynamicModel.findAll({
      attributes: ["course_code", "course_name"],
    });

    res.json({ courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
