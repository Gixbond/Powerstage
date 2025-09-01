/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

function range(v, a, b) {
  return THREE.MathUtils.clamp((v - a) / (b - a), 0, 1);
}

export default function Scene3D() {
  const group = useRef();
  const door = useRef();
  const glow = useRef();
  const scroll = useScroll();

  // Neon-Farben je Szene
  const neonColors = [
    new THREE.Color("#a855f7"), // Szene 1: Purple
    new THREE.Color("#ec4899"), // Szene 2: Pink
    new THREE.Color("#22d3ee"), // Szene 3: Cyan
    new THREE.Color("#eab308"), // Szene 4: Yellow
    new THREE.Color("#3b82f6"), // Szene 5: Blue
  ];

  useFrame(() => {
    const p = scroll.offset; // 0..1
    const t1 = range(p, 0.0, 0.2);
    const t2 = range(p, 0.2, 0.4);
    const t3 = range(p, 0.4, 0.6);
    const t4 = range(p, 0.6, 0.8);
    const t5 = range(p, 0.8, 1.0);

    // Kamera/Position wie gehabt
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(-0.25, 0.35, p);
      group.current.position.y = THREE.MathUtils.lerp(0, 0.15, t1);
      const zClose = THREE.MathUtils.lerp(0, -1.0, t3);
      const zFar = THREE.MathUtils.lerp(0, 1.2, t5);
      group.current.position.z = zClose + zFar;
    }
    if (door.current) {
      door.current.position.y = THREE.MathUtils.lerp(0, 1.2, t2);
    }

    // Neonfarbe je Szene morphen (robust am unteren Ende)
    if (glow.current && glow.current.material) {
      const scenes = neonColors.length;
      const sceneIndex = Math.min(Math.floor(p * scenes), scenes - 1);
      const nextIndex = Math.min(sceneIndex + 1, scenes - 1);
      const localProgress = p * scenes - sceneIndex; // 0..1 innerhalb der aktuellen Szene
      const current = neonColors[sceneIndex];
      const next = neonColors[nextIndex];
      const mixed = current.clone().lerp(next, localProgress);

      glow.current.material.emissive.copy(mixed);
      glow.current.material.emissiveIntensity = THREE.MathUtils.lerp(0.2, 1.4, t4);
    }
  });

  return (
    <group ref={group}>
      {/* Trailer-Placeholder */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.2, 1.4, 1.2]} />
        <meshStandardMaterial color="#141418" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Rolltor */}
      <mesh ref={door} position={[0, 0.1, 0.62]}>
        <boxGeometry args={[1.6, 1.0, 0.05]} />
        <meshStandardMaterial color="#0e0e12" />
      </mesh>

      {/* Neon-Frame */}
      <mesh ref={glow} position={[0, 0.15, 0.65]}>
        <torusGeometry args={[0.55, 0.03, 16, 64]} />
        <meshStandardMaterial color="#111" emissive="#a855f7" emissiveIntensity={0.5} />
      </mesh>

      <pointLight position={[3, 3, 3]} intensity={25} />
      <pointLight position={[-3, -2, -1]} intensity={8} />
      <ambientLight intensity={0.15} />
    </group>
  );
}
