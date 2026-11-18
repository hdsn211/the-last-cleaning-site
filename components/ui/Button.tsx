// ============================================================
// BUTTON — one prefab for every button/link on the site.
// Give it a `href` and it renders as a link; omit it and it
// renders as a real <button>. Like a prefab with Inspector
// fields: variant, icon, badge.
// ============================================================

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;                 // where a link-button goes (omit for a plain button)
  variant?: "primary" | "ghost"; // red filled, or dark outlined
  icon?: ReactNode;              // small icon, e.g. <Play size={12} />
  badge?: string;                // tiny trailing label, e.g. "SOON"
  className?: string;            // extra classes from the caller
  children: ReactNode;           // the button text
  "aria-label"?: string;         // accessible name when the text isn't enough
};

export default function Button({
  href,
  variant = "primary",
  icon,
  badge,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  // Base styles shared by all buttons + per-variant styles.
  const classes = [
    "inline-flex items-center gap-2.5 border px-7 py-4",
    "font-mono text-xs font-semibold uppercase tracking-[0.16em]",
    "transition-all duration-200 hover:-translate-y-0.5",
    variant === "primary"
      ? "border-[#8c2c2a] bg-blood-deep text-[#eeddd2] hover:bg-[#742121] hover:shadow-[0_10px_26px_rgba(120,28,26,0.22)]"
      : "border-line-2 bg-transparent text-bone hover:border-blood-dim",
    className,
  ].join(" ");

  const inner = (
    <>
      {icon}
      {children}
      {badge && (
        <span className="ml-1 border border-blood-dim px-1.5 py-0.5 text-[9px] tracking-[0.2em] text-blood-2">
          {badge}
        </span>
      )}
    </>
  );

  // External URLs (https://…) open in a new tab.
  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {inner}
        </a>
      );
    }
    // Internal URLs use Next.js <Link> for instant page transitions.
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {inner}
    </button>
  );
}