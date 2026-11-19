
import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Credits",
  description:
    "Meet the development team behind THE LAST CLEANING by 6 Studio.",
};

const TEAM = [
  {
    name: "Hudson Davie Gacer",
    role: "Programmer",
    description: "Game programming, implementation, and technical development.",
  },
  {
    name: "Princess Rafaela Genobiagon",
    role: "Game Designer & Story Writer",
    description: "Gameplay concepts, story development, and creative direction.",
  },
  {
    name: "Ann Khenna Binangnan",
    role: "3D Artist & Environment Artist",
    description: "Visual environments and 3D asset development.",
  },
  {
    name: "Carlo Cobrado",
    role: "Sound Designer",
    description: "Audio atmosphere and sound design.",
  },
  {
    name: "John Paul Pagaran",
    role: "QA Tester & Playtester",
    description: "Gameplay testing, feedback, and quality assurance.",
  },
  {
    name: "Yev Ordiz",
    role: "UI/UX Designer",
    description: "User interface design and player experience.",
  },
];

const TOOLS = [
  { term: "GAME ENGINE", value: "Unity 6 · Universal Render Pipeline" },
  { term: "WEBSITE", value: "Next.js · React · TypeScript · Tailwind CSS" },
  { term: "EDITOR", value: "Visual Studio Code" },
  { term: "ICONS", value: "Lucide" },
  { term: "HOSTING", value: "Netlify" },
];

export default function CreditsPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Credits"
            title="The people behind the night."
            sub="Meet the team behind THE LAST CLEANING. Six members of 6 Studio worked together to bring this survival horror experience to life."
          />
        </div>
      </section>

      <div className="wrap pb-10">
        {/* STUDIO */}
        <section className="border-t border-line py-12">
          <Reveal>
            <p className="mb-3 text-[11px] tracking-[0.26em] text-blood-2">
              // OUR STUDIO
            </p>

            <h2 className="font-head text-4xl text-blood">
              6 STUDIO
            </h2>

            <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
              An independent game development team behind
              THE LAST CLEANING. United by a shared passion for
              creating immersive horror experiences.
            </p>
          </Reveal>
        </section>

        {/* DEVELOPMENT TEAM */}
        <section className="border-t border-line py-12">
          <Reveal>
            <div className="mb-8">
              <p className="text-[11px] tracking-[0.26em] text-blood-2">
                // CR-01
              </p>

              <h2 className="mt-3 font-head text-2xl text-bone">
                Development team
              </h2>

              <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-bone-dim">
                The six people responsible for bringing the world
                of THE LAST CLEANING to life.
              </p>
            </div>

            <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((member, i) => (
                <article
                  key={member.name}
                  className="flex flex-col bg-coal p-6"
                >
                  <span className="mb-5 text-[10px] tracking-[0.2em] text-blood-2">
                    MEMBER {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-head text-lg text-bone">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[10px] tracking-[0.16em] text-blood-2">
                    {member.role.toUpperCase()}
                  </p>

                  <p className="mt-4 text-[12.5px] leading-relaxed text-bone-dim">
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* TOOLS */}
        <section className="border-t border-line py-12">
          <Reveal>
            <p className="mb-5 text-[11px] tracking-[0.26em] text-blood-2">
              // CR-02
            </p>

            <h2 className="mb-6 font-head text-2xl text-bone">
              Tools and software
            </h2>

            <dl className="max-w-2xl divide-y divide-line border border-line-2 bg-ash">
              {TOOLS.map((tool) => (
                <div
                  key={tool.term}
                  className="flex justify-between gap-6 px-5 py-3 text-xs"
                >
                  <dt className="tracking-[0.16em] text-bone-faint">
                    {tool.term}
                  </dt>

                  <dd className="text-right text-bone">
                    {tool.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ASSET ACKNOWLEDGEMENTS */}
        <section className="border-t border-line py-12">
          <Reveal>
            <p className="mb-5 text-[11px] tracking-[0.26em] text-blood-2">
              // CR-03
            </p>

            <h2 className="font-head text-2xl text-bone">
              Asset acknowledgements
            </h2>

            <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-bone-dim">
              Third-party models, textures, fonts, audio, and other
              external assets are acknowledged according to their
              respective authors and licensing requirements.
            </p>
          </Reveal>
        </section>

        {/* SPECIAL THANKS */}
        <section className="border-t border-line py-12">
          <Reveal>
            <p className="mb-5 text-[11px] tracking-[0.26em] text-blood-2">
              // CR-04
            </p>

            <h2 className="font-head text-2xl text-bone">
              Special thanks
            </h2>

            <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-bone-dim">
              To everyone who supported, tested, provided feedback,
              and helped make THE LAST CLEANING possible.
              Thank you for being part of the journey.
            </p>
          </Reveal>
        </section>
      </div>
    </>
  );
}
