"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { company } from "@/app/lib/company";

const nav = [
  { href: "#services", label: "事業内容" },
  { href: "#strengths", label: "選ばれる理由" },
  { href: "#company", label: "会社概要" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center" aria-label={company.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${company.tel.replace(/-/g, "")}`}
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
          >
            {company.tel}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 md:hidden"
          aria-label="メニュー"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-0.5 w-6 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-0.5 w-6 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-50 py-3 text-slate-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={`tel:${company.tel.replace(/-/g, "")}`}
                className="block rounded-full bg-sky-600 px-5 py-2.5 text-center font-semibold text-white"
              >
                電話する {company.tel}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
