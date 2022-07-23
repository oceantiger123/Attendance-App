const Sequelize = require('sequelize')
const db = require('../db')

const Date = db.define('date', {
    date: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Date