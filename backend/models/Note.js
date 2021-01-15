const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'note'
  }
);

module.exports = Note;