module.exports = function(sequelize, DataTypes) {
  var booked = sequelize.define("GroupFinder", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StartTime: {
      type: DataTypes.NUMBER.INTEGER,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    EndTime: {
      type: DataTypes.NUMBER.INTEGER,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    people: {
      type: DataTypes.NUMBER.INTEGER,
      allowNull: true
    }
  });
  booked.sync();
};
