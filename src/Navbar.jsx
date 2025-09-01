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
      <div className="relative mx-auto max-w-6xl">
        {/* Centered brand only on the homepage to avoid overlapping content on subpages */}
        {isHome && (
          <span className="fixed z-[2000] left-1/2 top-16 md:top-24 -translate-x-1/2 gradient-text uppercase font-black tracking-[.4em] text-3xl md:text-6xl lg:text-7xl drop-shadow-[0_8px_40px_rgba(88,101,242,.35)] select-none pointer-events-none">
            POWER STAGE
          </span>
        )}
        {/* Burger button top-right, closer to corner */}
        <button
          onClick={() => setOpen(!open)}
          className="fixed right-4 top-4 z-[2001] text-white h-10 w-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:shadow-[0_8px_40px_rgba(88,101,242,.25)] transition-all flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[1999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu card: centered on mobile, shifted right on md+ */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-6 md:translate-x-0 w-[92%] max-w-md md:w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-200 ease-out">
            <div className="p-5 border-b border-white/10">
              <span className="gradient-text uppercase text-sm tracking-[.35em] font-extrabold">Navigation</span>
            </div>
            <ul className="p-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center justify-between gap-4 px-4 py-4 rounded-xl hover:bg-white/10 active:scale-[0.995] transition-all"
                  >
                    <span className="uppercase gradient-text font-black tracking-[.2em] text-base md:text-lg">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
