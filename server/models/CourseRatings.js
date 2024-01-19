module.exports = (sequelize, DataTypes) => {
  const CourseRatings = sequelize.define("CourseRatings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
    },
    course_code: {
      type: DataTypes.STRING,
    },
    postTitle: {
      type: DataTypes.STRING,
    },
    postBody: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    semester: {
      type: DataTypes.STRING,
    },
  });
  return CourseRatings;
};
