import React from 'react';

const About = () => {
  return (
    <section className="container my-5" id="sobre">
      <h3 className="text-center mb-4">Sobre a Psicóloga</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <p className="lead text-center mb-4 px-3">
            Dra. Mariana Silva é uma psicóloga apaixonada por auxiliar indivíduos em sua jornada de autoconhecimento e bem-estar emocional.
          </p>
          <div className="row mt-4 g-4">
            <div className="col-md-4 mb-3">
              <h4><i className="fas fa-brain me-2" style={{ color: '#5d6bff' }}></i> Abordagem Terapêutica</h4>
              <p>
                Com uma abordagem integrativa e humanizada, a Dra. Mariana utiliza técnicas da Terapia Cognitivo-Comportamental (TCC) e da Psicologia Positiva, adaptando cada sessão às necessidades únicas de seus pacientes. Seu foco é fornecer ferramentas práticas para lidar com desafios e promover um desenvolvimento contínuo.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h4><i className="fas fa-lightbulb me-2" style={{ color: '#f39c12' }}></i> Valores e Missão</h4>
              <p>
                Sua missão é criar um espaço seguro e acolhedor, onde a escuta ativa e a empatia são a base de todo o processo terapêutico. Acredita que o cuidado com a saúde mental é um investimento essencial para uma vida plena e equilibrada, e busca desmistificar a terapia, tornando-a acessível a todos.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h4><i className="fas fa-seedling me-2" style={{ color: '#25D366' }}></i> Cresça e Floresça</h4>
            <p>
              Se você busca suporte para ansiedade, depressão, estresse, ou simplesmente deseja explorar seu potencial e fortalecer suas emoções, a Dra. Mariana está pronta para te guiar.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;