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
//get /api/members/id:
router.get("/:id", async(req, res, next) => {
    try {
        const member = await Member.findByPk(req.params.id);
       
        res.json(member);
     
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
});
//put /api/members/:id
router.put("/:id", async(req, res, next)=>{
    try{
        const member = await Member.findByPk(req.params.id);
        const updatedMember = await member.update(req.body);
        res.send(updatedMember)
    } catch(err){
        next(err)
    }
})
//delete /api/members/:id
router.delete("/:id", async(req, res, next)=>{
    try{
        const member = await Member.findByPk(req.params.id);
        await member.destroy();
        res.send(member);
    } catch(err){
        next(err)
    }
});
module.exports = router;