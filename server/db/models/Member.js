const Sequelize = require('sequelize')
const db = require('../db')

const Member = db.define('member', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phone: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 1234567890
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: "/Users/benye/Desktop/fullstack/aaafolder/asynweek/face-detect/imageHead.webp"
  }
})

module.exports = Member
//   price: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     defaultValue: 10,
//     validate: {
//       min: 1
//     }
//   },
//   stock: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     defaultValue: 0,
//     validate: {
//       min: 0
//     }
//   },
//   animalType: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//     defaultValue: "Details information come soon..."
//   },
//   color: {
//     type: Sequelize.STRING,
//     allowNull: true,
//     defaultValue: "Details information come soon..."
//   },