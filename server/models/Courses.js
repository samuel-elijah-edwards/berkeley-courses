module.exports = (sequelize, DataTypes) => {
  const GenericCourses = sequelize.define("GenericCourses", {
    course_code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    course_name: {
      type: DataTypes.STRING,
    },
    course_units: {
      type: DataTypes.STRING,
    },
    course_desc: {
      type: DataTypes.TEXT,
    },
  });
  return GenericCourses;
};
