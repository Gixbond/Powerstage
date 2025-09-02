import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0D] py-32">
      {/* Hintergrund-Effekt wie in der Navigation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4287ff]/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,135,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Haupttitel mit gleichem Gradient wie Logo */}
        <h1 className="
          relative
          text-center mb-24
          text-4xl md:text-5xl lg:text-6xl
          font-black uppercase tracking-[.25em]
          drop-shadow-[0_8px_40px_rgba(88,101,242,.35)]
          py-2
        ">
          <span className="
            absolute inset-0
            bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
            bg-clip-text text-transparent
            leading-[1.4]
          ">
            Über Power Stage
          </span>
          <span className="invisible">Über Power Stage</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Mission Section */}
          <div className="space-y-8">
            <h2 className="
              relative
              text-2xl md:text-3xl
              font-black uppercase tracking-[.25em]
              py-1
            ">
              <span className="
                absolute inset-0
                bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                bg-clip-text text-transparent
                leading-[1.4]
              ">
                Unsere Mission
              </span>
              <span className="invisible">Unsere Mission</span>
            </h2>
            <p className="text-[#4287ff]/70 text-lg leading-relaxed">
              POWER STAGE revolutioniert die Event-Branche mit dem ersten vollständig mobilen 
              Event-Trailer. Wir bringen professionelle Bühnen-Technik direkt zu Ihnen - 
              egal wo Ihr Event stattfindet.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="space-y-8">
            <h2 className="
              relative
              text-2xl md:text-3xl
              font-black uppercase tracking-[.25em]
              py-1
            ">
              <span className="
                absolute inset-0
                bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                bg-clip-text text-transparent
                leading-[1.4]
              ">
                Was uns ausmacht
              </span>
              <span className="invisible">Was uns ausmacht</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Cards im Navbar-Style */}
              <div className="
                group
                bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                border border-[#4287ff]/30
                backdrop-blur-xl
                rounded-3xl p-8
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                hover:border-[#4287ff]/40
                hover:scale-[1.02]
              ">
                <h3 className="text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold mb-4">
                  Mobilität
                </h3>
                <p className="text-[#4287ff]/70 leading-relaxed">
                  Unser Trailer kann überall aufgebaut werden - von der Stadtmitte 
                  bis zur abgelegenen Location.
                </p>
              </div>

              <div className="
                group
                bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                border border-[#4287ff]/30
                backdrop-blur-xl
                rounded-3xl p-8
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                hover:border-[#4287ff]/40
                hover:scale-[1.02]
              ">
                <h3 className="text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold mb-4">
                  Professionell
                </h3>
                <p className="text-[#4287ff]/70 leading-relaxed">
                  Vollständige PA-Anlage, LED-Screens und professionelle Beleuchtung 
                  in einem System.
                </p>
              </div>

              <div className="
                group
                bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                border border-[#4287ff]/30
                backdrop-blur-xl
                rounded-3xl p-8
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                hover:border-[#4287ff]/40
                hover:scale-[1.02]
              ">
                <h3 className="text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold mb-4">
                  Flexibel
                </h3>
                <p className="text-[#4287ff]/70 leading-relaxed">
                  Anpassbar an verschiedene Event-Größen und Anforderungen - 
                  von 100 bis 3000 Gästen.
                </p>
              </div>

              <div className="
                group
                bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                border border-[#4287ff]/30
                backdrop-blur-xl
                rounded-3xl p-8
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                hover:border-[#4287ff]/40
                hover:scale-[1.02]
              ">
                <h3 className="text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold mb-4">
                  Full-Service
                </h3>
                <p className="text-[#4287ff]/70 leading-relaxed">
                  Von der Planung bis zur Durchführung - wir übernehmen alles 
                  für Ihr perfektes Event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}