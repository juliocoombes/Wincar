import React, { useState } from "react";
import "./Navbar.css";
import content from "../../content/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-wrapper"> {/* 👈 NUEVO wrapper full width */}
        <div className="navbar">

          {/* Logo */}
          <h3>{content.marca}</h3>

          {/* Links desktop */}
          <div className="navlinks">
            {content.nav.map((item, i) => (
              <a key={i} href={item.href}>{item.label}</a>
            ))}
          </div>

          {/* Botón hamburguesa mobile */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="mobile-menu">
          {content.nav.map((item, i) => (
            <a key={i} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
