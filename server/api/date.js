const router = require("express").Router();
const {
    models: { Date, Member_Date, Member },
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
            },
            include: {
                model: Member
            }
            
        })
        res.json(singleDateAttend)
    } catch(err){
        next(err)
    }
})

router.get("/:id/:date", async(req, res, next) =>{
    try{
        const bodyText = req.query;
        const date = await Date.findAll({
            where: {
                date: bodyText.findDate
            }
        });
        res.json(date);
        //res.json(bodyText)
    } catch(err){
        next(err)
    }
})

module.exports = router;