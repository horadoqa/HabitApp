import React, { useState } from 'react';
import axios from 'axios';

const BuscarApartamento = () => {
  const [numeroApartamento, setNumeroApartamento] = useState('');
  const [apartamento, setApartamento] = useState(null);
  const [erro, setErro] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/apartamento/${numeroApartamento}`);
      setApartamento(response.data);
      setErro('');
    } catch (error) {
      setErro('Apartamento não encontrado.');
      setApartamento(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Buscar Nome</h1>
      <input
        type="text"
        placeholder="Digite o nome"
        value={numeroApartamento}
        onChange={(e) => setNumeroApartamento(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      <button onClick={handleBuscar} style={buttonStyle}>
        Buscar
      </button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {apartamento && (
        <div style={{ marginTop: '20px' }}>
          <h3>Detalhes do Apartamento:</h3>
          <p><strong>Telefone:</strong> {apartamento.telefone_contato}</p>
          <p><strong>Moradores:</strong> {apartamento.moradores}</p>
          <p><strong>Tipo de Pessoa:</strong> {apartamento.tipo_pessoa}</p>
          <p><strong>Vistoria:</strong> {apartamento.vistoria ? 'Realizada' : 'Não Realizada'}</p>
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

export default BuscarApartamento;
