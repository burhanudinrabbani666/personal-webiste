const { getArticle } = require("../models/article");

exports.homePage = (req, res, next) => {
  const articles = getArticle();

  res.render("./guest/home", {
    pageTitle: "Personal Blog",
    articles,
  });
};

exports.article = (req, res, next) => {
  const id = req.params.articleId;
  const articleData = getArticle();
  const article = articleData.find((article) => article.id === id);

  const contentArray = article.content.split("\n");
  res.render("./guest/article", { article, contentArray });
};
