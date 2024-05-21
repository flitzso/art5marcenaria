import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'; // Certifique-se de que o caminho esteja correto

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">Produtos</a>
          <a className="nav-item nav-link" href="#">Marcenaria</a>
          <a className="nav-item nav-link" href="#">Sobre</a>
          <a className="nav-item nav-link" href="#">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
