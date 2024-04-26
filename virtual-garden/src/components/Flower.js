import React from 'react'

const Flower = ({color, style})=>{
    return (
        <div className="flower" >
        {/* 🌸 */}
        <svg width="100" height="100" viewBox="0 0 100 100" style={style}>
      <circle cx="50" cy="40" r="15" fill={color} />
      <circle cx="35" cy="55" r="15" fill={color} />
      <circle cx="65" cy="55" r="15" fill={color} />
      <circle cx="50" cy="70" r="15" fill={color} />
      <circle cx="50" cy="55" r="5" fill="black" />
    </svg>
      </div>
    )
}

export default Flower;