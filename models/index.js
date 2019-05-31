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

module.exports = global.db;

