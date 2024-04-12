
import React from 'react'

const Cube = ()=>{
    return (
        <mesh>
          <boxBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="blue" />
        </mesh>
      );
}

export default Cube