// Neon effect helpers for Three.js materials
export const createNeonMaterial = (color, intensity = 1) => ({
  color,
  emissive: color,
  emissiveIntensity: intensity,
  transparent: true,
  opacity: 0.8
})

export const createOutlineMaterial = (color) => ({
  color,
  transparent: true,
  opacity: 0.5,
  side: "BackSide"
})

export const neonColors = {
  cyan: "#00ffff",
  magenta: "#ff00ff", 
  yellow: "#ffff00",
  pink: "#ff69b4",
  white: "#ffffff"
}

export const createGlowEffect = (color) => ({
  color,
  emissive: color,
  emissiveIntensity: 0.5,
  transparent: true,
  opacity: 0.6
})
