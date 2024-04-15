// Canvas.js
import React from 'react';

const Canvas = ({ elements, onRemoveElement }) => {
  return (
    <div className="canvas" onClick={(e) => onRemoveElement(e.target.id)}>
      {elements.map((element) => (
        <div
          key={element.id}
          id={element.id}
          className={element.type}
          style={{ backgroundColor: element.color }}
        >
          {element.type}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
