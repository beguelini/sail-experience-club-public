import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { SearchBar } from "./SearchBar";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden pt-20 md:min-h-[820px]">
      {/* Replace this placeholder with the final real sailboat photo at /public/sail-experience/hero-sail-experience.jpg. The cinematic treatment is CSS-only. */}
      <Image
        src="/sail-experience/hero-sail-experience.jpg"
        alt="Veleiro em uma experiencia premium no mar"
        fill
        priority
        sizes="100vw"
        className="hero-cinematic-image object-cover object-center"
      />
      <div className="hero-sunset-overlay absolute inset-0" />

      <div className="section-shell relative z-10 flex min-h-[620px] items-center pb-28 pt-16 md:pb-36">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium backdrop-blur">
            Marketplace nacional de experiencias no mar
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal md:text-7xl">
            O mar, em qualquer lugar do Brasil.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
            As melhores experiencias nauticas com curadoria premium, em destinos incriveis.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#FFD6DF]">
              Explorar experiencias
              <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18">
              <PlayCircle size={18} />
              Ver como funciona
            </a>
          </div>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}
