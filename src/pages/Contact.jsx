import React, { useState } from "react"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Erstelle den mailto-Link mit den Formulardaten
    const mailtoLink = `mailto:pagy@powerstagegmbh.ch?subject=Anfrage von ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    )}`;
    
    // Öffne den Standard-Mail-Client
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Kontakt
          </span>
          <span className="invisible">Kontakt</span>
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontakt Info */}
            <div className="
              group
              bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
              border border-[#4287ff]/30
              backdrop-blur-xl
              rounded-3xl p-8
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
              hover:border-[#4287ff]/40
            ">
              <h2 className="
                text-xl
                font-black uppercase tracking-[.15em]
                mb-8
              ">
                <span className="
                  bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                  bg-clip-text text-transparent
                ">
                  Kontaktinformationen
                </span>
              </h2>

              <div className="space-y-6">
                <div className="group/item">
                  <h3 className="text-[#4287ff] text-sm font-extrabold uppercase tracking-[.15em] mb-2">
                    POWER STAGE GmbH
                  </h3>
                  <p className="text-[#4287ff]/70 text-sm group-hover/item:text-[#4287ff] transition-all duration-300">
                    Eggli 2<br />6170 Schüpfheim
                  </p>
                </div>

                <div className="group/item">
                  <h3 className="text-[#4287ff] text-sm font-extrabold uppercase tracking-[.15em] mb-2">
                    Telefon
                  </h3>
                  <p className="text-[#4287ff]/70 text-sm group-hover/item:text-[#4287ff] transition-all duration-300">
                    +41 79 718 79 33
                  </p>
                </div>

                <div className="group/item">
                  <h3 className="text-[#4287ff] text-sm font-extrabold uppercase tracking-[.15em] mb-2">
                    E-Mail
                  </h3>
                  <p className="text-[#4287ff]/70 text-sm group-hover/item:text-[#4287ff] transition-all duration-300">
                    pagy@powerstagegmbh.ch
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="
              group
              bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
              border border-[#4287ff]/30
              backdrop-blur-xl
              rounded-3xl p-8
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(66,135,255,0.2)]
              hover:border-[#4287ff]/40
            ">
              <h2 className="
                text-xl
                font-black uppercase tracking-[.15em]
                mb-8
              ">
                <span className="
                  bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#22d3ee]
                  bg-clip-text text-transparent
                ">
                  Anfrage senden
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group/field">
                  <label className="
                    block text-[#4287ff] 
                    text-sm font-extrabold uppercase tracking-[.15em]
                    mb-2
                  ">
                    Name *
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-gradient-to-br from-[#4287ff]/10 to-[#22d3ee]/5
                      border border-[#4287ff]/30
                      rounded-xl px-4 py-3
                      text-[#4287ff] text-sm
                      placeholder-[#4287ff]/40
                      focus:border-[#4287ff]/60
                      focus:shadow-[0_0_20px_rgba(66,135,246,0.2)]
                      focus:outline-none
                      transition-all duration-300
                    "
                    required
                  />
                </div>

                <div className="group/field">
                  <label className="
                    block text-[#4287ff] 
                    text-sm font-extrabold uppercase tracking-[.15em]
                    mb-2
                  ">
                    E-Mail *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-gradient-to-br from-[#4287ff]/10 to-[#22d3ee]/5
                      border border-[#4287ff]/30
                      rounded-xl px-4 py-3
                      text-[#4287ff] text-sm
                      placeholder-[#4287ff]/40
                      focus:border-[#4287ff]/60
                      focus:shadow-[0_0_20px_rgba(66,135,246,0.2)]
                      focus:outline-none
                      transition-all duration-300
                    "
                    required
                  />
                </div>

                <div className="group/field">
                  <label className="
                    block text-[#4287ff] 
                    text-sm font-extrabold uppercase tracking-[.15em]
                    mb-2
                  ">
                    Nachricht *
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-gradient-to-br from-[#4287ff]/10 to-[#22d3ee]/5
                      border border-[#4287ff]/30
                      rounded-xl px-4 py-3
                      text-[#4287ff] text-sm
                      placeholder-[#4287ff]/40
                      focus:border-[#4287ff]/60
                      focus:shadow-[0_0_20px_rgba(66,135,246,0.2)]
                      focus:outline-none
                      transition-all duration-300
                      resize-none
                    "
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="
                    w-full
                    bg-gradient-to-r from-[#4287ff]/20 to-[#22d3ee]/10
                    border border-[#4287ff]/30
                    text-[#4287ff]
                    text-sm font-extrabold
                    uppercase tracking-[.15em]
                    py-3
                    rounded-xl
                    transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(66,135,255,0.3)]
                    hover:border-[#4287ff]/40
                    hover:text-[#4287ff]
                    active:scale-[0.98]
                  "
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}