import * as THREE from "three";
import Geometry from "./Geometry";
import { ContactShadows, Environment} from "@react-three/drei";

export default function Shapes() {
  return (
    <>
      <perspectiveCamera
        makeDefault
        position={[0, 0, 25]}
        aspect={1}
        fov={30}
        near={1}
        far={40}
      />

      <Environment files="./smallroom.hdr" format="hdr"/>


      <ContactShadows position={[0, -1.8, 0]} opacity={0.65} scale={10} blur={1} far={2.6} />

      {/* Gem */}
      <Geometry position={[0, 0, 0]} rate={0.3} geometry={new THREE.IcosahedronGeometry(1.8)}/>

      {/* Pill */}
      <Geometry position={[0.6, -0.6, 0.8]} rate={0.4} geometry={new THREE.CapsuleGeometry(0.25, 0.8, 4, 16)}/>

      {/* Soccer Ball */}
      <Geometry position={[-1, 0.9, -0.6]} rate={0.6} geometry={new THREE.DodecahedronGeometry(0.8)}/>

      {/* Donut */}
      <Geometry position={[-0.6, -0.6, 0.9]} rate={0.4} geometry={new THREE.TorusGeometry(0.4, 0.17, 24, 200)}/>

      {/* Diamond */}
      <Geometry position={[1, 0.9, -0.6]} rate={0.6} geometry={new THREE.OctahedronGeometry(1)}/>
    </>
  );
}
