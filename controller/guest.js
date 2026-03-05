const { getArticle } = require("../models/article");

exports.homePage = (req, res, next) => {
  const articles = getArticle();

  res.render("./guest/home", {
    pageTitle: "Personal Blog",
    articles,
  });
};
