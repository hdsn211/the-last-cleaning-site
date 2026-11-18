// ============================================================
// /credits — fully placeholder-labeled. Real names, licenses
// and acknowledgements are added ONLY when provided.
// ============================================================

import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Credits" };

// The site's own real toolchain — the one fact we can state today.
const TOOLS = [
  { term: "GAME ENGINE", value: "Unity 6 · Universal Render Pipeline" },
  { term: "WEBSITE", value: "Next.js · React · TypeScript · Tailwind CSS" },
  { term: "EDITOR", value: "Visual Studio Code" },
  { term: "ICONS", value: "Lucide (open source, ISC license)" },
  { term: "HOSTING", value: "Netlify" },
];

export default function CreditsPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Credits"
            title="Who made this."
            sub="Every bracketed [PLACEHOLDER] below is waiting for real information — nothing here is invented, and nothing will be listed without its proper license."
          />
        </div>
      </section>

      <div className="wrap pb-10">
        {/* developer */}
        <CreditSection num="CR-01" title="Developer">
          <dl className="max-w-2xl divide-y divide-line border border-line-2 bg-ash">
            <Row term="STUDIO" value="[YOUR STUDIO NAME]" pending />
            <Row term="DEVELOPER" value="[DEVELOPER NAME]" pending />
            <Row term="ROLE" value="Design · Programming · Art · Audio" pending />
            <Row term="CONTACT" value="[CONTACT EMAIL OR FORM — PENDING]" pending />
          </dl>
        </CreditSection>

        {/* tools — the one section with real data */}
        <CreditSection num="CR-02" title="Tools and software">
          <dl className="max-w-2xl divide-y divide-line border border-line-2 bg-ash">
            {TOOLS.map((t) => (
              <Row key={t.term} term={t.term} value={t.value} />
            ))}
          </dl>
        </CreditSection>

        {/* assets */}
        <CreditSection num="CR-03" title="Asset acknowledgements">
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
            Third-party assets used in the game (models, textures, fonts, tools) will be listed
            here with their authors and licenses as final assets are locked.
          </p>
          <PendingRow label="ASSET LIST" note="PENDING — FINALIZED WITH THE RELEASE BUILD" />
        </CreditSection>

        {/* audio */}
        <CreditSection num="CR-04" title="Audio and music">
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
            Music and sound design credits will be published once the audio direction is final.
          </p>
          <PendingRow label="AUDIO CREDITS" note="PENDING — NOTHING TO CREDIT PUBLICLY YET" />
        </CreditSection>

        {/* special thanks */}
        <CreditSection num="CR-05" title="Special thanks">
          <p className="max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
            The people who helped the night happen — playtesters, feedback, and support.
          </p>
          <PendingRow label="THANKS TO" note="PENDING — COMING WITH THE FIRST PUBLIC BUILD" />
        </CreditSection>
      </div>
    </>
  );
}

function CreditSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-12 first:border-t-0">
      <Reveal>
        <div className="mb-5 flex items-center gap-3.5">
          <span className="text-[11px] tracking-[0.26em] text-blood-2">{num}</span>
          <h2 className="font-head text-2xl text-bone">{title}</h2>
        </div>
        {children}
      </Reveal>
    </section>
  );
}

function Row({ term, value, pending = false }: { term: string; value: string; pending?: boolean }) {
  return (
    <div className="flex justify-between gap-6 px-5 py-3 text-xs">
      <dt className="tracking-[0.16em] text-bone-faint">{term}</dt>
      <dd className={`text-right ${pending ? "text-bone-dim" : "text-bone"}`}>{value}</dd>
    </div>
  );
}

function PendingRow({ label, note }: { label: string; note: string }) {
  return (
    <p className="mt-5 max-w-2xl border border-dashed border-line-2 bg-void px-5 py-3.5 text-[11px] tracking-[0.16em] text-bone-faint">
      <span className="text-blood-2">{label}</span> · {note}
    </p>
  );
}