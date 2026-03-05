const fs = require("fs");
const path = require("path");
const { ulid } = require("ulid");

const pathFile = path.join(__dirname, "../data", "article.json");

function createArticle(body) {
  const article = {
    id: ulid(),
    title: body.title.trim(),
    createdAt: body.createdAt,
    content: body.content.trim(),
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

function updateArticle(newArticleArray) {
  fs.writeFileSync(pathFile, JSON.stringify(newArticleArray));
}

module.exports = {
  createArticle,
  getArticle,
  publishNewArticle,
  deleteArticle,
  updateArticle,
};
