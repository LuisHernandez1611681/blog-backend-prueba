const pool = require('../database');

// Obtener todos los artículos
exports.getAllArticles = async (req, res) => {
  try {
    const query = 'SELECT * FROM article';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error getAllArticles: ', error);
    res.status(500).json({ error: 'Internal Server error' });
  }
};


// Insertar un nuevo artículo
exports.createArticle = async (req, res) => {
  try {
    const { title, author, created_at, content } = req.body;
    const query = 'INSERT INTO article (title, author, created_at, content) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [title, author, created_at, content];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error createArticle: ', error);
    res.status(500).json({ error: 'Internal Server error' });
  }
};
