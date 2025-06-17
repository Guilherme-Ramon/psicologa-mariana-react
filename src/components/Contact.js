import React, { useState } from 'react';

const Contact = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // ATENÇÃO: Este número é APENAS PARA TESTE e demonstração no GitHub.
  // Não use um número real aqui se o repositório for público.
  // Para testar, você pode colocar o seu próprio número de WhatsApp (com código do país e DDD, ex: "5584999998888").
  // Lembre-se: quando o projeto for para produção, este número deverá ser substituído pelo da Dra. Mariana.
  const numeroWhatsAppParaTeste = "5511999999999"; // Exemplo: 55 (Brasil) 11 (DDD SP) 999999999 (número fictício)

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    if (!nome.trim() || !mensagem.trim()) {
      alert("Por favor, preencha seu nome e mensagem.");
      return;
    }

    const textoFormatado = `Olá, Dra. Mariana! Me chamo ${nome} e gostaria de agendar uma consulta ou conversar com você.\nMinha mensagem é:\n"${mensagem}"`;

    const url = `https://wa.me/${numeroWhatsAppParaTeste}?text=${encodeURIComponent(textoFormatado)}`;
    window.open(url, "_blank");

    setNome('');
    setMensagem('');
  };

  return (
    <section className="container my-5" id="contato">
      <h3>Entre em Contato</h3>
      <form onSubmit={enviarWhatsApp}>
        <div className="mb-3">
          <input
            type="text"
            id="nome"
            className="form-control"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            id="mensagem"
            className="form-control"
            rows="5"
            placeholder="Descreva brevemente como está se sentindo ou o motivo do contato"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success w-100">
          <i className="fab fa-whatsapp"></i> Enviar pelo WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contact;