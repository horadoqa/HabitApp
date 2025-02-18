import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import HealthCheck from './pages/HealthCheck'; // Importando a página de HealthCheck

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={<Login setToken={setToken} />} />
        
        {/* Rota para Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/healthcheck" element={<HealthCheck />} />
      </Routes>
    </Router>
  );
};


export default App;
