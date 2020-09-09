/*
    Ruta: api/sps
*/

const { Router } = require('express'); // importamos lo necesario para las rutas
const { getChistes } = require('../controllers/chistes');

const router = Router();

router.get('/helloworld/v1', getChistes);

module.exports = router;