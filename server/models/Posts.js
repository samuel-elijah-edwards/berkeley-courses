module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
