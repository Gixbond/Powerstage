# POWER STAGE – Mobile Event‑Trailer Website

Eine moderne Scrollytelling‑Site mit 3D‑Szene, React Router und Tailwind.

## Features
- 3D‑Scrollytelling: 5 Szenen mit React Three Fiber + Drei
- Clean UI: Neon‑Akzente, responsives Layout
- Routing: Unterseiten für About, Team, Tech, Services, Contact
- SEO: Meta/OG‑Tags in `index.html`
- GitHub Pages Deploy via Workflow

## Stack
- React 19 (JS/JSX)
- Vite 7
- Tailwind CSS
- @react-three/fiber, @react-three/drei
- Optional vorhanden: Framer Motion, GSAP

## Struktur

```
src/
├── App.jsx            # Routes + Home 3D Scrollytelling
├── Navbar.jsx         # Burger-Menü + Overlay-Navigation
├── Scene3D.jsx        # Drei.js-Objekte + Scroll-Animation
├── components/
│   ├── GradientTitle.jsx
│   ├── Paragraph.jsx
│   └── SectionTitle.jsx
├── pages/
│   ├── About.jsx
│   ├── Team.jsx
│   ├── Tech.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── index.css          # Tailwind + Utilities
└── main.jsx           # Entry (HashRouter)
```

Hinweis: Der Home‑Hero (5 Szenen) liegt direkt in `App.jsx` als DOM‑Overlay innerhalb der `ScrollControls` und nicht als eigene `Home.jsx`.

## Lokale Entwicklung

```bash
npm install
npm run dev
# Öffnen: http://localhost:5173
```

Build und Preview:
```bash
npm run build
npm run preview
# Öffnen: http://localhost:4173/power-stage/
```

## Konfigurationen
- Vite Base‑Path: `vite.config.js` nutzt `base: '/power-stage/'` für GitHub Pages (Repo‑Name).
- Router: `HashRouter` in `src/main.jsx` vermeidet 404 auf Pages.
- Scroll: Auf `/` wird `overflow` deaktiviert (3D‑Scroll), auf Unterseiten wieder aktiviert.
- Tailwind: Konfig in `tailwind.config.js`, Utilities in `src/index.css`.

## Inhalte anpassen
- 3D‑Szene: `src/Scene3D.jsx` (Geometrien, Lichter, Emissive‑Farben, Scroll‑Logik)
- Home‑Text: Sections in `src/App.jsx` (DOM Overlay im `Scroll html`)
- Seiten‑Inhalte: Dateien unter `src/pages/`
- Farben/Fonts: `tailwind.config.js` und `src/index.css`
- SEO: `index.html` Meta/OG

## Contributing
- Branch: `git checkout -b feature/<name>`
- Lint: `npm run lint` (muss sauber sein)
- Commit: klare Nachrichten, z. B. `feat: add contact form validation`
- PR: kurze Beschreibung, Screenshots bei UI‑Änderungen

## Deploy (GitHub Pages)
- Workflow: `.github/workflows/deploy.yml` baut bei Push auf `main`.
- Pfad: Projekt wird unter `/<repo>/` ausgeliefert → hier `'/power-stage/'`.
- Anpassen: Falls Repo‑Name abweicht, `vite.config.js: base` entsprechend ändern.
- Manuell testen: `npm run build && npm run preview` und `http://localhost:4173/power-stage/` öffnen.

## Lizenz
© 2024 POWER STAGE GmbH. Alle Rechte vorbehalten.

— Entwickelt mit ❤️ für die Event‑Branche
