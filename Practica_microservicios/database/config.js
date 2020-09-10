const mongoose = require('mongoose'); //importamos el paquete de mongoose

// como nuestra conexion regresa una promeso usamos el async para poder usar await y convertir nuestra funncion asyncrona en syncrona
const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://mongo/microservicio', { //esta es la ruta donde esta nuestro servidor y la base de datos
            useNewUrlParser: true, //parametros necesarios para la conexion
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectar con la Base de Datos');
    }
}

// exportamos nuestra funcion
module.exports = {
    dbConnection
}