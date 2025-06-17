import React from 'react';

const Testimonials = () => {
  return (
    <section className="container my-5" id="depoimentos">
      <h3>Depoimentos</h3>
      <div className="depoimentos-scroll">
        <div className="depoimentos-track">
          <div className="depoimento-card"><strong>Carlos T.</strong>
            <p>“Escuta ativa e empatia desde o primeiro atendimento.”</p>
          </div>
          <div className="depoimento-card"><strong>Fernanda R.</strong>
            <p>“Acolhimento e profissionalismo em cada sessão.”</p>
          </div>
          <div className="depoimento-card"><strong>Lucas S.</strong>
            <p>“Uma experiência transformadora. Recomendo muito!”</p>
          </div>
          <div className="depoimento-card"><strong>Juliana M.</strong>
            <p>“Melhorei minha autoestima e ansiedade com a ajuda dela.”</p>
          </div>
          <div className="depoimento-card"><strong>Andréa B.</strong>
            <p>“Me senti compreendida e acolhida em cada consulta.”</p>
          </div>
            <div className="depoimento-card"><strong>Roberto L.</strong>
                <p>“A Dra. Mariana é uma profissional incrível, mudou minha vida!”</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;