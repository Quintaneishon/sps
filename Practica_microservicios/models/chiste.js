const { Schema, model } = require('mongoose'); // importamos variables que necesitaremos

const ChisteSchema = Schema({
    chiste: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    longitud: {
        type: String,
        required: true,
    },
    gracia: {
        type: Number,
        required: true
    }
});

module.exports = model('Chiste', ChisteSchema);