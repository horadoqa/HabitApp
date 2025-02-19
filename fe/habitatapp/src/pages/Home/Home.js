import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate para navegação

const Home = () => {
  const navigate = useNavigate(); // Crie a constante navigate

  const handleNavigate = (path) => {
    navigate(path); // Navega para o caminho especificado
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bem-vindo à página inicial</h1>
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={() => handleNavigate('/apartamento/')}
          style={buttonStyle}
        >
          Cadastrar Apartamento
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/apartamento/buscar')}
          style={buttonStyle}
        >
          Buscar por Apartamento
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/apartamento/buscar-moradores')}
          style={buttonStyle}
        >
          Buscar por Nome
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/apartamento/alterar')}
          style={buttonStyle}
        >
          Alterar Dados de Apartamento
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleNavigate('/apartamento/comunicado')}
          style={buttonStyle}
        >
          Enviar Comunicado
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
