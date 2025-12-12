const express = require('express');
const router = express.Router();

// Esta ruta se mapea a '/users/profile' debido al prefijo en app.js
router.get('/profile', (req, res) => {
    // Renderiza 'profile.ejs' dentro de la subcarpeta 'views/users'
    res.render('users/profile', { username: 'UsuarioEjemplo' });
});

// Esta ruta se mapea a '/users/settings'
router.get('/settings', (req, res) => {
    res.render('users/settings', { title: 'Configuración' });
});

module.exports = router;
