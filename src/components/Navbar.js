import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light sticky-top" style={{ backgroundColor: '#e3e8ff' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dra. Mariana Silva</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#inicio">Início</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicos">Serviços</a></li>
              <li className="nav-item"><a className="nav-link" href="#depoimentos">Depoimentos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;