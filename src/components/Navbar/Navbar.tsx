import React, { useState, useEffect } from "react";
import "./Navbar.css";
import content from "../../content/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Para que "#contacto" -> "/#contacto"
  const buildHref = (href: string) => {
    if (href.startsWith("#")) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav className={`navbar-root ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-wrapper">
        <div className="navbar">
          {/* LOGO: vuelve siempre al home */}
          <a href="/" className="logo">
            <h3>{content.marca}</h3>
          </a>

          {/* Links desktop */}
          <div className="navlinks">
            {content.nav.map((item, i) => (
              <a key={i} href={buildHref(item.href)}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            className="hamburger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="mobile-menu">
          {content.nav.map((item, i) => (
            <a
              key={i}
              href={buildHref(item.href)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
