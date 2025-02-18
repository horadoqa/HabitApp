import React, { useState } from 'react';
import './Apartamento.css';

const Apartamento = () => {
  const [apartamento, setApartamento] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const [moradores, setMoradores] = useState(['', '']);
  const [vistoriaGás, setVistoriaGás] = useState('');
  const [vistoriaÁgua, setVistoriaÁgua] = useState('');

  // Função para atualizar o estado dos moradores
  const handleMoradorChange = (index, value) => {
    const newMoradores = [...moradores];
    newMoradores[index] = value;
    setMoradores(newMoradores);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar o objeto do apartamento
    const apartamentoData = {
      apartamento,
      telefone_contato: telefoneContato,
      moradores,
      vistoria: {
        gás: vistoriaGás,
        água: vistoriaÁgua,
      },
    };

    console.log('Dados do apartamento:', apartamentoData);

    // Aqui você pode adicionar a lógica de envio para o backend
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Cadastrar Apartamento</h1>

      <div className="container">
        <form id="apartamentoForm" onSubmit={handleSubmit}>
          <label htmlFor="apartamento">Número do Apartamento:</label>
          <input
            type="number"
            id="apartamento"
            value={apartamento}
            onChange={(e) => setApartamento(e.target.value)}
            required
          />

          <label htmlFor="telefone_contato">Telefone de Contato:</label>
          <input
            type="tel"
            id="telefone_contato"
            value={telefoneContato}
            onChange={(e) => setTelefoneContato(e.target.value)}
            placeholder="+55 11 91234-0001"
            required
          />

          <label>Moradores:</label>
          <div className="moradores">
            <input
              type="text"
              value={moradores[0]}
              onChange={(e) => handleMoradorChange(0, e.target.value)}
              placeholder="Nome do morador 1"
              required
            />
            <input
              type="text"
              value={moradores[1]}
              onChange={(e) => handleMoradorChange(1, e.target.value)}
              placeholder="Nome do morador 2"
              required
            />
          </div>

          <label htmlFor="vistoria_gas">Vistoria de Gás:</label>
          <input
            type="date"
            id="vistoria_gas"
            value={vistoriaGás}
            onChange={(e) => setVistoriaGás(e.target.value)}
            required
          />

          <label htmlFor="vistoria_agua">Vistoria de Água:</label>
          <input
            type="date"
            id="vistoria_agua"
            value={vistoriaÁgua}
            onChange={(e) => setVistoriaÁgua(e.target.value)}
            required
          />

          <button type="submit">Cadastrar Apartamento</button>
        </form>
      </div>
    </div>
  );
};

export default Apartamento;
