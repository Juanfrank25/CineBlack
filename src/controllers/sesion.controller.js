const Sesion = require('../models/Sesion');
const sesionController = {};

sesionController.getSesiones = async (req, res) => {
    const sesion = await Sesion.find({ pelicula: req.params.id }).populate({ path: 'pelicula' })
    const sesiones = await Sesion.populate(sesion, { path: 'sala' });
    res.json({ success: true, sesiones });
}

module.exports = sesionController;