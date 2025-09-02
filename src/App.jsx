import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Scene3D from "./Scene3D";
import { useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Tech } from "./pages/Tech";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

/** Eine Section mit Text – je Szene links oder rechts ausgerichtet */
function Section({ title, side = "left" }) {
  const left = side === "left";
  return (
    <section className="h-viewport grid grid-cols-12 items-center px-6 md:px-10">
      {/* Erste 4 Spalten: Text wenn links */}
      <div className={`col-span-12 ${left ? "md:col-span-4" : "hidden md:block md:col-span-4"}`}>
        {left && (
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="h1 whitespace-pre-line drop-shadow-[0_6px_20px_rgba(78,70,255,.25)]">
              {title}
            </h1>
          </div>
        )}
      </div>
      {/* Mittlere 4 Spalten: Frei für Animation */}
      <div className="hidden md:block md:col-span-4" />
      {/* Letzte 4 Spalten: Text wenn rechts */}
      <div className={`col-span-12 ${!left ? "md:col-span-4" : "hidden md:block md:col-span-4"}`}>
        {!left && (
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="h1 whitespace-pre-line drop-shadow-[0_6px_20px_rgba(78,70,255,.25)]">
              {title}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}

/** kleine Progress-Dots oben rechts, damit klar ist, in welcher Szene man ist */
function ProgressDots({ pages = 5 }) {
  const scroll = useScroll();
  const thresholds = useMemo(
    () => Array.from({ length: pages }, (_, i) => (i + 0.5) / pages),
    [pages]
  );
  return (
    <div className="fixed right-5 top-5 md:right-8 md:top-8 z-[9999]">
      <div className="flex md:flex-col gap-3 md:gap-2">
        {thresholds.map((t, i) => {
          const active = scroll.offset >= i / pages && scroll.offset < (i + 1) / pages;
          return (
            <span
              key={i}
              className="inline-block rounded-full transition-all duration-200"
              style={{
                width: active ? 14 : 10,
                height: active ? 14 : 10,
                boxShadow: active ? "0 0 24px rgba(99,102,241,.7)" : "none",
                background: active
                  ? "linear-gradient(90deg,#a855f7,#3b82f6,#22d3ee)"
                  : "rgba(255,255,255,.35)",
                opacity: active ? 1 : 0.6,
              }}
              title={`Scene ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Edge-Guard: verhindert, dass das ScrollControls-Element am oberen/unteren Anschlag hängen bleibt
function ScrollEdgeGuard() {
  const scroll = useScroll();
  useEffect(() => {
    const el = scroll.el;
    if (!el) return;
    const nudge = () => {
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 0) return;
      if (el.scrollTop <= 0) el.scrollTop = 1;
      else if (el.scrollTop >= max) el.scrollTop = Math.max(0, max - 1);
    };
    // Beim Mount minimal lösen und bei Input-Events gegenprüfen
    const raf = requestAnimationFrame(nudge);
    el.addEventListener('scroll', nudge, { passive: true });
    el.addEventListener('wheel', nudge, { passive: true });
    el.addEventListener('touchstart', nudge, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', nudge);
      el.removeEventListener('wheel', nudge);
      el.removeEventListener('touchstart', nudge);
    };
  }, [scroll]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Steuere Scrollbarkeit: Home = no-scroll (für ScrollControls), andere Routen = normal scrollen
  useEffect(() => {
    const value = isHome ? "hidden" : "auto";
    document.documentElement.style.overflow = value;
    document.body.style.overflow = value;
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isHome]);

  // Dynamische Seitentitel je Route
  useEffect(() => {
    const titles = {
      "/": "POWER STAGE — Mobile Event‑Trailer",
      "/about": "Über POWER STAGE",
      "/team": "Team — POWER STAGE",
      "/tech": "Technik & Ausstattung — POWER STAGE",
      "/services": "Angebot & Leistungen — POWER STAGE",
      "/contact": "Kontakt — POWER STAGE",
    };
    document.title = titles[location.pathname] || "POWER STAGE";
  }, [location.pathname]);

  const Home3D = (
    <>
      {/* dezentes Glow-Overlay für Tiefe */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(88,101,242,.12) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* 3D-Canvas liegt ganz hinten, bleibt immer zentral */}
      <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 6] }}>
        <color attach="background" args={["#0B0B0D"]} />
        <ambientLight intensity={0.2} />

        {/* ScrollControls koppeln 3D und DOM über 5 "Seiten" */}
        <ScrollControls pages={5} damping={0.14}>
          <ScrollEdgeGuard />
          {/* 3D-Modell: bleibt mittig; reagiert auf den Scroll-Offset (siehe Scene3D) */}
          <Scene3D />

          {/* DOM-Overlay mit Textblöcken */}
          <Scroll html>
            <Section
              side="left"
              title={"A STAGE ON\nWHEELS."}
            />
            <Section
              side="right"
              title={"UNFOLD. UNLOCK.\nPLAY."}
            />
            <Section
              side="left"
              title={"PLUG IN.\nPOWER UP."}
            />
            <Section
              side="right"
              title={"YOUR BRAND.\nYOUR CONTENT."}
            />
            <Section
              side="left"
              title={"SOUND FOR\n3000\nGUESTS."}
            />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Home3D} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="min-h-screen grid place-items-center text-center p-10">
          <div>
            <h1 className="h1 mb-6">Seite nicht gefunden</h1>
            <p className="body mb-8">Die angeforderte Seite existiert nicht.</p>
            <a href="#/" className="inline-block bg-white/10 border border-white/15 px-5 py-3 rounded-lg text-white hover:bg-white/15 transition">Zurück zur Startseite</a>
          </div>
        </div>} />
      </Routes>
      {!isHome && <Footer />}
    </>
  );
}
