
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/content/site";

const SOCIALS: { label: string; href: string | null }[] = [
  { label: "itch.io", href: SITE.links.itch },
  { label: "YouTube", href: SITE.links.youtube },
  { label: "Steam", href: SITE.links.steam },
  { label: "Bluesky / X", href: SITE.links.bluesky },
];

const TEAM = [
  "Hudson Davie Gacer",
  "Princess Rafaela Genobiagon",
  "Ann Khenna Binangnan",
  "Carlo Cobrado",
  "John Paul Pagaran",
  "Yev Ordiz",
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-[#060607]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <p className="title-glow font-head text-lg text-blood">
            {SITE.title}
          </p>

          <p className="mt-2 text-xs tracking-[0.1em] text-bone-dim">
            {SITE.tagline}
          </p>

          <p className="mt-4 max-w-xs text-[11.5px] leading-relaxed text-bone-faint">
            A first-person survival horror experience.
            Clean the house. Stay alive. And don't come back
            after dark.
          </p>
        </div>

        {/* Website navigation */}
        <FooterCol title="SITE">
          <FLink href="/">Home</FLink>
          <FLink href="/about">About</FLink>
          <FLink href="/features">Features</FLink>
          <FLink href="/gallery">Gallery</FLink>
          <FLink href="/trailer">Trailer</FLink>
        </FooterCol>

        {/* Game navigation */}
        <FooterCol title="GAME">
          <FLink href="/play">Play in browser</FLink>
          <FLink href="/docs">Documentation</FLink>
          <FLink href="/credits">Credits</FLink>
        </FooterCol>

        {/* Social links */}
        <FooterCol title="SOCIAL">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              {s.href ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:text-bone"
                >
                  {s.label}
                </a>
              ) : (
                <span className="text-[11.5px] uppercase tracking-[0.14em] text-bone-faint">
                  {s.label}
                  <span className="ml-2 text-[8.5px] tracking-[0.2em]">
                    PENDING
                  </span>
                </span>
              )}
            </li>
          ))}
        </FooterCol>
      </div>

      {/* Team credits */}
      <div className="wrap border-t border-line py-8">
        <p className="mb-5 text-center text-[10px] font-semibold tracking-[0.3em] text-blood-2">
          // THE TEAM BEHIND THE NIGHT
        </p>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          {TEAM.map((name) => (
            <span
              key={name}
              className="text-[11px] tracking-[0.08em] text-bone-dim"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Closing message */}
      <div className="wrap border-t border-line py-6 text-center">
        <p className="text-[13px] text-bone">
          Thank you for visiting.{" "}
          <span className="text-bone-dim">
            Please don't come back after dark.
          </span>
          <span className="cursor-blink text-blood-2" aria-hidden="true">
            ▌
          </span>
        </p>
      </div>

      {/* Copyright */}
      <div className="wrap flex flex-wrap justify-between gap-3 border-t border-line py-5 text-[10.5px] tracking-wide text-bone-faint">
        <p>
          © {year} 6 Studio — developed by the team behind THE LAST CLEANING.
          All rights reserved.
        </p>

        <p>THE LAST CLEANING — Official Website</p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={`Footer — ${title.toLowerCase()}`}>
      <h3 className="mb-4 text-[11px] font-semibold tracking-[0.26em] text-blood-2">
        {title}
      </h3>

      <ul className="space-y-2.5">{children}</ul>
    </nav>
  );
}

function FLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[11.5px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:text-bone"
      >
        {children}
      </Link>
    </li>
  );
}
