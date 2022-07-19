const router = require("express").Router();
const {
    models: { Member },
} = require("../db");


//get /api/members
router.get("/", async(req, res, next) => {
    try {
        const members = await Member.findAll();
        //console.log(members)
        res.json(members);
     
    } catch(err){
        next(err);
    }
});

//post /api/members
router.post("/", async(req, res, next)=> {
    try {
        await Member.create(req.body);
        const members = await Member.findAll();
        res.status(201).send(members)
    } catch(err){
        next(err)
    }
})
module.exports = router;