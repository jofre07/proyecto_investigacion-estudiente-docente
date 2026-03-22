/*
Rutas: Roles
*/

const express = require('express');
const router = express.Router();

const {
    getProjects,
    crearProject,
    actualizarProject,
    borrarProject,
    getUProjectId
} = require('../controllers/project.controller');

const { autenticar } = require('../middlewares/auth.middleware');
const { autorizar } = require('../middlewares/role.middleware');

router.get('/', autenticar, autorizar('admin'), getProjects);
router.get('/:id', autenticar, autorizar('admin'), getUProjectId);
router.post('/', autenticar, autorizar('admin'), crearProject);
router.put('/:id', autenticar, autorizar('admin'), actualizarProject);
router.delete('/:id', autenticar, autorizar('admin'), borrarProject);

module.exports = router;