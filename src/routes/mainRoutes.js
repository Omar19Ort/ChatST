const express = require("express");
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
    // Renderiza el archivo 'index.ejs' que está en /views/index.ejs
    res.render('index', { title: 'Página de Inicio' });
});
