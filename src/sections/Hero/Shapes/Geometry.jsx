// Geometry.jsx
import React, { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import gsap from "gsap";

export default function Geometry({
  geometry,
  position = [0, 0, 0],
  rate = 0.5,
}) {
  const meshRef = useRef();
  const geom = useMemo(
    () => geometry ?? new THREE.IcosahedronGeometry(0.9),
    [geometry]
  );

  const soundEffects = [
    new Audio("./sounds/hit1.ogg"),
    new Audio("./sounds/hit2.ogg"),
    new Audio("./sounds/hit3.ogg"),
  ];

  const materialParams = [
    { color: 0x2ecc71, roughness: 0 },
    { color: 0xf1c40f, roughness: 0.4 },
    { color: 0xe74c3c, roughness: 0.1 },
    { color: 0x8e44ad, roughness: 0.1 },
    { color: 0x1abc9c, roughness: 0.1 },
    { color: 0x2980b9, roughness: 0, metalness: 0.5 },
    { color: 0x2c3e50, roughness: 0.1, metalness: 0.5 },
  ];

  const meshMaterial = [
    new THREE.MeshStandardMaterial(gsap.utils.random(materialParams)),
    new THREE.MeshPhysicalMaterial(gsap.utils.random(materialParams)),
    new THREE.MeshNormalMaterial()
  ];

  function getRandomMaterial() {
    return gsap.utils.random(meshMaterial);
  }

  useEffect(() => {
    if (!meshRef.current) return;

    gsap.fromTo(
      meshRef.current.scale,
      { x: 0.5, y: 0.5, z: 0.5 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      }
    );
    return () => {
      if (!geometry) {
        geom.dispose?.();
      }
    };
  }, [geom, geometry]);

  const handleClick = (event) => {
    gsap.utils.random(soundEffects).play();

    if ("object" in event && event.object instanceof THREE.Mesh) {
      gsap.to(event.object.rotation, {
        x: `+=${gsap.utils.random(0, 3)}`,
        y: `+=${gsap.utils.random(0, 3)}`,
        z: `+=${gsap.utils.random(0, 3)}`,
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
      });

      event.object.material = getRandomMaterial();
    }
  };

  return (
    <group position={position.map((p) => p * 2)}>
      <Float
        speed={5 * rate}
        rotationSpeed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          geometry={geom}
          material={getRandomMaterial()}
          ref={meshRef}
          onClick={handleClick}
        />
      </Float>
    </group>
  );
}
