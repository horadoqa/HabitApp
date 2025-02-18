const bcrypt = require('bcryptjs');  // Usando require para importar o bcrypt

const senhaFornecida = "1q2w3e4r";  // Senha fornecida pelo usuário
const senhaArmazenada = "$2b$10$AaE8RXJ3y/zG9TeRncnKf.GDdzJBoNr87WETS4Mh2nF8v3N70/BFC";  // Hash armazenado no banco

const compararSenhas = async () => {
  // Comparando a senha fornecida com o hash armazenado no banco
  const resultado = await bcrypt.compare(senhaFornecida, senhaArmazenada);
  console.log("Resultado da comparação:", resultado);  // Deve ser 'true' se a senha for correta
};

compararSenhas();
