// ============================================================
// STUB PAGE — shared honest placeholder for routes that are
// scheduled but not built yet. Real pages will replace these
// one by one; this component stays reusable.
// ============================================================

import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import Reveal from "@/components/ui/Reveal";

type Props = {
  label: string;
  title: string;
  note: string;
};

export default function StubPage({ label, title, note }: Props) {
  return (
    <section className="flex min-h-[70vh] items-center pt-16">
      <div className="wrap">
        <Reveal>
          <StatusBadge status="PLACEHOLDER" className="mb-6" />
          <SectionHeading label={label} title={title} sub={note} />
          <p className="text-[11px] tracking-[0.2em] text-bone-faint">
            // THIS PAGE IS SCHEDULED IN AN UPCOMING BUILD MILESTONE
          </p>
        </Reveal>
      </div>
    </section>
  );
}