const Sala = require('../models/Sala');
const salaController = {};

salaController.getSalas = async (req, res) => {
    const salas = await Sala.find();
    res.json({ success: true, salas });
}

module.exports = salaController;