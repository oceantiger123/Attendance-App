const router = require("express").Router();
const {
    models: { Date, Member_Date },
} = require("../db");

router.get("/", async(req, res, next) => {
    try {
        const dates = await Date.findAll();
        //console.log(dates);
        res.json(dates);
    } catch (err){
        next(err);
    }
});

router.get("/:id", async(req, res, next) =>{
    try{
        const singleDateAttend = await Member_Date.findAll({
            where: {
                dateId: req.params.id
            }
        })
        res.json(singleDateAttend)
    } catch(err){
        next(err)
    }
})
module.exports = router;