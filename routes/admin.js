const express = require("express");
const router = express.Router();
const {
  adminPage,
  addNewArticlePage,
  handleCreateArticle,
  handleDeleteArticle,
  editArticelPage,
  handleUpdateArticle,
} = require("../controller/admin.js");

router.get("/", adminPage);
router.get("/new", addNewArticlePage);
router.get("/edit/:articleId", editArticelPage);

// Post

router.post("/new", handleCreateArticle);
router.post("/delete-article", handleDeleteArticle);
router.post("/edit/:articleId", handleUpdateArticle);

module.exports = router;
