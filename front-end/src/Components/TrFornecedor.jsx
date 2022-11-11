import React from 'react';
import PropTypes from 'prop-types';

function TrFornecedor({ item }) {
  return (
    <tr>
      <td className="fw-lighter text-monospace">{ item.name }</td>
      <td className="fw-lighter">{ item.email }</td>
      <td className="fw-lighter">{ item.empresa }</td>
      <td className="fw-lighter">{ item.cnpj }</td>
    </tr>
  );
}

TrFornecedor.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    empresa: PropTypes.string,
    cnpj: PropTypes.string,
  }).isRequired,
};

export default TrFornecedor;
