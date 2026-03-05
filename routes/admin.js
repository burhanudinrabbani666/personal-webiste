const express = require("express");
const router = express.Router();
const { ulid } = require("ulid");
const { getArticle, publishNewArticle } = require("../models/article.js");

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
  const newArticle = {
    id: ulid(),
    ...body,
  };

  const articleData = getArticle();
  articleData.push(newArticle);

  publishNewArticle(articleData);
  res.redirect("/admin");
});

module.exports = router;
