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
    required: true // Se você deseja garantir que sempre haja um morador
  }],
  email: { 
    type: [String],
    required: true, // Torna o campo email obrigatório
    match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um e-mail válido']
  },
  tipoPessoa: { 
    type: String,
    enum: ['locador', 'locatário'], // Define os valores possíveis para 'tipoPessoa'
    required: true // Torna este campo obrigatório
  },
  vistoria: {
    gás: {
      type: Date, 
      required: true // Torna a data de vistoria de gás obrigatória
    },
    água: {
      type: Date, 
      required: true // Torna a data de vistoria de água obrigatória
    }
  }
}, { timestamps: true });  // timestamps para adicionar createdAt e updatedAt automaticamente

module.exports = mongoose.model('Apartamento', apartamentoSchema);
