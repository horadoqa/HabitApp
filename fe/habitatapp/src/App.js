import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HealthCheck from './pages/HealthCheck';
import Login from './pages/Login';
import Usuario from './pages/Usuario/Cadastrar';
import Apartamento from './pages/Apartamento';
// import Home from './pages/Home';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={<Login setToken={setToken} />} />
        
        {/* Rota para Cadastro */}
        <Route path="/healthcheck" element={<HealthCheck />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/apartamento-cadastrar" element={<Apartamento />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
