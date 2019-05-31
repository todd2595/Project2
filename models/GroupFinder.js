module.exports = function(sequelize, DataTypes) {
  var GroupFinder = sequelize.define("GroupFinder", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // UnlimitedTime: {
    //   type: Datatypes.BOOLEAN,
    //   defaultValue: false
    // },
    StartTime: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [6, 7]
      }
    },
    EndTime: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [6, 7]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    people: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 120]
      }
    }
  });
  return GroupFinder;
};
