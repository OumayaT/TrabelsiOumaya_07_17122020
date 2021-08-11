const express = require('express');
const articlesCtrl = require('../controllers/articles');
const auth = require('../middleware/auth');
const multer = require("../middleware/multer-config");

// Utilisation d'un router
const router = express.Router();

// Création des routes articles
router.get('/', auth, articlesCtrl.getLatestArticles);
router.get('/:id', auth, articlesCtrl.getArticleById);
router.get('/date/:date', auth, articlesCtrl.getArticlesByDate);
router.get('/author/:author', auth, articlesCtrl.getArticlesByAuthor);
router.get('/:date/:author', auth, articlesCtrl.searchArticles);
router.post('/', auth, multer, articlesCtrl.createArticle);
router.put('/', auth, multer, articlesCtrl.updateArticle);
router.delete('/', auth, multer,articlesCtrl.deleteArticle);




module.exports = router;