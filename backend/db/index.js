const seedNote = require('./note-seeds');

const sequelize = require('../config/connection');

// drops all tables and creates new with seed data without having to start the server
// command is 'npm run seed'
const seed = async () => {
  console.log('This may take a second!\n');
  await sequelize.sync({ force: true });
  await seedNote();
  process.exit(0);
}

seed();