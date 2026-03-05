const express = require("express");
const router = express.Router();
const {
  getArticle,
  publishNewArticle,
  createArticle,
  deleteArticle,
} = require("../models/article.js");
const {
  adminPage,
  addNewArticlePage,
  handleCreateArticle,
  handleDeleteArticle,
} = require("../controller/admin.js");

router.get("/", adminPage);
router.get("/new", addNewArticlePage);

router.get("/edit/:articleId", (req, res, next) => {
  const id = req.params.articleId;
  const articleData = getArticle();
  const article = articleData.find((article) => article.id === id);

  res.render("./admin/edit", { article });
});

// Post

router.post("/new", handleCreateArticle);
router.post("/delete-article", handleDeleteArticle);
router.post("/edit/:articleId", (req, res, nect) => {
  const body = req.body;
  console.log(body);
});

module.exports = router;
