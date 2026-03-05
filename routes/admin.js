const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("./admin/admin");
});

router.get("/new", (req, res, next) => {
  const date = new Date().toISOString().split("T")[0];
  res.render("./admin/new", {
    publishDate: date,
  });
});

router.get("/edit/:productId", (req, res, next) => {
  res.render("./admin/edit");
});

// Post

router.post("/new", (req, res, next) => {
  const body = req.body;
  console.log(body);
});

module.exports = router;
