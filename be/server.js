const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verificarToken = require('./middlewares/verificarToken');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const User = require('./models/User');
const Condominio = require('./models/condominio');
const Apartamento = require('./models/apartamento');

const Comunicado = require('./models/comunicado');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch(err => {
  console.error('Erro de conexão ao MongoDB:', err);
});

// Middleware para interpretar JSON
app.use(express.json());

// Permitir requisições de qualquer origem
app.use(cors());

// Rota de cadastro com validação (nome, email, e senha)
app.post('/cadastro', [
  body('email').isEmail().withMessage('Por favor, forneça um e-mail válido'),
  body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('nome').notEmpty().withMessage('Nome é obrigatório')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nome, email, senha } = req.body;

  try {
    // Verificar se o e-mail já está cadastrado
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'E-mail já cadastrado.' }); // Mensagem específica
    }

    // Gerar o hash da senha
    const senhaHash = await bcrypt.hash(senha, 10);
    console.log('Hash gerado no cadastro:', senhaHash);  // Log do hash gerado

    // Criar o novo usuário com o nome, email e senha criptografada
    const novoUsuario = new User({ nome, email, senha: senhaHash });

    // Logar o que vai ser salvo no banco
    console.log('Objeto do novo usuário:', novoUsuario);

    // Salvar o usuário no banco de dados
    await novoUsuario.save();

    // Verifique se o hash está sendo armazenado corretamente
    const usuarioSalvo = await User.findOne({ email });
    console.log('Hash armazenado no banco:', usuarioSalvo.senha);  // Log do hash armazenado

    // Retornar mensagem de sucesso
    res.status(201).json({ message: 'Cadastro realizado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar. Tente novamente.', error: error.message });
  }
});


// Rota para excluir um usuário
app.delete('/usuario', verificarToken, async (req, res) => {
  const { email } = req.body;  // Ou pode usar _id, dependendo da sua escolha de identificação

  try {
    // Procurar o usuário pelo e-mail
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ message: 'Usuário não encontrado.' });
    }

    // Apagar o usuário do banco de dados
    await User.deleteOne({ email });  // Ou use {_id: usuario._id}, caso queira usar o _id
    
    res.status(200).json({ message: 'Usuário excluído com sucesso. 🎉' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir usuário', error: error.message });
  }
});


// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Procurar o usuário pelo e-mail
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    console.log('Senha fornecida:', senha);  // Log da senha fornecida
    console.log('Senha armazenada no banco:', usuario.senha);  // Log da senha armazenada no banco

    // Verificar se a senha fornecida é correta
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    console.log('Resultado da comparação:', senhaCorreta); // Log do resultado da comparação

    if (!senhaCorreta) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    // Gerar o JWT
    const token = jwt.sign({ id: usuario._id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retornar o token
    res.json({ token });
  } catch (error) {
    console.error('Erro no servidor:', error); // Log completo do erro
    res.status(500).json({ message: 'Erro no servidor', error: error.message });
  }
});

// Rota para receber o cadastro de apartamento
app.post('/apartamento', verificarToken, async (req, res) => {
  try {

    console.log('Dados recebidos no backend:', req.body);
    // Desestruturando os dados recebidos na requisição
    const { apartamento, telefone_contato, moradores, email, tipoPessoa, vistoria } = req.body;

    // Verificando se todos os campos obrigatórios foram enviados
    if (!apartamento || !telefone_contato || !email || !moradores || !tipoPessoa) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Criando o novo apartamento com os dados fornecidos
    const novoApartamento = new Apartamento({
      apartamento,
      telefone_contato,
      moradores,
      email,
      tipoPessoa, // Certifique-se de que o campo seja 'tipoPessoa'
      vistoria
    });

    // Salvando o novo apartamento no banco de dados
    await novoApartamento.save();

    // Retornando sucesso
    res.status(201).json({ message: 'Apartamento cadastrado com sucesso!', data: novoApartamento });
  } catch (error) {
    console.error('Erro ao cadastrar apartamento:', error);
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar um apartamento específico por número
app.get('/apartamento/:numeroApartamento', async (req, res) => {
  const { numeroApartamento } = req.params;
  
  try {
    const apartamento = await Apartamento.findOne({ apartamento: numeroApartamento });
    if (!apartamento) {
      return res.status(404).json({ message: 'Apartamento não encontrado' });
    }
    res.status(200).json(apartamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar apartamento', error: error.message });
  }
});

// Rota para buscar todos os apartamentos
app.get('/apartamentos', async (req, res) => {
  try {
    // Certifique-se de que o modelo correto está sendo utilizado
    const apartamentos = await Apartamento.find();
    res.status(200).json(apartamentos);
  } catch (err) {
    console.error('Erro ao buscar apartamentos:', err);
    res.status(400).json({ message: 'Erro ao buscar apartamentos', error: err.message });
  }
});

// Rota para buscar apartamentos pelo nome do morador
app.get('/apartamento/buscar/:nome', async (req, res) => {
  const { nome } = req.params;

  try {
    console.log('Buscando por nome:', nome); // Para depuração

    // Usando $regex para buscar no array de moradores
    const apartamentos = await Apartamento.find({
      moradores: { $elemMatch: { $regex: new RegExp(nome, 'i') } }
    });

    // Se não encontrar apartamentos, retorna uma mensagem de erro
    if (apartamentos.length === 0) {
      return res.status(404).json({ message: 'Apartamento não encontrado' });
    }

    // Filtra os apartamentos para garantir que o mesmo apartamento não apareça mais de uma vez
    const apartamentosUnicos = apartamentos.map(apartamento => ({
      numero_apartamento: apartamento.apartamento
    }));

    // Retorna todos os apartamentos encontrados
    res.status(200).json(apartamentosUnicos);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao buscar apartamento', error: err });
  }
});

// Rota para criar um novo condomínio
app.post('/condominio', verificarToken, async (req, res) => {
  try {
    const novoCondominio = new Condominio(req.body);
    await novoCondominio.save();
    res.status(201).json(novoCondominio);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar condomínio', error: err });
  }
});

// Rota para buscar todos os condomínios
app.get('/condominio', verificarToken, async (req, res) => {
  try {
    const condominios = await Condominio.find();
    res.status(200).json(condominios);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao buscar condomínios', error: err });
  }
});

// Rota para enviar um comunicado
app.post('/comunicado', async (req, res) => {
  const { titulo, mensagem, tipoManutencao, datadoenvio, datadoevento } = req.body;

  // Log para verificar os dados que chegaram no servidor
  console.log('Dados recebidos:', req.body);

  // Validando os dados recebidos
  if (!titulo || !mensagem || !tipoManutencao || !datadoenvio || !datadoevento) {
    console.log('Erro na validação dos campos');
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  try {
    // Salvar o comunicado no banco de dados
    const novoComunicado = new Comunicado({
      titulo,
      mensagem,
      tipoManutencao,
      datadoenvio,
      datadoevento
    });

    await novoComunicado.save();
    console.log('Comunicado salvo com sucesso!');

    res.status(201).json({ message: 'Comunicado enviado com sucesso!' });
  } catch (err) {
    console.error('Erro ao salvar comunicado:', err);
    res.status(500).json({ message: 'Erro ao enviar comunicado.' });
  }
});


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
