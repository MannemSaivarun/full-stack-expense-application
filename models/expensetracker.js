const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const expensetracker = sequelize.define('expensetracker',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  expense: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false

  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
    
  },
  carname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false

  }
  
  
});


module.exports = expensetracker;