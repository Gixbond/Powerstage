import React, { useState } from "react"

export const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className="fixed top-8 right-8 z-50">
        <button
          className={`w-10 h-10 flex flex-col justify-center items-center gap-1 transition-all duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <ul className="text-center space-y-8">
            {[
              { href: "#about", label: "Über POWER STAGE" },
              { href: "#team", label: "Team" },
              { href: "#tech", label: "Technik & Ausstattung" },
              { href: "#services", label: "Angebot & Leistungen" },
              { href: "#contact", label: "Kontakt" }
            ].map((item, index) => (
              <li
                key={item.href}
                className={`transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  className="text-4xl md:text-5xl font-light text-white hover:text-neon-cyan transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
