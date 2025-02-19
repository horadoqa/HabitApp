import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBurger.css';

const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-burger">
      <div className="menu-container">
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="app-name">HabitApp</div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/apartamento">Cadastrar Apartamento</Link></li>
          <li><Link to="/apartamento/buscar">Buscar Apartamento</Link></li>
          <li><Link to="/apartamento/alterar">Alterar Apartamento</Link></li>
          <li><Link to="/apartamento/buscar-moradores">Buscar por Nome</Link></li>
          <li><Link to="/apartamento/comunicado">Enviar Comunicado</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBurger;
