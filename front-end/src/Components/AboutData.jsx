import React from 'react';
import { Link } from 'react-router-dom';
import logoEmpresa from '../imagens/logo-empresa.png';

function AboutData() {
  const logo = {
    width: '200px',
  };
  return (
    <section className="text-start posi-about">
      <img src={logoEmpresa} alt="logo da empresa" style={logo} />
      <span className="about-data">All About Data</span>
      <h1>The Big Data revolution in your organisation</h1>
      <p className="p-about">
        Join the data revolution and accelerate the digital
        trasnformation of your business with Big Data, Artificial inteligence,
        Machine Learning and more.
      </p>
      <span className="left" />
      <Link to="/" className="register">Voltar para Login</Link>
    </section>
  );
}

export default AboutData;
