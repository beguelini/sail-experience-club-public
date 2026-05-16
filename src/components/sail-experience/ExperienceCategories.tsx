import { ArrowRight } from "lucide-react";
import { experienceCategories } from "@/data/sailExperience";

export function ExperienceCategories() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24" id="experiencias">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7E96]">Experiências</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#0B0B0B] md:text-5xl">
            Encontre a experiência perfeita para você.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {experienceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article key={category.id} className="rounded-[28px] border border-[#EAEAEA] bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)]">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#FFF0F3] text-[#FF7E96]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-[#171717]">{category.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-[#666666]">{category.description}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171717]">
                  Ver experiências
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
