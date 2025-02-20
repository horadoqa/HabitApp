import React, { useState } from 'react';
import axios from 'axios';

const EnviarComunicado = () => {
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [datadoenvio, setDatadoenvio] = useState(new Date()); // Data de envio gerada automaticamente
  const [datadoevento, setDatadoevento] = useState('');
  const [tipoManutencao, setTipoManutencao] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [erro, setErro] = useState('');

  const handleEnviarComunicado = async (e) => {
    e.preventDefault(); // Para evitar que a página seja recarregada ao submeter o formulário
    console.log('Enviando comunicado...');  // Para verificar se a função é chamada

    // Validando campos
    if (!titulo || !mensagem || !datadoevento || !tipoManutencao) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/comunicado', {
        titulo,
        mensagem,
        tipoManutencao,
        datadoenvio, // Passando a data de envio automaticamente
        datadoevento
      });
      
      console.log(response.data);  // Verificando o que a API retorna
      setSucesso('Comunicado enviado com sucesso!');
      setErro('');
      setTitulo('');
      setMensagem('');
      setDatadoevento('');
      setTipoManutencao('');
    } catch (error) {
      console.error(error);  // Para ver qual erro está acontecendo
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
          <label htmlFor="tipoManutencao" style={labelStyle}>Tipo de Manutenção</label>
          <select
            id="tipoManutencao"
            value={tipoManutencao}
            onChange={(e) => setTipoManutencao(e.target.value)}
            style={inputStyle}
          >
            <option value="Eletrica">Elétrica</option>
            <option value="Hidraulica">Hidráulica</option>
            <option value="Estrutural">Estrutural</option>
          </select>
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
          <label htmlFor="datadoevento" style={labelStyle}>Data do Evento</label>
          <input
            id="datadoevento"
            type="date"
            value={datadoevento}
            onChange={(e) => setDatadoevento(e.target.value)}
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
  textAlign: 'left',  // Alinha o texto à esquerda
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',  // Espaço entre o label e o input
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',  // Garante que o input ocupe 100% da largura disponível
  maxWidth: '300px',  // Limita a largura máxima
  boxSizing: 'border-box',  // Garante que o padding não afete a largura total
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',  // Garante que o textarea ocupe 100% da largura disponível
  maxWidth: '300px',  // Limita a largura máxima
  height: '100px',
  boxSizing: 'border-box',  // Garante que o padding não afete a largura total
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
