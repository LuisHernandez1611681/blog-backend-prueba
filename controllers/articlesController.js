const pool = require('../database');

// Obtener todos los artículos
exports.getAllArticles = (req, res) => {
    pool.query('SELECT * FROM article', (error, result) => {
        if (error) {
            console.error('Error getAllArticles: ', error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.json(result.rows);
        }
    });
};
