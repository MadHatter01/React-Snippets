import React from 'react'

const Flower = ({color})=>{
    return (
        <div className="flower" style={{ backgroundColor: color }}>
        🌸
      </div>
    )
}

export default Flower;