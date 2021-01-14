const { Note } = require('../models');

const noteData = [
  {
    title: 'This is a Note Title Test',
    body: 'This is the Note body. It should have more words than the title.',
    user_id: 1
  }
];

const seedNote = () => Note.bulkCreate(noteData);

module.exports = seedNote;