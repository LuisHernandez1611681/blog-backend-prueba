const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Obtener todos los artículos
router.get('/', articlesController.getAllArticles);

// Insertar un nuevo artículo
router.post('/', articlesController.createArticle);

module.exports = router;