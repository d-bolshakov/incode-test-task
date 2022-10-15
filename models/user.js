const Sequelize = require('sequelize')
const db = require('../utils/database')

const User = db.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  boss_id: {
    type: Sequelize.INTEGER
  }
}, {timestamps: false})

module.exports = User