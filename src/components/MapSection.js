import React from 'react';

const MapSection = () => {
  return (
    <section className="container my-5" id="mapa">
      <h3>Localização do Consultório</h3>
      <div className="ratio ratio-16x9 rounded shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.6432478274826!2d-46.55356882035346!3d-23.476958449753283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef578b62d377b%3A0x1c7ca49464216743!2sAv.%20S%C3%A3o%20Paulo%2C%20419%20-%20Cidade%20Brasil!5e1!3m2!1spt-BR!2sbr!4v1750202916183!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Consultório"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
