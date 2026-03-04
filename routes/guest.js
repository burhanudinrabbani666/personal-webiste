const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.redirect("/home");
});

router.get("/home", (req, res, next) => {
  res.render("./guest/home");
});

router.get("/article/:productId", (req, res, next) => {
  const productId = req.params.productId;

  res.render("./guest/article", {
    productId,
  });
});

module.exports = router;
