const Note = require('./Note');
const User = require('./User');

Note.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Note, { foreignKey: 'user_id' });

module.exports = { User, Note }