import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthCheck from './pages/HealthCheck';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Apartamento from './pages/Apartamento';

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
        <Route path="/apartamento" element={<Apartamento />} />
      </Routes>
    </Router>
  );
};


export default App;
