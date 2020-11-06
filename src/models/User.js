const mongoose = require('mongoose');
const { Schema } = mongoose;

// En este esquema se establece el modelo del Usuario
const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  type: { type: String, required: true }
});

// Se exporta el esquema como un modelo para utilizarlo en el controllador
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
  const query = {
    username: username
  }
  User.findOne(query, callback);
}

module.exports.getUserByUser = (username, callback) => {
  const query = { username: { $regex: '^' + username } }
  User.find(query, callback);
}