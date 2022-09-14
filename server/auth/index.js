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
  } catch (err) {
    next(err)
  }
});

//put /auth/updatepassword
router.put('/updatepassword', async(req, res, next)=>{
  try{
    res.send(await Admin.verify(req.body));
  } catch (err){
    next(err)
  }
})