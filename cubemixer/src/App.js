
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
      <mesh>
    <boxGeometry args={[2, 2, 2]}  />
    <meshStandardMaterial />
    <ambientLight intensity={0.1} />
  <directionalLight color="violet" position={[0, 0, 5]} />
    </mesh>
</Canvas>
    </div>
  )
}

export default App