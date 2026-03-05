const fs = require("fs");
const path = require("path");

const pathFile = path.join(__dirname, "../data", "article.json");

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

module.exports = { getArticle, publishNewArticle };
