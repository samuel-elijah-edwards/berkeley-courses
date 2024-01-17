// models/User.js

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid email address." },
        isBerkeleyEmail(value) {
          if (!value.endsWith("@berkeley.edu")) {
            throw new Error("Email must have a Berkeley domain.");
          }
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 23],
          msg: "Password must be 8-23 characters.",
        },
        isPasswordValid(value) {
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/;
          if (!passwordRegex.test(value)) {
            throw new Error(
              "Password must have 1 uppercase, 1 lowercase, and 1 special character."
            );
          }
        },
      },
    },
  });

  return User;
};
