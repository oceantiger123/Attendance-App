const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 5;

const Admin = db.define('admin', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = Admin

/**
 * instanceMethods
 */
 Admin.prototype.correctPassword = function(candidatePwd) {
    //we need to compare the plain version to an encrypted version of the password
    return bcrypt.compare(candidatePwd, this.password);
  };
  
  Admin.prototype.generateToken = function() {
    return jwt.sign({id: this.id}, process.env.JWT)
  }
  
  /**
   * classMethods
   */
  Admin.authenticate = async function({ username, password }){
      const Admin = await this.findOne({where: { username }})
      if (!Admin || !(await Admin.correctPassword(password))) {
        const error = Error('Incorrect username/password');
        error.status = 401;
        throw error;
      }
      return Admin.generateToken();
  };
  
  Admin.verify = async function({username, password, newpassword}){
    const Admin = await this.findOne({where: {username}})
    if (!Admin || !(await Admin.correctPassword(password))){
      const error = Error('Incorrect username/password');
      error.status = 401;
      throw error;
    }
    await Admin.update({password: newpassword});
    return Admin
  }

  Admin.findByToken = async (token)=> {
    try {
      const res = await jwt.verify(token, process.env.JWT);
      const admin = Admin.findByPk(res.id)
      if (!admin) {
          const err = Error('nooo');
        throw err;
      }
      return admin
    } catch (ex) {
      const error = Error('bad token')
      error.status = 401
      throw error
    }
  }
  
  /**
   * hooks
   */
  const hashPassword = async(Admin) => {
    //in case the password has been changed, we want to encrypt it with bcrypt
    if (Admin.changed('password')) {
      Admin.password = await bcrypt.hash(Admin.password, SALT_ROUNDS);
    }
  }
  
  Admin.beforeCreate(hashPassword)
  Admin.beforeUpdate(hashPassword)
  Admin.beforeBulkCreate(Admins => Promise.all(Admins.map(hashPassword)))
  