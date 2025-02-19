import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando os componentes de Home
import HealthCheck from './pages/HealthCheck';
import Login from './pages/Login';
import Home from './pages/Home/Home';

// Importando os componentes de Usuários
import CadastrarApartamento from './pages/Apartamento/Cadastrar';
import CadastrarUsuario from './pages/Usuario/Cadastrar';

// Importando os componentes de Apartamento
import AlterarApartamento from './pages/Apartamento/Alterar';
import BuscarApartamento from './pages/Apartamento/Buscar';
import EnviarComunicado from './pages/Apartamento/Comunicado';
import BuscarNome from './pages/Apartamento/BuscarNome';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/healthcheck" element={<HealthCheck />} />
        
        {/* Rota para Login */}
        <Route path="/" element={<Login setToken={setToken} />} />
        
        <Route path="/home" element={<Home />} />
        
        {/* Rota para Usuário */}
        <Route path="/cadastrar" element={<CadastrarUsuario />} />
        
        {/* Rota para Apartamento */}
        <Route path="/apartamento" element={<CadastrarApartamento />} />
        <Route path="/apartamento/alterar" element={<AlterarApartamento />} />
        <Route path="/apartamento/buscar" element={<BuscarApartamento />} />
        <Route path="/apartamento/comunicado" element={<EnviarComunicado />} />
        <Route path="/apartamento/buscar-nome" element={<BuscarNome />} />
      </Routes>
    </Router>
  );
};

export default App;
