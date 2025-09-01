import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"

export const TrailerScene = () => {
  const trailerRef = useRef()

  useFrame((state) => {
    if (trailerRef.current) {
      // Simple floating animation
      trailerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Simple trailer body */}
      <Box 
        ref={trailerRef}
        args={[3, 2, 6]} 
        position={[0, 1, 0]}
      >
        <meshStandardMaterial color="#444" />
      </Box>
      
      {/* Trailer roof */}
      <Box 
        args={[3.2, 0.5, 6.2]} 
        position={[0, 2.25, 0]}
      >
        <meshStandardMaterial color="#333" />
      </Box>
      
      {/* Wheels */}
      <Box args={[0.8, 0.8, 0.3]} position={[-1.5, 0.4, -2]}>
        <meshStandardMaterial color="#111" />
      </Box>
      <Box args={[0.8, 0.8, 0.3]} position={[1.5, 0.4, -2]}>
        <meshStandardMaterial color="#111" />
      </Box>
      <Box args={[0.8, 0.8, 0.3]} position={[-1.5, 0.4, 2]}>
        <meshStandardMaterial color="#111" />
      </Box>
      <Box args={[0.8, 0.8, 0.3]} position={[1.5, 0.4, 2]}>
        <meshStandardMaterial color="#111" />
      </Box>
      
      {/* Neon accent */}
      <Box args={[3.3, 0.1, 0.1]} position={[0, 2.3, 3.1]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Box>
    </group>
  )
}
