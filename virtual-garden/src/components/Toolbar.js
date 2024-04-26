import React from 'react';

const Toolbar = ({ onAddElement }) => {
  return (
    <div className="toolbar">
      <button className="primary-btn" onClick={() => onAddElement('flower')} >Add Flower</button>
      <button className="primary-btn" onClick={() => onAddElement('tree')}>Add Tree</button>
      <button className="primary-btn" onClick={() => onAddElement('decoration')}>Add Decoration</button>
    </div>
  );
};

export default Toolbar;
