const mongoose = require('mongoose');
const { Schema } = mongoose;

// En este esquema se establece el modelo del Reserva
const SesionSchema = new Schema({
  pelicula: { type: String, ref: 'Pelicula', required: true },
  sala: { type: String, ref: 'Sala', required: true },
  doblaje: { type: String, required: true },
  resolusion: { type: String, required: true },
  fecha: { type: Date, required: true },
  horario: { type: String, required: true }
});

module.exports = mongoose.model('Sesiones', SesionSchema);