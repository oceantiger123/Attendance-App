const router = require("express").Router();

const {
    models: { Member_Date }
} = require("../db");

router.get("/", async(req, res, next) => {
    try{
        const allAttendance = await Member_Date.findAll();
        res.json(allAttendance);
    }catch (err){
        next(err);
    }
});

module.exports = router;