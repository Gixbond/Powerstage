import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const Team = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <GradientTitle className="text-center mb-16">
          Unser Team
        </GradientTitle>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Alex Weber",
                role: "Gründer & CEO",
                bio: "Event-Profi mit 15+ Jahren Erfahrung in der Live-Entertainment-Branche."
              },
              {
                name: "Sarah Chen",
                role: "Technische Leitung",
                bio: "Audio-Engineer und System-Integrator mit Spezialisierung auf mobile PA-Systeme."
              },
              {
                name: "Marcus Schmidt",
                role: "Operations Manager",
                bio: "Logistik-Experte und Event-Koordinator für reibungslose Abläufe."
              }
            ].map((member, index) => (
              <div key={member.name} className="text-center space-y-6">
                <div className="w-48 h-48 mx-auto bg-dark-surface rounded-full flex items-center justify-center">
                  <span className="text-4xl text-neon-cyan">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-neon-cyan mb-4">{member.role}</p>
                  <Paragraph className="text-center">
                    {member.bio}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
