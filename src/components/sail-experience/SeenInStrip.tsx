import { seenInLogos } from "@/data/sailExperience";

export function SeenInStrip() {
  return (
    <section className="border-y border-[#EAEAEA] bg-white py-10" aria-label="Visto em">
      <div className="section-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#666666]">Visto em</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#171717]/58 md:gap-x-12">
          {seenInLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
