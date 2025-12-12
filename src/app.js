const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Establecer la ubicación de la carpeta de vistas (por defecto es './views')
app.set('views', path.join(__dirname, 'views'));

// Importar y usar los archivos de rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', mainRoutes);
app.use('/users', userRoutes); // Prefijo para rutas de usuario

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
