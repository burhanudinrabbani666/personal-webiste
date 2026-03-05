const fs = require("fs");
const path = require("path");
const { ulid } = require("ulid");

const pathFile = path.join(__dirname, "../data", "article.json");

function createArticle(articleData) {
  const article = {
    id: ulid(),
    ...articleData,
  };

  return article;
}

function getArticle() {
  if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, JSON.stringify([]));
  }

  const article = fs.readFileSync(pathFile, "utf-8");

  return JSON.parse(article);
}

function publishNewArticle(newArticleData) {
  fs.writeFileSync(pathFile, JSON.stringify(newArticleData));
}

function deleteArticle(newArticleArray) {
  fs.writeFileSync(pathFile, JSON.stringify(newArticleArray));
}

module.exports = {
  createArticle,
  getArticle,
  publishNewArticle,
  deleteArticle,
};
