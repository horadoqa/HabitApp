const mongoose = require('mongoose');

const apartamentoSchema = new mongoose.Schema({
  apartamento: { 
    type: Number, 
    required: true, 
    unique: true, // Garantir que 'apartamento' seja único
    index: true // Isso ajuda a melhorar a busca
  },
  telefone_contato: { 
    type: String, 
    required: true 
  },
  moradores: [{ 
    type: String, 
    required: true 
  }],
  vistoria: {
    gás: {
      type: Date, 
      required: true
    },
    água: {
      type: Date, 
      required: true
    }
  }
}, { timestamps: true });  // timestamps para adicionar createdAt e updatedAt automaticamente

module.exports = mongoose.model('Apartamento', apartamentoSchema);
