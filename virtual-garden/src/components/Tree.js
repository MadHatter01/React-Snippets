import React from 'react';

const Tree = ({color})=>{
    return (
        <div className="tree">
        {/* 🌳 */}
         <svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="20" r="15" fill={color} />
    <circle cx="40" cy="35" r="12" fill={color} />
    <circle cx="60" cy="35" r="12" fill={color} />
    <circle cx="50" cy="50" r="5" fill="black" />
  </svg> 
      </div>
    )
}

export default Tree;