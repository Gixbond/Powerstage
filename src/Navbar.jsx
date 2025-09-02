"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Über POWER STAGE", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Technik & Ausstattung", href: "/tech" },
  { name: "Angebot & Leistungen", href: "/services" },
  { name: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[2000] p-4">
      {/* Header Bar mit Logo und Menü-Button */}
      <div className="fixed top-0 left-0 right-0 z-[2000] p-4 flex items-center justify-between pointer-events-none">
        <div className="w-10" />
        {isHome && (
          <Link 
            to="/" 
            className="pointer-events-auto gradient-text uppercase font-black tracking-[.4em] text-3xl md:text-6xl lg:text-7xl drop-shadow-[0_8px_40px_rgba(88,101,242,.35)] select-none text-center hover:scale-[1.02] transition-transform duration-300"
          >
            POWER STAGE
          </Link>
        )}
        <button
          onClick={() => setOpen(!open)}
          className={`
            pointer-events-auto relative h-12 w-12 rounded-2xl 
            bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
            border border-[#4287ff]/30 backdrop-blur-md 
            shadow-[0_0_20px_rgba(66,135,255,0.25)]
            hover:shadow-[0_0_30px_rgba(66,135,255,0.4)]
            hover:border-[#4287ff]/50
            transition-all duration-300 ease-out
            flex items-center justify-center
            overflow-hidden
            group
            hover:scale-105
          `}
          aria-label="Menü öffnen"
          aria-controls="main-menu"
          aria-expanded={open}
        >
          <div className={`
            absolute transition-all duration-300 
            text-[#4287ff] group-hover:text-[#22d3ee]
            ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
          `}>
            <Menu size={24} strokeWidth={2.5} />
          </div>
          <div className={`
            absolute transition-all duration-300
            text-[#4287ff] group-hover:text-[#22d3ee]
            ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
          `}>
            <X size={24} strokeWidth={2.5} />
          </div>
        </button>
      </div>

      {/* Fullscreen Menu */}
      <div 
        className={`
          fixed inset-0 z-[1999] 
          transition-all duration-500 ease-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="menu-title"
      >
        {/* Animated Backdrop mit Gradient Overlay */}
        <div
          className={`
            absolute inset-0 
            bg-gradient-to-br from-black/90 to-[#0f172a]/90
            backdrop-blur-lg
            transition-all duration-500
            ${open ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setOpen(false)}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4287ff]/20 to-transparent animate-pulse" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,135,255,0.1),transparent_50%)]" />
          </div>
        </div>

        {/* Menu Card */}
        <div 
          id="main-menu" 
          className={`
            absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 
            md:left-auto md:right-6 md:translate-x-0
            w-[92%] max-w-md md:w-[420px] 
            rounded-3xl
            border border-[#4287ff]/30
            bg-gradient-to-br from-[#4287ff]/15 to-[#22d3ee]/10
            backdrop-blur-2xl 
            shadow-[0_0_30px_rgba(66,135,255,0.3)]
            transition-all duration-500
            ${open ? "scale-100 opacity-100 md:translate-y-[-50%]" : "scale-95 opacity-0 md:translate-y-[-45%]"}
          `}
        >
          {/* Header mit Neon-Effekt */}
          <div className="p-6">
            <span id="menu-title" className="text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold">
              Navigation
            </span>
          </div>

          {/* Links mit verbesserten Hover-Effekten */}
          <ul className="p-3 space-y-1">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`
                      group relative flex items-center gap-4 
                      px-5 py-4 rounded-2xl
                      transition-all duration-300
                      ${isActive ? 'bg-[#4287ff]/15' : 'hover:bg-[#4287ff]/10'}
                      hover:scale-[1.02]
                    `}
                  >
                    <span className={`
                      text-[#4287ff] uppercase text-sm tracking-[.35em] font-extrabold
                      transition-all duration-300
                      ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}
                    `}>
                      {link.name}
                    </span>
                    
                    {/* Hover/Active Indicator mit Glow */}
                    <div className={`
                      absolute right-5 top-1/2 -translate-y-1/2
                      w-2 h-2 rounded-full
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-[#4287ff] shadow-[0_0_10px_rgba(66,135,255,0.5)] scale-100' 
                        : 'scale-0 group-hover:scale-100 group-hover:bg-[#4287ff] group-hover:shadow-[0_0_10px_rgba(66,135,255,0.3)]'}
                    `} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}