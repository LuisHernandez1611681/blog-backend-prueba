const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Obtener todos los artículos
router.get('/', articlesController.getAllArticles);

module.exports = router;
