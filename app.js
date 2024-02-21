const express = require('express');
const bodyParser = require('body-parser');
const articlesRouter = require('./routes/articles');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/api/articles', articlesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
