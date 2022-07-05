const router = require("express").Router();
const {
    models: { Date },
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

module.exports = router;