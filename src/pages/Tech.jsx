import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const Tech = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <GradientTitle className="text-center mb-16">
          Technik & Ausstattung
        </GradientTitle>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {[
            {
              category: "Stromversorgung",
              items: [
                "32A CEE-Stecker für professionelle Stromversorgung",
                "Redundante Stromversorgung für maximale Sicherheit",
                "UPS-System für unterbrechungsfreie Stromversorgung"
              ]
            },
            {
              category: "PA-System",
              items: [
                "Line Array System für optimale Klangverteilung",
                "Subwoofer für tiefe Frequenzen",
                "Digitales Mischpult mit Remote-Control",
                "Klang für bis zu 3000 Personen"
              ]
            }
          ].map((spec, index) => (
            <div key={spec.category} className="space-y-8">
              <SectionTitle className="text-neon-cyan">
                {spec.category}
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-8">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-3 flex-shrink-0" />
                    <Paragraph>{item}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
