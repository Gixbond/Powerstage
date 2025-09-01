import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Scene3D from "./Scene3D";
import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Tech } from "./pages/Tech";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

/** Eine Section mit Text – je Szene links oder rechts ausgerichtet */
function Section({ title, side = "left" }) {
  const left = side === "left";
  return (
    <section className="h-screen grid grid-cols-12 items-center px-6 md:px-10">
      {/* linke Spalte */}
      <div className={`${left ? "col-span-12 md:col-span-5" : "hidden md:block md:col-span-7"}`} />
      {/* rechte Spalte (bei links = Text rechts freilassen / bei rechts = Text hier) */}
      <div className={`${left ? "col-span-12 md:col-span-5 md:col-start-1 md:order-none" : "col-span-12 md:col-span-5 md:col-start-8"}`}>
        <div className={`${left ? "text-left" : "text-left md:text-right"} max-w-xl`}>
          <h1 className="h1 whitespace-pre-line drop-shadow-[0_6px_20px_rgba(78,70,255,.25)]">
            {title}
          </h1>
        </div>
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

export default function App() {
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

        {/* ScrollControls koppeln 3D und DOM über 5 „Seiten" */}
        <ScrollControls pages={5.001} damping={0.14}>
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
              title={"SOUND FOR 3000\nGUESTS."}
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
      </Routes>
    </>
  );
}

