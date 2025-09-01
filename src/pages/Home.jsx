import React from "react"
import { GradientTitle } from "../components/GradientTitle"
import { Paragraph } from "../components/Paragraph"

export const Home = () => {
  return (
    <div style={{ 
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ 
        maxWidth: '56rem', 
        margin: '0 auto'
      }}>
        {/* Scene 1 */}
        <div style={{ marginBottom: '8rem' }}>
          <GradientTitle>
            A stage on wheels.
          </GradientTitle>
          <Paragraph>
            Ein mobiler Event-Trailer, der überall zur Bühne wird.
          </Paragraph>
        </div>
        
        {/* Scene 2 */}
        <div style={{ marginBottom: '8rem' }}>
          <GradientTitle>
            Unfold. Unlock. Play.
          </GradientTitle>
          <Paragraph>
            Das Rolltor öffnet sich und enthüllt die vollständige Bühne.
          </Paragraph>
        </div>
        
        {/* Scene 3 */}
        <div style={{ marginBottom: '8rem' }}>
          <GradientTitle>
            Plug in. Power up.
          </GradientTitle>
          <Paragraph>
            32A Stromanschluss für professionelle Veranstaltungen.
          </Paragraph>
        </div>
        
        {/* Scene 4 */}
        <div style={{ marginBottom: '8rem' }}>
          <GradientTitle>
            Your brand. Your content.
          </GradientTitle>
          <Paragraph>
            LED-Screens für Ihr Branding und Ihre Inhalte.
          </Paragraph>
        </div>
        
        {/* Scene 5 */}
        <div style={{ marginBottom: '8rem' }}>
          <GradientTitle>
            Sound for 3000 guests.
          </GradientTitle>
          <Paragraph>
            Professionelle PA-Anlage für große Events.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
