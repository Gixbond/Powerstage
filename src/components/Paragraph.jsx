import React from "react"

export const Paragraph = ({ children }) => {
  return (
    <p className="body" style={{ maxWidth: '42rem', margin: '0 auto' }}>
      {children}
    </p>
  )
}
