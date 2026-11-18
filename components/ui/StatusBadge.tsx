// ============================================================
// STATUS BADGE — the small honest label on feature cards etc.
// The color is chosen by status automatically, not by hand.
// ============================================================

import type { DevStatus } from "@/content/features";

const TONE: Record<DevStatus, string> = {
  "IN DEVELOPMENT": "border-blood/50 text-blood-2",
  "COMING SOON":    "border-blood/50 text-blood-2",
  PLANNED:          "border-line-2 text-bone-faint",
  PLACEHOLDER:      "border-line-2 text-bone-faint",
  PENDING:          "border-line-2 text-bone-faint",
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status: DevStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border px-2 py-1 text-[9.5px] leading-none tracking-[0.22em] ${TONE[status]} ${className}`}
    >
      {status}
    </span>
  );
}