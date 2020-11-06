const mongoose = require('mongoose');
const { Schema } = mongoose;

// En este esquema se establece el modelo del Pelicula
const SalaSchema = new Schema({
  _id: { type: String, required: true },
  nombre: { type: String, required: true }
});

module.exports = mongoose.model('Sala', SalaSchema);