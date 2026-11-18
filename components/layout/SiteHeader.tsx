"use client";

// ============================================================
// SITE HEADER — fixed navigation bar.
// First CLIENT component: it holds state and listens to
// browser events, so it must run in the visitor's browser.
// "use client" must be the very first line of the file.
// ============================================================

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/content/site";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/features", label: "FEATURES" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/trailer", label: "TRAILER" },
  { href: "/play", label: "PLAY" },
  { href: "/docs", label: "DOCS" },
];

export default function SiteHeader() {
  const pathname = usePathname();                    // current URL — updates on navigation
  const [open, setOpen] = useState(false);           // mobile menu open?
  const [scrolled, setScrolled] = useState(false);   // scrolled past 40px?

  // Switch to a solid background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll); // cleanup
  }, []);

  // Auto-close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // "/about/" → "/about" — used to highlight the active link.
  const current = pathname.replace(/\/$/, "") || "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-void/95" : "border-transparent bg-void/40 backdrop-blur-sm"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${SITE.title} — home`}
          className="flex items-center gap-3 font-head text-sm tracking-wide text-bone"
        >
          <LogoMark />
          {SITE.title}
        </Link>

        {/* Desktop nav — hidden below 1024px */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current === item.href ? "page" : undefined}
              className={`text-[11.5px] tracking-[0.2em] transition-colors ${
                current === item.href ? "text-bone" : "text-bone-dim hover:text-bone"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden border border-blood/50 px-2 py-1 text-[9.5px] tracking-[0.24em] text-blood-2 md:block">
            {SITE.status}
          </span>
          {/* Hamburger — visible below 1024px */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-9 w-11 items-center justify-center border border-line-2 text-bone lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — slides open/closed */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-void/95 transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 border-b border-line opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="wrap flex flex-col py-3" aria-label="Primary, mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 text-[13px] tracking-[0.2em] ${
                current === item.href ? "text-bone" : "text-bone-dim"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="text-blood-2"
      aria-hidden
    >
      <path d="M6 21V4l10-2v19" />
      <path d="M6 21h12" />
      <circle cx="13.4" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}