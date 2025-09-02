import React from "react"

export const Team = () => {
  const team = [
    {
      name: "Jens Stirnimann",
      role: "Gründer & CEO",
      bio: "Event-Profi mit 15+ Jahren Erfahrung in der Live-Entertainment-Branche."
    },
    {
      name: "DJ FÄNSTER OFF",
      role: "Technische Leitung",
      bio: "Audio-Engineer und DJ mit langjähriger Erfahrung in der elektronischen Musikszene."
    },
    {
      name: "Kevin Stirnimann",
      role: "Creative Director",
      bio: "Grafik Designer und Brand-Experte für die visuelle Identität von POWER STAGE."
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
          py-2
        ">
          <span className="
            absolute inset-0
            bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
            bg-clip-text text-transparent
            leading-[1.4]
          ">
            Unser Team
          </span>
          <span className="invisible">Unser Team</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div 
                key={member.name} 
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
                  text-center
                "
              >
                {/* Avatar Circle mit Gradient Border */}
                <div className="
                  relative w-48 h-48 mx-auto mb-8
                  rounded-full
                  bg-gradient-to-br from-[#4287ff]/20 to-[#22d3ee]/10
                  border border-[#4287ff]/30
                  backdrop-blur-xl
                  flex items-center justify-center
                  overflow-hidden
                  group-hover:border-[#4287ff]/40
                  group-hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
                  transition-all duration-300
                ">
                  <span className="
                    text-6xl font-black
                    bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                    bg-clip-text text-transparent
                  ">
                    {member.name.split(' ')[0].charAt(0)}
                  </span>
                </div>

                {/* Name mit Gradient */}
                <h3 className="
                  relative
                  text-2xl font-black uppercase tracking-[.15em]
                  mb-4
                ">
                  <span className="
                    bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                    bg-clip-text text-transparent
                  ">
                    {member.name}
                  </span>
                </h3>

                {/* Role in Neon Blue */}
                <p className="
                  text-[#4287ff] 
                  uppercase text-sm tracking-[.35em] font-extrabold 
                  mb-6
                ">
                  {member.role}
                </p>

                {/* Bio Text */}
                <p className="text-[#4287ff]/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}