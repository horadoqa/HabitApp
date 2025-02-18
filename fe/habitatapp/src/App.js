import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthCheck from './pages/HealthCheck';
import Login from './pages/Login';
import Usuario from './pages/Usuario/Cadastrar';
import Apartamento from './pages/Apartamento/Cadastrar';
import Home from './pages/Home/Home';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/healthcheck" element={<HealthCheck />} />
        
        {/* Rota para Login */}
        <Route path="/" element={<Login setToken={setToken} />} />
        
        <Route path="/home" element={<Home />} />
                
        {/* Rota para Usuário*/}
        <Route path="/usuario" element={<Usuario />} />
        
        {/* Rota para Apartamento*/}
        <Route path="/apartamento" element={<Apartamento />} />

      </Routes>
    </Router>
  );
};


export default App;
