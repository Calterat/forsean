const seedUser = require('./user-seeds');
const seedNote = require('./note-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
  console.log('This may take a second!\n');
  await sequelize.sync({ force: true });
  await seedUser();
  await seedNote();
  process.exit(0);
}

seed();