import React from 'react';
import PropTypes from 'prop-types';

function TrCozinheiro({ item }) {
  return (
    <tr>
      <td className="fw-lighter text-monospace">{ item.name }</td>
      <td className="fw-lighter">{ item.email }</td>
      <td className="fw-lighter">{ item.cri }</td>
    </tr>
  );
}

TrCozinheiro.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cri: PropTypes.string,
  }).isRequired,
};

export default TrCozinheiro;
