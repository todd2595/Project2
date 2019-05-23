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
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define("user", {
//     idx: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       validate: {
//         notNull: true,
//         notEmpty: true
//       }
//     },
    // eslint-disable-next-line camelcase
    // user_id: {
    //   type: DataTypes.STRING_TYPE,
    //   field: "user_id",
    //   unique: true,
    //   validate: {
    //     notNull: true,
    //     notEmpty: true
    //   }
    // },
    // // eslint-disable-next-line camelcase
    // user_name: {
    //   type: DataTypes.STRING_TYPE,
    //   validate: {
    //     notNull: true,
    //     notEmpty: true
    //   }
    // },
    // // eslint-disable-next-line camelcase
    // user_secret: {
    //   type: DataTypes.STRING_TYPE,
    //   validate: {
    //     notNull: true,
    //     notEmpty: true
    //   }
    // },
    // // eslint-disable-next-line camelcase
    // user_email: {
    //   type: DataTypes.STRING_TYPE,
    //   unique: true,
    //   validate: {
    //     isEmail: true,
    //     notNull: true,
    //     notEmpty: true
    //   }
    // },
    // eslint-disable-next-line camelcase
    user_token: {
      unique: true,
      type: DataTypes.STRING_TYPE,
      validate: {}
    },
    // eslint-disable-next-line camelcase
    token_expire: {
      type: DataTypes.DATE,
      validate: {}
    }
  });
};
