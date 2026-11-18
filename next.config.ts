import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static build: every page becomes plain HTML in out/.
  output: "export",

  // URLs get trailing slashes (/about/) — avoids redirect hops on static hosting.
  trailingSlash: true,

  // next/image's optimization pipeline needs a server; static export
  // doesn't have one. Compress screenshots before adding them later.
  images: { unoptimized: true },

  // Wires Tailwind into Turbopack's CSS pipeline. Without this,
  // @theme/@apply ship unprocessed and the site renders unstyled.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;