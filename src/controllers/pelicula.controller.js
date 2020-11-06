const Pelicula = require('../models/Pelicula');
const peliculaController = {};

peliculaController.getPelicula = async (req, res) => {
    const id = req.params.id;
    const pelicula = await Pelicula.findById(id);
    if (!pelicula) res.json({ success: false, msg: 'Pelicula no encontrada' });
    else res.json({ success: true, pelicula });
}

peliculaController.getPeliculas = async (req, res) => {
    const peliculas = await Pelicula.find();
    res.json({ success: true, peliculas });
}

module.exports = peliculaController;