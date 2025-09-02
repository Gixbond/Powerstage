import React from "react"

export const Services = () => {
  const services = [
    {
      title: "Vermietung",
      description: "Flexible Mietoptionen für Events jeder Größe. Inklusive Auf- und Abbau, technischer Support und Beratung.",
      price: "Ab 2.500€/Tag",
      features: [
        "Professionelle Beratung",
        "Technischer Support",
        "Auf- und Abbau inklusive",
        "24/7 Notfall-Service"
      ]
    },
    {
      title: "Full-Service",
      description: "Komplette Event-Betreuung von der Planung bis zur Durchführung. Wir kümmern uns um jedes Detail.",
      price: "Nach Vereinbarung",
      features: [
        "Event-Konzeption",
        "Technische Planung",
        "Personal-Management",
        "Vollständige Betreuung"
      ]
    },
    {
      title: "Branding",
      description: "Maßgeschneiderte Branding-Lösungen für Ihr Event. Von LED-Displays bis zur kompletten visuellen Integration.",
      price: "Ab 500€",
      features: [
        "Content-Erstellung",
        "LED-Screen Design",
        "Brand Integration",
        "Live-Content Management"
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
            Angebot & Leistungen
          </span>
          <span className="invisible">Angebot & Leistungen</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="
                  group
                  bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
                  border border-[#4287ff]/30
                  backdrop-blur-xl
                  rounded-3xl p-8
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                  hover:border-[#4287ff]/40
                  hover:scale-[1.02]
                "
              >
                {/* Service Titel */}
                <h3 className="
                  relative
                  text-2xl font-black uppercase tracking-[.15em]
                  mb-2
                ">
                  <span className="
                    bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                    bg-clip-text text-transparent
                  ">
                    {service.title}
                  </span>
                </h3>

                {/* Preis in Neon Blue */}
                <p className="
                  text-[#4287ff]
                  font-extrabold
                  mb-6
                ">
                  {service.price}
                </p>

                {/* Beschreibung */}
                <p className="
                  text-[#4287ff]/70
                  mb-8
                  leading-relaxed
                ">
                  {service.description}
                </p>

                {/* Features Liste */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="
                        flex items-center gap-3
                        group/item
                        transition-all duration-300
                      "
                    >
                      {/* Feature Punkt */}
                      <div className="
                        w-2 h-2
                        rounded-full
                        bg-[#4287ff]
                        shadow-[0_0_10px_rgba(66,135,255,0.5)]
                        group-hover/item:scale-125
                        transition-all duration-300
                      " />
                      
                      {/* Feature Text */}
                      <span className="
                        text-[#4287ff]/70
                        group-hover/item:text-[#4287ff]
                        transition-all duration-300
                      ">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Anfrage Button */}
                <button className="
                  w-full
                  bg-gradient-to-r from-[#4287ff]/20 to-[#22d3ee]/10
                  border border-[#4287ff]/30
                  text-[#4287ff]
                  font-black
                  uppercase
                  tracking-[.15em]
                  py-4
                  rounded-xl
                  transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(66,135,255,0.3)]
                  hover:border-[#4287ff]/40
                  hover:text-[#4287ff]
                  active:scale-[0.98]
                ">
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