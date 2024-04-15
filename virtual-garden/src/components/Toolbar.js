import React from 'react';

const Toolbar = ({ onAddElement }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onAddElement('flower')}>Add Flower</button>
      <button onClick={() => onAddElement('tree')}>Add Tree</button>
      <button onClick={() => onAddElement('decoration')}>Add Decoration</button>
    </div>
  );
};

export default Toolbar;
