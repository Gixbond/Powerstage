import React from "react"

export const Tech = () => {
  const specs = [
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
    },
    {
      category: "LED-Screens",
      items: [
        "Hochauflösende LED-Panels",
        "Flexibel konfigurierbare Display-Größen",
        "Content Management System für Live-Updates",
        "Wetterfeste Outdoor-Displays"
      ]
    },
    {
      category: "Netzwerk",
      items: [
        "Redundantes Glasfaser-Netzwerk",
        "Professionelles WLAN-System",
        "Gesicherte Datenübertragung",
        "Remote-Monitoring aller Systeme"
      ]
    }
  ];

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
          py-4
          leading-[1.5]
        ">
          <span className="
            absolute inset-0
            bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
            bg-clip-text text-transparent
            leading-[1.4]
          ">
            Technik & Ausstattung
          </span>
          <span className="invisible">Technik & Ausstattung</span>
        </h1>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {specs.map((spec) => (
            <div 
              key={spec.category}
              className="
                group
                bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                border border-[#4287ff]/30
                backdrop-blur-xl
                rounded-3xl p-8 md:p-12
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                hover:border-[#4287ff]/40
              "
            >
              {/* Kategorie-Titel im Gradient-Style */}
              <h2 className="
                relative
                text-2xl md:text-3xl
                font-black uppercase tracking-[.25em]
                mb-12
              ">
                <span className="
                  bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                  bg-clip-text text-transparent
                ">
                  {spec.category}
                </span>
              </h2>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {spec.items.map((item, index) => (
                  <div 
                    key={index}
                    className="
                      flex items-start gap-4
                      group/item
                      transition-all duration-300
                    "
                  >
                    {/* Neon Punkt mit Glow */}
                    <div className="
                      w-2 h-2 mt-3 flex-shrink-0
                      rounded-full
                      bg-[#4287ff]
                      shadow-[0_0_10px_rgba(66,135,255,0.5)]
                      group-hover/item:scale-125
                      transition-all duration-300
                    " />
                    
                    {/* Feature Text */}
                    <p className="
                      text-[#4287ff]/70
                      group-hover/item:text-[#4287ff]
                      transition-all duration-300
                    ">
                      {item}
                    </p>
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