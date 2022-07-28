const router = require('express').Router();
const { models: {Admin }} = require('../db');
module.exports = router

//post /auth/login
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await Admin.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
});

//get /auth/me
router.get('/me', async (req, res, next) => {
  try {
   //req.headers.authorization = token
    res.send(await Admin.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
});

// router.post('/signup', async (req, res, next) => {
//   try {
//     const Admin = await Admin.create(req.body)
//     res.send({token: await Admin.generateToken()})
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('Admin already exists')
//     } else {
//       next(err)
//     }
//   }
// })
// "start-server": "JWT=shh node server -e html,js,scss --ignore public --ignore client"