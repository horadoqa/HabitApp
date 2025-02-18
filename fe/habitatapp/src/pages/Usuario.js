import React, { useState } from 'react';
import axios from 'axios';
import './Usuario.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/usuario', { nome, email, senha });

      // Verificando o código de status da resposta
      if (response.status === 201) {
        setSuccess(response.data.message);
        setError('');
      } else {
        setError('Erro ao cadastrar. Tente novamente.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Erro ao cadastrar:', err);  // Mostra detalhes do erro no console
      setError('Erro ao cadastrar. Tente novamente.');
      setSuccess('');
    }
  };

  return (
    <div className="container">
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      {success && <div style={{ color: 'green' }}>{success}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
    </div>
  );
};

export default Cadastro;
