import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Certifique-se de importar o useNavigate
import './Login.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { email, senha });
      const { token } = response.data;

      // Armazenar o token no localStorage ou em cookies
      localStorage.setItem('token', token);

      // Atualiza o estado com o token
      setToken(token);

    } catch (err) {
      setError('Falha ao autenticar. Verifique suas credenciais.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        {error && <p>{error}</p>}
      </form>

      {/* Botão de navegação para o cadastro */}
      <p>
        Não tem uma conta?{' '}
        <button onClick={() => navigate('/cadastro')}>Cadastre-se</button>
      </p>
    </div>
  );
};

export default Login;
