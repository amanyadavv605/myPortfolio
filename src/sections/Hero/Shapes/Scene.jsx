import { Canvas } from '@react-three/fiber'
import Shapes from './Shapes'


export default function Scene() {
  return (
      <Canvas shadows>
        <Shapes />
      </Canvas>
  )
}

