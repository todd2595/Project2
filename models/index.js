// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
// "use strict";

let Sequelize = require("sequelize");

let DBInfo = {
    host: 'localhost',
    database: 'blog',
    username: 'root',
    password: 'test',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

// let sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
//     host: DBInfo.host,
//     dialect: DBInfo.dialect,
//     pool: DBInfo.pool
// });

// sequelize
//     .authenticate()
//     .then(function () {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(function (err) {
//         console.log('Unable to connect to the database:', err);
//     });

// global.db = {
//     sequelize: sequelize,
//     Sequelize: Sequelize,
//     // User: sequelize.import(__dirname + '/user'),
//     // Post: sequelize.import(__dirname + '/post'),
//     ContentMedia: sequelize.import(__dirname + '/content_media')
// };

module.exports = global.db;

