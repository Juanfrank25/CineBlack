const mongoose = require('mongoose');
const { Schema } = mongoose;

// En este esquema se establece el modelo del Pelicula
const PeliculaSchema = new Schema({
  nombre: { type: String, required: true },
  duracion: { type: String, required: true },
  clasificacion: { type: String, required: true },
  genero: { type: String, required: true },
  sinopsis: { type: String, required: true },
  foto1: { type: String, required: true },
  foto2: { type: String, required: true }
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);