import React, { useState } from 'react';
import axios from 'axios';

const Apartamento = () => {
  const [apartamento, setApartamento] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const [moradores, setMoradores] = useState(['', '']);
  const [vistoriaGás, setVistoriaGás] = useState('');
  const [vistoriaÁgua, setVistoriaÁgua] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('');

  // Função para atualizar o estado dos moradores
  const handleMoradorChange = (index, value) => {
    const newMoradores = [...moradores];
    newMoradores[index] = value;
    setMoradores(newMoradores);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Criar o objeto do apartamento
    const apartamentoData = {
      apartamento,
      telefone_contato: telefoneContato,
      moradores,
      tipo_pessoa: tipoPessoa,
      vistoria: {
        gás: vistoriaGás,
        água: vistoriaÁgua,
      },
    };

    console.log('Dados do apartamento:', apartamentoData);

    // Recuperar o token JWT armazenado (assumindo que você o guardou no localStorage após login)
    const token = localStorage.getItem('token'); // ou sessionStorage.getItem('token') se usou sessionStorage

    try {
      // Enviar os dados para o servidor usando axios com o token no cabeçalho
      const response = await axios.post('http://localhost:3000/apartamento', apartamentoData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Adicionando o token no cabeçalho
        },
      });

      // Exibir a resposta do servidor
      alert('Apartamento cadastrado com sucesso!');
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      // Se ocorrer um erro, exibir o erro
      console.error('Erro ao enviar dados:', error);
      alert(`Erro ao cadastrar apartamento: ${error.response ? error.response.data.message : error.message}`);
    }
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

          {/* Select para Locador ou Locatário */}
          <label htmlFor="tipoPessoa">Condição</label>
          <select
            id="tipoPessoa"
            value={tipoPessoa}
            onChange={(e) => setTipoPessoa(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="locador">Locador</option>
            <option value="locatário">Locatário</option>
          </select>

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
