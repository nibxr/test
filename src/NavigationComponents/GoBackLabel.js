import React from 'react';

const GoBackLabel = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ color: 'Grey', border: 'none', background: 'transparent', cursor: 'pointer' }}>
      Go Back
    </button>
  );
};

export default GoBackLabel;