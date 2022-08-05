const router = require("express").Router();
const { Op } = require("sequelize");
const {
  models: { Member_Date, Member },
} = require("../db");

//get /api/attendance
router.get("/", async (req, res, next) => {
  try {
    const allAttendance = await Member_Date.findAll();
    res.json(allAttendance);
  } catch (err) {
    next(err);
  }
});
//get /api/attendance/:id (unattended members)
router.get("/:id", async (req, res, next) => {
  try {
    const singleDateAttend = await Member_Date.findAll({
      where: {
        dateId: req.params.id,
      },
    });
    const memberIdd = singleDateAttend.map((ele) => ele.memberId);
    const notAttendedMember = await Member.findAll({
      where: {
        id: {
          [Op.notIn]: memberIdd,
        },
      },
    });
    res.json(notAttendedMember);
  } catch (err) {
    next(err);
  }
});

//post /api/attendance
router.post("/", async (req, res, next) => {
  try {
    const attended = await Member_Date.bulkCreate(req.body);
    res.status(201).send(attended);
  } catch (err) {
    next(err);
  }
});

//delete /api/attendance/:dateId
router.delete("/:dateId", async (req, res, next) => {
  try {
    for(let member of req.body){
      let attended = await Member_Date.findOne({
        where: {
          memberId: member.id,
          dateId: req.params.dateId
        },
      });
      await attended.destroy();
    }
    res.send(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
