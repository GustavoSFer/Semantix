import React from 'react';
import PropTypes from 'prop-types';

function TrSuprimentos({ item }) {
  return (
    <tr>
      <td className="fw-lighter text-monospace">{ item.name }</td>
      <td className="fw-lighter">{ item.email }</td>
      <td className="fw-lighter">{ item.suprimentos }</td>
    </tr>
  );
}

TrSuprimentos.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    suprimentos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default TrSuprimentos;
