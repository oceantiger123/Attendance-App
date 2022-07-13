const Sequelize = require('sequelize')
const db = require('../db')

const Member_Date = db.define('member_date', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

module.exports = Member_Date