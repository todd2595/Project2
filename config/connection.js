var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("GroupFinder", "root", "Panzer19382", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

<<<<<<< HEAD
module.exports = sequelize;
=======
// Exports the connection for other files to use
module.exports = sequelize;
>>>>>>> 3626e554728ba2323f7121af4a20ef9d02c8b65f
