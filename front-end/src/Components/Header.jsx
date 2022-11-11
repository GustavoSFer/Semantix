import React from 'react';
import PropTypes from 'prop-types';
import logoEmpresa from '../imagens/logo-empresa.png';

function Header({ name, grupo }) {
  const logo = {
    width: '200px',
  };
  return (
    <header className="d-flex justify-content-between p-4">
      <div>
        <img src={logoEmpresa} alt="logo da empresa" style={logo} />
      </div>
      <div className="d-flex flex-wrap info text-start">
        <p className="w-100">{ name }</p>
        <div>
          <span>{ grupo }</span>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  grupo: PropTypes.string.isRequired,
};

export default Header;
