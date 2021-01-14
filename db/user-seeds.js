const { User } = require('../models');

const userData = [
  {
    first_name: 'Julian',
    last_name: 'Gillis'
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;