const { Note } = require('../models');

const noteData = [
  {
    body: 'This is the Note body. It should have more words than the title.',
  }
];

const seedNote = () => Note.bulkCreate(noteData);

module.exports = seedNote;