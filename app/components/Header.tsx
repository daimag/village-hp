"use client";

import { useEffect, useState } from "react";
import { company, nav } from "@/app/lib/company";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hd${solid ? " solid" : ""}`}>
      <div className="in">
        <a className="brand" href="#top" aria-label={company.name}>
          <span className="vmark">V</span>
          <span className="bt">
            VILLAGE
            <small>{company.name}</small>
          </span>
        </a>
        <nav>
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="cbtn" href="#contact">
          CONTACT
        </a>
        <button
          type="button"
          className="burger"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div className={`mnav${open ? " open" : ""}`}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          CONTACT
        </a>
      </div>
    </header>
  );
}
