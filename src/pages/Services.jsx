import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const Services = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <GradientTitle className="text-center mb-16">
          Angebot & Leistungen
        </GradientTitle>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vermietung",
                description: "Flexible Mietoptionen für Events jeder Größe",
                price: "Ab 2.500€/Tag"
              },
              {
                title: "Full-Service",
                description: "Komplette Event-Betreuung von der Planung bis zur Durchführung",
                price: "Nach Vereinbarung"
              },
              {
                title: "Branding",
                description: "Maßgeschneiderte Branding-Lösungen für Ihr Event",
                price: "Ab 500€"
              }
            ].map((service, index) => (
              <div key={service.title} className="bg-dark-surface p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neon-cyan font-semibold">{service.price}</p>
                </div>
                
                <Paragraph>{service.description}</Paragraph>
                
                <button className="w-full bg-neon-cyan text-black font-semibold py-3 px-6 rounded-lg hover:bg-neon-cyan/80 transition-colors duration-300">
                  Anfrage senden
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
