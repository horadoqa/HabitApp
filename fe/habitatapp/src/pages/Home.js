// src/pages/Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleNavigate = (path) => {
    history.push(path); // Redireciona para a página de acordo com o botão clicado
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo à página inicial</h1>
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={() => handleNavigate('/cadastrar-apartamento')}
          style={buttonStyle}
        >
          Cadastrar Apartamento
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/buscar-apartamento')}
          style={buttonStyle}
        >
          Buscar por Apartamento
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/alterar-apartamento')}
          style={buttonStyle}
        >
          Alterar Dados de Apartamento
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  margin: '5px',
  transition: 'background-color 0.3s',
};

export default Home;
