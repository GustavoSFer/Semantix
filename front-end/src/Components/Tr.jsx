import React from 'react';
import PropTypes from 'prop-types';

function Tr({ item }) {
  return (
    <tr>
      <td className="fw-lighter text-monospace">{ item.name }</td>
      <td className="fw-lighter">{ item.email }</td>
      <td className="fw-lighter">{ item.cri }</td>
    </tr>
  );
}

Tr.propTypes = {
  item: PropTypes.arrayOf().isRequired,
};

export default Tr;
