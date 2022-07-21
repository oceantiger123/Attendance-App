const router = require("express").Router();
const {
    models: { Date, Member_Date, Member },
} = require("../db");

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
        const singleDateAttend = await Member_Date.findAll({
            where: {
                dateId: req.params.id
            },
            include: [{model: Member}, {model: Date}]
            
        })
        res.json(singleDateAttend)
    } catch(err){
        next(err)
    }
})
//get /api/date/:id/:id/:id?date=Date
router.get("/:id/:id/:id", async(req, res, next) =>{
    try{
        const bodyText = req.query;
        const date = await Date.findAll({
            where: {
                date: bodyText.date
            }
        });
        if(date[0]) {
            res.send("existed")
        } else {
            res.send("not existed");
        }
        //res.json(bodyText)
    } catch(err){
        next(err)
    }
});
//get /api/date/:id/:date?findDate=Date
router.get("/:id/:date", async(req, res, next) =>{
    try{
        const bodyText = req.query;
        const date = await Date.findAll({
            where: {
                date: bodyText.findDate
            }
        });
        if(date[0]) {
            const singleDateAttend = await Member_Date.findAll({
                where: {
                    dateId: date[0].id
                },
                include: [{model: Member}, {model: Date}]
                
            })
            res.json(singleDateAttend)
        } else {
            res.send("Not Found");
        }
        //res.json(bodyText)
    } catch(err){
        next(err)
    }
})

//post /api/dates
router.post("/", async(req, res, next)=>{
    try{
        console.log(req.body)
        await Date.create(req.body);
        const dates = await Date.findAll();
        res.status(201).send(dates)
    }catch(err){
        next(err)
    }
})
module.exports = router;