# HabitApp

Aplicação para controle de moradores de um prédio, com foco na simplicidade, praticidade e relevância:

# HabitApp - Sistema de Gestão de Moradores de Apartamento

O **HabitApp** é uma aplicação de gestão de moradores de apartamentos, desenvolvida utilizando **Node.js** e **MongoDB**. O objetivo do HabitApp é armazenar, gerenciar e fornecer informações sobre os moradores, como dados pessoais, status de pagamento, histórico de ocupação e outras informações relevantes de cada unidade habitacional.

## Funcionalidades

- **Cadastro de moradores**: Adicione e gerencie os dados pessoais dos moradores, incluindo nome, idade, CPF e outras informações.
- **Gerenciamento de unidades**: Cadastro e controle das unidades (apartamentos) e seus respectivos moradores.
- **Histórico de ocupação**: Acompanhe o histórico de entradas e saídas de moradores, incluindo data de entrada e data de saída.
- **Status de pagamento**: Registre e consulte o status de pagamentos relacionados aos moradores.
- **Autenticação**: Sistema de login para administradores utilizando JWT (JSON Web Tokens).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenar informações dos moradores e unidades.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **JWT (JSON Web Tokens)**: Autenticação e autorização de administradores.
- **Bcrypt**: Criptografia de senhas de administradores.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (ou utilizar um serviço na nuvem como o MongoDB Atlas)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/habitapp.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd habitapp
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env
   MONGO_URI=mongodb://localhost:27017/habitapp
   JWT_SECRET=seu-segredo-aqui
   PORT=3000
   ```

   - `MONGO_URI`: URL de conexão com o MongoDB.
   - `JWT_SECRET`: Chave secreta para a geração de tokens JWT.
   - `PORT`: Porta na qual a aplicação irá rodar (opcional).

5. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará rodando na porta configurada (por padrão, `3000`).

## Endpoints da API

### 1. Cadastro de Administrador

**POST** `/api/admin/register`

- Corpo da requisição:

  ```json
  {
    "name": "Nome do Administrador",
    "email": "admin@exemplo.com",
    "password": "senha"
  }
  ```

- Resposta:

  ```json
  {
    "message": "Administrador cadastrado com sucesso"
  }
  ```

### 2. Login de Administrador

**POST** `/api/admin/login`

- Corpo da requisição:

  ```json
  {
    "email": "admin@exemplo.com",
    "password": "senha"
  }
  ```

- Resposta:

  ```json
  {
    "token": "jwt_token_aqui"
  }
  ```

### 3. Cadastro de Morador

**POST** `/api/residents`

- Corpo da requisição:

  ```json
  {
    "name": "Nome do Morador",
    "cpf": "123.456.789-00",
    "unit": "Apt. 101",
    "birthdate": "1990-01-01",
    "email": "morador@exemplo.com"
  }
  ```

- Resposta:

  ```json
  {
    "message": "Morador cadastrado com sucesso"
  }
  ```

### 4. Atualizar Informações do Morador

**PUT** `/api/residents/:id`

- Corpo da requisição:

  ```json
  {
    "name": "Novo Nome do Morador",
    "email": "novoemail@exemplo.com"
  }
  ```

- Resposta:

  ```json
  {
    "message": "Informações do morador atualizadas com sucesso"
  }
  ```

### 5. Obter Todos os Moradores

**GET** `/api/residents`

- Resposta:

  ```json
  [
    {
      "_id": "morador_id",
      "name": "Nome do Morador",
      "cpf": "123.456.789-00",
      "unit": "Apt. 101",
      "birthdate": "1990-01-01",
      "email": "morador@exemplo.com"
    }
  ]
  ```

### 6. Adicionar Histórico de Ocupação

**POST** `/api/occupancy`

- Corpo da requisição:

  ```json
  {
    "residentId": "morador_id",
    "unit": "Apt. 101",
    "moveInDate": "2025-02-01",
    "moveOutDate": "2025-06-30"
  }
  ```

- Resposta:

  ```json
  {
    "message": "Histórico de ocupação registrado com sucesso"
  }
  ```

### 7. Status de Pagamento

**POST** `/api/payments`

- Corpo da requisição:

  ```json
  {
    "residentId": "morador_id",
    "amount": 150.00,
    "paymentStatus": "PAGO",
    "paymentDate": "2025-02-01"
  }
  ```

- Resposta:

  ```json
  {
    "message": "Status de pagamento registrado com sucesso"
  }
  ```

## Estrutura de Diretórios

```
/habitapp
│
├── /controllers         # Lógica de controle (cadastro de moradores, pagamentos, etc.)
├── /models              # Modelos do Mongoose (Morador, Ocupação, Pagamento)
├── /routes              # Definição das rotas da API
├── /middleware          # Middlewares (como autenticação)
├── /config              # Arquivos de configuração (ex.: conexão com banco de dados)
└── server.js            # Arquivo principal que inicia o servidor
```

## Contribuindo

Sinta-se à vontade para contribuir! Abra uma **issue** ou envie um **pull request** com suas melhorias ou correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


### Explicação dos componentes:

- **Cadastro e Login de Administrador**: Para garantir que apenas usuários autorizados possam gerenciar informações do sistema.
- **Cadastro de Morador**: Permite o cadastro de moradores, associando-os às unidades (apartamentos).
- **Histórico de Ocupação**: Acompanhar quando o morador entrou e saiu da unidade.
- **Status de Pagamento**: Registra e consulta os pagamentos dos moradores.
- **Autenticação com JWT**: Para proteger as rotas da API, garantindo que apenas administradores autenticados possam acessá-las.

Esse modelo de README fornece um guia completo sobre o funcionamento e uso do projeto HabitApp, facilitando a instalação, configuração e contribuição.
