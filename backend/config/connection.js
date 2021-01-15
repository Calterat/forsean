require('dotenv').config();

const Sequelize = require('sequelize');

// the connection to Heroku's JAWSDB or use our .env variables to log into a local MySQL server
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
    });

module.exports = sequelize;