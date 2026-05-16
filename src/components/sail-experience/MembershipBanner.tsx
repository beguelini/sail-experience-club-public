import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { enterpriseHighlights, membershipBenefits } from "@/data/sailExperience";

export function MembershipBanner() {
  return (
    <section className="section-shell py-16 md:py-24" id="clube">
      <div className="grid overflow-hidden rounded-[36px] border border-[#F4D9DF] bg-[#FFD6DF] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-white text-[#FF7E96]">
            <Sparkles size={23} />
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#0B0B0B] md:text-5xl">
            Seja membro e viva o mar com mais benefícios.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {membershipBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-semibold text-[#171717]">
                <span className="flex size-7 items-center justify-center rounded-full bg-white">
                  <Check size={15} />
                </span>
                {benefit}
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="inline-flex justify-center rounded-full bg-[#0B0B0B] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#171717]">
              Quero ser membro
            </a>
            <a href="#" className="inline-flex justify-center rounded-full bg-white/70 px-6 py-4 text-sm font-semibold text-[#171717] transition hover:bg-white">
              Para empresas
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1400&q=85"
            alt="Experiência náutica premium para membros"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#FFD6DF] lg:via-transparent lg:to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-[28px] border border-white/24 bg-white/18 p-4 text-white backdrop-blur md:grid-cols-3">
            {enterpriseHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-2 text-sm font-semibold">
                  <Icon size={17} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
