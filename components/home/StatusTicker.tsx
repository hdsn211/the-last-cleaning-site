// Status strip under the hero — the marquee of honest statuses.

import { SITE } from "@/content/site";

const ITEMS = [
  SITE.status,
  "SITE BUILD 0.1",
  "NO PLAYABLE RELEASE YET",
  "ALL GAME VISUALS ARE PLACEHOLDERS",
  "TRAILER PENDING",
  "DOCUMENTATION IN PROGRESS",
];

export default function StatusTicker() {
  // The sequence is rendered twice; the CSS animation slides the
  // track by -50%, creating a seamless infinite loop.
  const seq = (dup: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={dup || undefined}>
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap text-[10.5px] tracking-[0.24em] text-bone-faint"
        >
          <span className="px-8">{item}</span>
          <span className="text-[9px] text-blood-dim">◆</span>
        </span>
      ))}
    </div>
  );
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-ash py-3">
      <div className="ticker-track flex w-max">{seq(false)}{seq(true)}</div>
    </div>
  );
}