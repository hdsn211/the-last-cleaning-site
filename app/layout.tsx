import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Special_Elite, VT323 } from "next/font/google";
import "./globals.css";
        <SvgDefs />
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Atmosphere from "@/components/effects/Atmosphere";
import SvgDefs from "@/components/effects/SvgDefs";
import { SITE } from "@/content/site";

const headFont = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
});
const bodyFont = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});
const osdFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.title} — Official Site (In Development)`,
    template: `%s — ${SITE.title}`,
  },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#0b0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headFont.variable} ${bodyFont.variable} ${osdFont.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        {/* Keyboard users can jump straight past the navigation */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />

        {/* Full-screen film layers, above everything but never clickable */}
        <Atmosphere />
      </body>
    </html>
  );
}