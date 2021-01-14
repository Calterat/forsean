const { User } = require('../models');

const userData = [
  {
    name: 'Julian'
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;