const mongoose = require('mongoose');

// Schema do condomínio
const condominioSchema = new mongoose.Schema({
  endereco: {
    type: String,
    required: true
  },
  sindico: {
    nome: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    }
  },
  funcionarios: [
    {
      nome: {
        type: String,
        required: true
      },
      telefone: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true });  // Para adicionar os campos 'createdAt' e 'updatedAt' automaticamente

module.exports = mongoose.model('Condominio', condominioSchema);
