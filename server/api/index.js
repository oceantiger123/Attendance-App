const router = require("express").Router();
module.exports = router;

router.use("/members", require("./members"));
router.use("/dates", require("./date"));
router.use("/attendance", require("./attendance"));
//router.use("/cart", require("./cart"));
//router.use("/orderdetails", require("./orderDetail"));


router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});