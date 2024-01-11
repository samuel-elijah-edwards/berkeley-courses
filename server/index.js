const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize
  .sync()
  .then(async () => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });

    // Read the JSON file
    const data = require("../course_info.json");

    // Iterate through the outermost keys (departments)
    for (const department in data) {
      const courses = data[department];

      // Define a dynamic model for each department
      const DynamicModel = db.sequelize.define(
        department.replace(/\s+/g, "_"),
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
        }
      );

      // Check if the table already exists
      const tableExists = await DynamicModel.sync({ force: false })
        .then(() => true)
        .catch(() => false);

      if (!tableExists) {
        // Synchronize the dynamic model with the database
        await DynamicModel.sync({ force: true });

        // Iterate through the courses in each department
        for (const courseCode in courses) {
          const courseDetails = courses[courseCode];

          // Insert data into the dynamic model
          await DynamicModel.create({
            course_code: courseCode,
            course_name: courseDetails.course_name,
            course_units: courseDetails.course_units,
            course_desc: courseDetails.course_desc,
          });
        }

        console.log(
          `Data for department '${department}' inserted successfully!`
        );
      } else {
        console.log(`Table for department '${department}' already exists!`);
      }
    }

    console.log("All data inserted or checked successfully!");
  })
  .catch((err) => {
    console.error("Error syncing models:", err);
  });
