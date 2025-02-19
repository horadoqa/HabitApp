const mongoose = require('mongoose');

const comunicadoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  mensagem: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
});

const Comunicado = mongoose.model('Comunicado', comunicadoSchema);

module.exports = Comunicado;
