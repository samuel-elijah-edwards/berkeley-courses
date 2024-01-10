module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define("Courses", {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Courses;
};
