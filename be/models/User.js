const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Para criptografar a senha

// Definindo o esquema do usuário
const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Para garantir que o e-mail seja único
    lowercase: true, // Para garantir que o e-mail seja sempre minúsculo
    match: [/.+\@.+\..+/, 'Por favor, forneça um e-mail válido'] // Validação simples de formato de e-mail
  },
  senha: {
    type: String,
    required: true,
    minlength: 6 // Definindo o comprimento mínimo da senha
  }
}, { timestamps: true });

// Criando o modelo de Usuário
module.exports = mongoose.model('User', userSchema);
