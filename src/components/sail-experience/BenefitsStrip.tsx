import { benefits } from "@/data/sailExperience";

export function BenefitsStrip() {
  return (
    <section className="section-shell pb-10 pt-32 md:pb-16 md:pt-36" aria-label="Benefícios">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div key={benefit.id} className="flex items-start gap-4 rounded-[24px] border border-[#EAEAEA] bg-white p-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3] text-[#FF7E96]">
                <Icon size={21} />
              </span>
              <div>
                <h2 className="text-base font-semibold text-[#171717]">{benefit.title}</h2>
                <p className="mt-1 text-sm leading-6 text-[#666666]">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
