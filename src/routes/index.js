/*
Despliegue de Rutas
*/

const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/roles', require('./rol.routes'));
router.use('/usuarios', require('./user.routes'));
router.use('/proyectos', require('./project.routes'));


module.exports = router;