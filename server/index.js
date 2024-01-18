const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

// Routers
const courseRatingRoutes = require("./routes/CourseRatings");
app.use("/ratings", courseRatingRoutes);

// Use the courseRoutes for handling department courses
const courseRoutes = require("./routes/Courses");
app.use("/departments", courseRoutes); // Changed the path to /departments

const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);

db.sequelize
  .sync()
  .then(async () => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });

    // Read the JSON file
    const data = require("../course_info.json");
    const regex = /\(([A-Z\s&,]+)\)/;

    // Iterate through the outermost keys (departments)
    for (const department in data) {
      console.log("This is the department: ", department);
      const courses = data[department];

      // Extract content within the parenthesis for the table name
      const matches = RegExp(regex).exec(department);
      const departmentCode = matches[1].replace(" ", "_");
      console.log("DEPT CODE: ", departmentCode);

      if (!departmentCode) {
        console.error(`Invalid department name format: ${department}`);
        continue;
      }

      // Define a dynamic model for each department
      const DynamicModel = db.sequelize.define(
        departmentCode,
        {
          course_code: {
            type: db.Sequelize.DataTypes.STRING,
            primaryKey: true,
          },
          course_name: {
            type: db.Sequelize.DataTypes.STRING,
          },
          course_units: {
            type: db.Sequelize.DataTypes.STRING,
          },
          course_desc: {
            type: db.Sequelize.DataTypes.TEXT,
          },
        },
        {
          tableName: departmentCode, // Set the table name
        }
      );

      // Synchronize the dynamic model with the database
      await DynamicModel.sync();

      // Iterate through the courses in each department
      for (const courseCode in courses) {
        const courseDetails = courses[courseCode];

        // Update existing entry or insert if it doesn't exist
        const [updatedRows] = await DynamicModel.update(
          {
            course_name: courseDetails.course_name,
            course_units: courseDetails.course_units,
            course_desc: courseDetails.course_desc,
          },
          {
            where: { course_code: courseCode },
          }
        );

        if (updatedRows > 0) {
          console.log(
            `Data updated for course '${courseCode}' in department '${department}'`
          );
        } else {
          // Insert data into the dynamic model
          await DynamicModel.create({
            course_code: courseCode,
            course_name: courseDetails.course_name,
            course_units: courseDetails.course_units,
            course_desc: courseDetails.course_desc,
          });

          console.log(
            `Data inserted for course '${courseCode}' in department '${department}'`
          );
        }
      }

      console.log(
        `All data for department '${department}' inserted or updated successfully!`
      );
    }

    console.log("All data inserted or updated successfully!");
  })
  .catch((err) => {
    console.error("Error syncing models:", err);
  });
