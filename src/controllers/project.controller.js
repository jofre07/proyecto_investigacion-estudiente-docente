/*
Controladora: Projects
*/

const { Project } = require('../models');
const { respuestaExitosa, respuestaErronea } = require('../utils/response');

const getProjects = async (req, res) => {
    try {
        const roles = await Project.findAll();
        return respuestaExitosa(res, 200, 'Projects cargados correctamente.', roles);

    } catch (error) {
        return respuestaErronea(res, 500, 'Error al obtener los roles.', error.message);
    }
};

const crearProject = async (req, res) => {
    try {
        const { titulo, descripcion ,linea_investigacion  , usuarioId } = req.body;

        if (!titulo) {
            return respuestaErronea(res, 400, 'El titulo del proyecto es obligatorio.');
        }

        const existe = await Project.findOne({where: {titulo} });

        if (existe) {
            return respuestaErronea(res, 409, 'El Proyecto ya existe.');
        }

        const item = await Project.create({titulo, descripcion,linea_investigacion , usuarioId});
        return respuestaExitosa(res, 200, 'Project creado exitosamente.', item);
    } catch (error) {
        return respuestaErronea(res, 500, 'Error al crear el Proyecto.', error.message);
    }
};

const actualizarProject = async (req, res)=> {
    try {
        const { id } = req.params;
        const { titulo, descripcion ,linea_investigacion  , usuarioId } = req.body;


        const item = await Project.findByPk(id);

        if (!item) {
            return respuestaErronea(res, 404, 'El Proyecto no existe.');
        }

        await item.update({titulo, descripcion,linea_investigacion,usuarioId});
        return respuestaExitosa(res, 200, 'Project actualizado exitosamente.', item);

    } catch (error) {
        return respuestaErronea(res, 500, 'Error al actualizar el Proyecto.', error.message);
    }
};


const borrarProject = async (req, res)=> {
    try {
        const { id } = req.params;
        const item = await Project.findByPk(id); // Se busca por id (pk)

        if (!item) {
            return respuestaErronea(res, 404, 'El Proyecto no existe.');
        }

        await item.destroy();
        return respuestaExitosa(res, 200, 'Project eliminado exitosamente.', item);
    } catch (error) {
        return respuestaErronea(res, 500, 'Error al borrar el Proyecto.', error.message);
    }
};

module.exports = {
    getProjects,
    crearProject,
    actualizarProject,
    borrarProject
};