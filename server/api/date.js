const router = require("express").Router();
const {
    models: { Date, Member_Date, Member }, models,
} = require("../db");
const {Op} = require("sequelize");

//get /api/dates
router.get("/", async(req, res, next) => {
    try {
        const dates = await Date.findAll();
        //console.log(dates);
        res.json(dates);
    } catch (err){
        next(err);
    }
});

//get /api/dates/:id
router.get("/:id", async(req, res, next) =>{
    try{
        const singleDateAttend = await Member.findAll({
            include: {
                model: Member_Date,
                where: {
                   dateId: req.params.id
                }
            }
        })
        res.json(singleDateAttend)
    } catch(err){
        next(err)
    }
});
//get /api/date/:id/:id/:id?date=Date
router.get("/:id/:id/:id", async(req, res, next) =>{
    try{
        const bodyText = req.query;
        const date = await Date.findAll({
            where: {
                date: bodyText.date
            }
        });
        if(date[0]) res.json(date[0]);
        else res.send("not existed");
    } catch(err){
        next(err)
    }
});

//post /api/dates
router.post("/", async(req, res, next)=>{
    try{
        let curBody = req.body;
        const dates = await Date.findAll();
        let newBody = {...curBody, "id": dates.length+1};
        let output = await Date.create(newBody);
        //const dates = await Date.findAll();
        res.status(201).send(output)
    }catch(err){
        next(err)
    }
})
module.exports = router;