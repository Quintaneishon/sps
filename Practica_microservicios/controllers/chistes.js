const Chiste = require('../models/chiste');


const getChistes = async(req, res) => {

    const { clave, tipo, longitud } = req.body;

    const options = {};

    if (clave) {
        options['chiste'] = { $regex: `.*${clave}.*` };
    }
    if (longitud == 'corto' || longitud == 'largo') {
        options['longitud'] = longitud;
    }
    if (tipo === 'blanco' || tipo === 'negro') {
        options['tipo'] = tipo;
    }

    let chistes = await Chiste.find(options);

    if (chistes.length == 0) {
        chistes = await Chiste.find();

        res.json({
            encontrado: false,
            chistes
        });
    } else {
        res.json({
            encontrado: false,
            chistes
        });
    }

}

module.exports = {
    getChistes
}