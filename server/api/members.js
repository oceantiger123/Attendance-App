const router = require("express").Router();
const {
    models: { Member },
} = require("../db");

router.get("/", async(req, res, next) => {
    try {
        const members = await Member.findAll();
        //console.log(members)
        res.json(members);
    
    } catch(err){
        next(err);
    }
});

module.exports = router;