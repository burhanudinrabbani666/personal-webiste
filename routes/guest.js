const express = require("express");
const { getArticle } = require("../models/article");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.redirect("/home");
});

router.get("/home", (req, res, next) => {
  res.render("./guest/home");
});

router.get("/article/:articleId", (req, res, next) => {
  const id = req.params.articleId;
  const articleData = getArticle();
  const article = articleData.find((article) => article.id === id);

  const contentArray = article.content.split("\n");
  res.render("./guest/article", { article, contentArray });
});

module.exports = router;
