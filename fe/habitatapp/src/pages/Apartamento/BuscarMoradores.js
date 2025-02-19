import React, { useState } from 'react';
import axios from 'axios';

const BuscarMoradores = () => {
  const [nome, setNome] = useState('');
  const [apartamentos, setApartamentos] = useState([]);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const handleBuscar = async () => {
    if (!nome.trim()) {
      setErro('Por favor, insira um nome.');
      setApartamentos([]);
      return;
    }

    setErro('');
    setLoading(true); // Inicia o carregamento

    try {
      const response = await axios.get(`http://localhost:3000/apartamento/buscar/${nome}`);
      setApartamentos(response.data);
      setLoading(false);
    } catch (error) {
      setErro('Apartamento não encontrado.');
      setApartamentos([]);
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Buscar Apartamento pelo Nome</h1>
      <input
        type="text"
        placeholder="Digite o nome do morador"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      <button onClick={handleBuscar} style={buttonStyle}>
        Buscar
      </button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {loading && <p>Carregando...</p>} {/* Mensagem de carregamento */}

      {apartamentos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultados da Busca:</h3>
          <ul>
            {apartamentos.map((apartamento, index) => (
              <li key={index}>
                <strong>Número do Apartamento:</strong> {apartamento.numero_apartamento}
              </li>
            ))}
          </ul>
        </div>
      )}
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
  marginTop: '20px',
};

export default BuscarMoradores;
