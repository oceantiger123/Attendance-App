//this is the access point for all things database related!

const db = require('./db')

const Member = require('./models/Member')
const Date = require('./models/Date')
const Member_Date = require('./models/MemberDate')

// const User = require('./models/User')
// const Order = require('./models/Order')
// const Order_Products = require('./models/OrderProducts')

//associations could go here!
// Order.belongsTo(User)
// User.hasMany(Order)

// Product.belongsToMany(Order, {through: Order_Products})
// Order.belongsToMany(Product, {through: Order_Products})

Member.belongsToMany(Date, { through: Member_Date});
Date.belongsToMany(Member, {through: Member_Date})


module.exports = {
    db,
   models: {
       Member,
       Date,
      Member_Date
    //   Product,
    //   Order,
    //   Order_Products
    },
  }