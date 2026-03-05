const {
  getArticle,
  createArticle,
  publishNewArticle,
  deleteArticle,
} = require("../models/article.js");

exports.adminPage = (req, res, next) => {
  const articles = getArticle();
  res.render("./admin/admin", {
    articles,
  });
};

exports.addNewArticlePage = (req, res, next) => {
  const date = new Date().toISOString().split("T")[0];
  res.render("./admin/new", {
    publishDate: date,
  });
};

exports.handleCreateArticle = (req, res, next) => {
  const body = req.body;
  const newArticle = createArticle(body);

  const articleData = getArticle();

  articleData.push(newArticle);

  publishNewArticle(articleData);
  res.redirect("/admin");
};

exports.handleDeleteArticle = (req, res, next) => {
  const { articleId } = req.body;
  const articleData = getArticle();

  const newArticleArray = articleData.filter(
    (article) => article.id !== articleId,
  );

  deleteArticle(newArticleArray);
  res.redirect("/admin");
};
