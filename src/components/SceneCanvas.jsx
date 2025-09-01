import React from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"
import { TrailerScene } from "./TrailerScene"

export const SceneCanvas = ({ children }) => {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: "#0B0B0D" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ScrollControls pages={5} damping={0.25}>
          <TrailerScene />
        </ScrollControls>
      </Canvas>
      {children}
    </div>
  )
}
