const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const productRouter = require("./product");
const paymentRouter = require("./payment");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", usersRouter);
router.use("/product", productRouter);
router.use("/payment", paymentRouter);

module.exports = router;
