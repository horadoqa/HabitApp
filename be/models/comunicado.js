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
  tipoManutencao: {
    type: String,
    enum: ['Eletrica', 'Hidraulica', 'Estrutural'], // Os valores permitidos
    required: true,
  },
  datadoenvio: {
    type: Date,
    required: true,
  },
  datadoevento: {
    type: Date,
    required: true,
  },
});

const Comunicado = mongoose.model('Comunicado', comunicadoSchema);

module.exports = Comunicado;
