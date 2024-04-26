import React from 'react';

const Decoration = ({color, style})=>{
    return (
        <div className="decoration" >
        {/* ✨ */}
        <svg width="100" height="100" viewBox="0 0 100 100" style={style}>
      <polygon points="50,0 60,20 80,30 60,40 50,60 40,40 20,30 40,20" fill={color} />
    </svg>
      </div>
    )
}

export default Decoration