const express = require("express");
const router = express.Router();
const {
  getArticle,
  publishNewArticle,
  createArticle,
  deleteArticle,
} = require("../models/article.js");
const { render } = require("ejs");

router.get("/", (req, res, next) => {
  const articles = getArticle();
  res.render("./admin/admin", {
    articles,
  });
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
  const newArticle = createArticle(body);

  const articleData = getArticle();

  articleData.push(newArticle);

  publishNewArticle(articleData);
  res.redirect("/admin");
});

router.post("/delete-article", (req, res, next) => {
  const { articleId } = req.body;
  const articleData = getArticle();

  const newArticleArray = articleData.filter(
    (article) => article.id !== articleId,
  );

  deleteArticle(newArticleArray);
  res.redirect("/admin");
});

module.exports = router;
