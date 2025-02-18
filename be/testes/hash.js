const bcrypt = require('bcryptjs');  // Usando require para importar o bcrypt

const senhaFornecida = "1q2w3e4r";  // Senha fornecida pelo usuário

const gerarHash = async () => {
  // Gerar o hash para a senha fornecida
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(senhaFornecida, salt);
  
  console.log("Hash gerado:", hash);  // Mostrar o hash gerado
};

gerarHash();
