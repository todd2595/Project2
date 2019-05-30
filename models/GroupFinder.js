module.exports = function(sequelize, DataTypes) {
  var GroupFinder = sequelize.define("GroupFinder", {
    activity: {
      type: DataTypes.STRING
      // allowNull: false
    },
    // UnlimitedTime: {
    //   type: Datatypes.BOOLEAN,
    //   defaultValue: false
    // },
    StartTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [5]
      }
    },
    EndTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [5]
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
      allowNull: true
    }
  });
  return GroupFinder;
};
