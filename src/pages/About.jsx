import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <GradientTitle className="text-center mb-16">
          Über POWER STAGE
        </GradientTitle>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <SectionTitle className="mb-6">
              Unsere Mission
            </SectionTitle>
            <Paragraph>
              POWER STAGE revolutioniert die Event-Branche mit dem ersten vollständig mobilen 
              Event-Trailer. Wir bringen professionelle Bühnen-Technik direkt zu Ihnen - 
              egal wo Ihr Event stattfindet.
            </Paragraph>
          </div>
          
          <div>
            <SectionTitle className="mb-6">
              Was uns ausmacht
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-cyan">Mobilität</h3>
                <Paragraph>
                  Unser Trailer kann überall aufgebaut werden - von der Stadtmitte 
                  bis zur abgelegenen Location.
                </Paragraph>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-magenta">Professionell</h3>
                <Paragraph>
                  Vollständige PA-Anlage, LED-Screens und professionelle Beleuchtung 
                  in einem System.
                </Paragraph>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-yellow">Flexibel</h3>
                <Paragraph>
                  Anpassbar an verschiedene Event-Größen und Anforderungen - 
                  von 100 bis 3000 Gästen.
                </Paragraph>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neon-pink">Full-Service</h3>
                <Paragraph>
                  Von der Planung bis zur Durchführung - wir übernehmen alles 
                  für Ihr perfektes Event.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
