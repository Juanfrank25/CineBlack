const mongoose = require('mongoose');
const { Schema } = mongoose;

// En este esquema se establece el modelo del Reserva
const ReservaSchema = new Schema({
  sesion: { type: String, required: true },
  pelicula: { type: String, required: true },
  asientos: { type: Array, required: true },
  costo: { type: String, required: true }
});

module.exports = mongoose.model('Reserva', ReservaSchema);