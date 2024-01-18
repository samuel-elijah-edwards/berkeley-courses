module.exports = (sequelize, DataTypes) => {
  const CourseRatings = sequelize.define("CourseRatings", {
    user: {
      type: DataTypes.STRING,
      primaryKey: true,
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
  });
  return CourseRatings;
};
