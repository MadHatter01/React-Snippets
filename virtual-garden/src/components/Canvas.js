// Canvas.js
import React from 'react';
import Flower from './Flower';
import Decoration from './Decoration';
import Tree from './Tree';
const Canvas = ({ elements, onRemoveElement }) => {
  return (
    <div className="canvas" onClick={(e) => onRemoveElement(e.target.id)}>
      {/* {elements.map((element) => (
        <div
          key={element.id}
          id={element.id}
          className={element.type}
          style={{ backgroundColor: element.color }}
        >
          {element.type}
        </div>
      ))} */}
       {elements.map((element) => {
        const style = {
          position:'absolute',
          left: `${element.x}px`,
          top: `${element.y+100}px`
        };
        switch (element.type) {
          case 'flower':
            return <Flower key={element.id} color={element.color} style={style} />;
          case 'tree':
            return <Tree key={element.id} color={element.color}  style={style}/>;
          case 'decoration':
            return <Decoration key={element.id} color={element.color} style={style} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Canvas;
