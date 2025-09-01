import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { SectionTitle } from "../components/SectionTitle"
import { Paragraph } from "../components/Paragraph"

export const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <GradientTitle className="text-center mb-16">
          Kontakt
        </GradientTitle>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <SectionTitle className="mb-4">Kontaktinformationen</SectionTitle>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-neon-cyan font-semibold mb-2">POWER STAGE GmbH</h3>
                    <Paragraph>Eventstraße 123<br />12345 Eventstadt</Paragraph>
                  </div>
                  
                  <div>
                    <h3 className="text-neon-cyan font-semibold mb-2">Telefon</h3>
                    <Paragraph>+49 (0) 123 456789</Paragraph>
                  </div>
                  
                  <div>
                    <h3 className="text-neon-cyan font-semibold mb-2">E-Mail</h3>
                    <Paragraph>info@power-stage.de</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <SectionTitle className="mb-6">Anfrage senden</SectionTitle>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Name *</label>
                    <input 
                      type="text" 
                      className="w-full bg-dark-surface border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">E-Mail *</label>
                    <input 
                      type="email" 
                      className="w-full bg-dark-surface border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Nachricht *</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-dark-surface border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-neon-cyan text-black font-semibold py-3 px-6 rounded-lg hover:bg-neon-cyan/80 transition-colors duration-300"
                  >
                    Anfrage senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
