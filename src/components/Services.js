import React from 'react';

const Services = () => {
  return (
    <section className="container my-5" id="servicos">
      <h3>Serviços Oferecidos</h3>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-user icon-blue"></i> Terapia individual</h5>
              <p className="card-text">Foco no autoconhecimento e bem-estar emocional.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-laptop icon-green"></i> Atendimento online</h5>
              <p className="card-text">Sessões com conforto e segurança de casa.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-heart icon-red"></i> Aconselhamento emocional</h5>
              <p className="card-text">Suporte para lidar com perdas e emoções difíceis.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-handshake icon-purple"></i> Terapia de Casal</h5>
              <p className="card-text">Fortalecimento de relacionamentos e resolução de conflitos.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-child icon-orange"></i> Orientação Parental</h5>
              <p className="card-text">Apoio a pais na criação e desenvolvimento dos filhos.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100">
            <div className="card-body">
              <h5 className="card-title"><i className="fas fa-users icon-teal"></i> Grupos Terapêuticos</h5>
              <p className="card-text">Compartilhamento de experiências e apoio mútuo em grupo.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;