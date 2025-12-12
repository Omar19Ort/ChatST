// Importar Express
const express = require('express');
// Inicializar la aplicación Express
const app = express();
// Definir el puerto para el servidor
const PORT = 3000;
const path = require('path');
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname,'view'));





// Ruta principal
app.get('/', (req, res) => {
    res.send('Texto');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});