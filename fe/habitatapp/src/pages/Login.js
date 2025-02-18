import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Certifique-se de importar o useNavigate
import './Login.css';
import buildingImage from '../assets/build.webp'; // Importando a imagem

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
    <div className="grid-container">
      <div className="left-side">
        {/* Aqui pode adicionar qualquer conteúdo extra para a coluna da esquerda */}
        <div className="login-left">
          <h1>Bem-vindo ao HabitApp!</h1>
          <img src={buildingImage} alt="Prédio" />
          <h2>Faça login para continuar</h2>
        </div>
      </div>


      <div className="right-side">
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
            <button onClick={() => navigate('/usuario')}>Cadastre-se</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
