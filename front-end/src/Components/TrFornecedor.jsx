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
  item: PropTypes.arrayOf().isRequired,
};

export default TrFornecedor;
