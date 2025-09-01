# POWER STAGE - Mobile Event-Trailer Website

Eine futuristische Scrollytelling-Website für den POWER STAGE mobilen Event-Trailer.

## 🚀 Features

- **3D Scrollytelling**: 5 interaktive Szenen mit Three.js
- **Modernes Design**: Dark Mode mit Neon-Highlights
- **Responsive**: Optimiert für Mobile und Desktop
- **Performance**: Optimiert mit Vite und React
- **SEO**: Meta-Tags und strukturierte Inhalte

## 🛠️ Technologie-Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D**: React Three Fiber + Drei
- **Animationen**: Framer Motion + GSAP
- **Fonts**: Inter (Google Fonts)

## 📁 Projektstruktur

```
src/
├── components/          # Wiederverwendbare UI-Komponenten
│   ├── GradientTitle.tsx    # H1 mit Gradient-Effekt
│   ├── SectionTitle.tsx     # H2 in Weiß
│   ├── Paragraph.tsx        # Body-Text
│   ├── Navbar.tsx           # Burger-Menü + Overlay
│   ├── Footer.tsx           # Footer-Komponente
│   ├── SceneCanvas.tsx      # 3D Canvas Container
│   └── TrailerScene.tsx     # 3D Trailer-Logik
├── pages/               # Seiten-Komponenten
│   ├── Home.tsx         # Hero Scrollytelling (5 Szenen)
│   ├── About.tsx        # Über POWER STAGE
│   ├── Team.tsx         # Team-Vorstellung
│   ├── Tech.tsx         # Technik & Ausstattung
│   ├── Services.tsx     # Angebot & Leistungen
│   └── Contact.tsx      # Kontaktformular
├── styles/              # Styling
│   └── globals.css      # Tailwind + Custom Utilities
├── lib/                 # Utilities und Helpers
│   ├── cameraPresets.ts # Kamerapositionen je Szene
│   └── neon.ts          # Neon-Effekt Helpers
└── main.tsx             # App Entry Point
```

## 🎨 Design-System

### Farben
- **Hintergrund**: `#0B0B0D` (Dunkel)
- **Neon-Cyan**: `#00ffff`
- **Neon-Magenta**: `#ff00ff`
- **Neon-Yellow**: `#ffff00`
- **Neon-Pink**: `#ff69b4`

### Typografie
- **Font**: Inter (Google Fonts)
- **H1**: Gradient-Text mit `.h1` Utility
- **H2**: Weiß mit `.h2` Utility
- **Body**: Weiß/80% mit `.body` Utility

## 🎬 Scrollytelling-Szenen

1. **Szene 1**: Geschlossener Trailer → "A stage on wheels."
2. **Szene 2**: Rolltor öffnet sich → "Unfold. Unlock. Play."
3. **Szene 3**: Stromanschluss-Fokus → "Plug in. Power up."
4. **Szene 4**: LED-Screens → "Your brand. Your content."
5. **Szene 5**: Festival-Crowd → "Sound for 3000 guests."

## 🚀 Installation & Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Preview Production Build
npm run preview
```

## 📝 Anpassungen

### 3D-Modell ersetzen
1. GLB/GLTF-Datei in `/public/model.glb` platzieren
2. In `TrailerScene.tsx` das Dummy-Modell durch das echte Modell ersetzen:
```tsx
import { useGLTF } from "@react-three/drei"

// Ersetze die Box-Komponenten durch:
const { nodes, materials } = useGLTF("/model.glb")
```

### Inhalte anpassen
- **Texte**: In den entsprechenden Page-Komponenten bearbeiten
- **Farben**: In `tailwind.config.js` anpassen
- **Animationen**: In `TrailerScene.tsx` modifizieren

### SEO optimieren
- Meta-Tags in `index.html` anpassen
- Open Graph Tags für Social Media
- Structured Data hinzufügen

## 🔧 Development

### Neue Szene hinzufügen
1. Kamerapreset in `cameraPresets.ts` definieren
2. 3D-Logik in `TrailerScene.tsx` erweitern
3. Text-Overlay in `Home.tsx` hinzufügen

### Neue Seite hinzufügen
1. Page-Komponente in `/pages` erstellen
2. Route in `App.tsx` hinzufügen
3. Navigation in `Navbar.tsx` erweitern

## 📱 Responsive Design

- **Mobile**: Optimiert für Touch-Interaktionen
- **Tablet**: Angepasste Layouts
- **Desktop**: Vollständige 3D-Erfahrung

## 🎯 Performance-Optimierungen

- **Code Splitting**: Lazy Loading für Seiten
- **3D-Optimierung**: Level of Detail (LOD)
- **Asset-Optimierung**: Komprimierte Texturen
- **Caching**: Service Worker für Offline-Support

## 📄 Lizenz

© 2024 POWER STAGE GmbH. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für die Event-Branche**
