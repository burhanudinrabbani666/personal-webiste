const express = require("express");
const { homePage, article } = require("../controller/guest");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.redirect("/home");
});

router.get("/home", homePage);
router.get("/article/:articleId", article);

module.exports = router;
