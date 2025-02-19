import React, { useState } from 'react';
import axios from 'axios';

const EnviarComunicado = () => {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [data, setData] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [erro, setErro] = useState('');

  const handleEnviarComunicado = async (e) => {
    e.preventDefault();

    // Validando campos
    if (!titulo || !mensagem || !data) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/comunicado', {
        titulo,
        mensagem,
        data
      });
      setSucesso('Comunicado enviado com sucesso!');
      setErro('');
      setTitulo('');
      setMensagem('');
      setData('');
    } catch (error) {
      setErro('Erro ao enviar comunicado.');
      setSucesso('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Enviar Comunicado</h1>
      <form onSubmit={handleEnviarComunicado}>
        <div style={formFieldStyle}>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formFieldStyle}>
          <textarea
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            style={textareaStyle}
          />
        </div>
        <div style={formFieldStyle}>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Enviar Comunicado
        </button>
      </form>

      {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

const formFieldStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '300px',
  height: '100px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
};

export default EnviarComunicado;
