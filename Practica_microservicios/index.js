const express = require('express'); // importamos express
const { dbConnection } = require('./database/config'); // importamos nuestra funcion, para esto usamos la desestructuracion ya que exportamos un objeto

// Crear servidor de express
const app = express();

// Lectura y conversion del body
app.use(express.json()); // middleware que se encarga de convertir el body

// Base de datos
dbConnection();

// Rutas
app.use('/api/sps', require('./routes/chistes')); // middleware para redirigir las rutas

app.listen(8090, () => {
    console.log('Servidor corriendo en puerto 8090');
});