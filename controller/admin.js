const {
  getArticle,
  createArticle,
  publishNewArticle,
  deleteArticle,
  updateArticle,
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

exports.editArticelPage = (req, res, next) => {
  const id = req.params.articleId;
  const articleData = getArticle();
  const article = articleData.find((article) => article.id === id);

  res.render("./admin/edit", { article });
};

// Post
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

exports.handleUpdateArticle = (req, res, next) => {
  const id = req.params.articleId;
  const body = req.body;
  const newArticle = {
    id,
    ...body,
  };

  const articleData = getArticle();
  const newArticleData = articleData.map((article) =>
    article.id === newArticle.id ? newArticle : article,
  );

  updateArticle(newArticleData);

  res.redirect("/admin");
};
