import React from "react"

export const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`h2 ${className}`}>
      {children}
    </h2>
  )
}
