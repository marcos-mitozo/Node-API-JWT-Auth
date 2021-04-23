const { DataTypes } = require('sequelize');

const db = require('../database/connection')
const sequelize = db.sequelize

const User = sequelize.define('User',
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  },
  {
    tableName: 'User'
  })

module.exports = User