module.exports = function(sequelize, DataTypes) {
  var GroupFinder = sequelize.define("GroupFinder", {
    activity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    searchTerm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
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
