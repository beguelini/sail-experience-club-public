import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { popularDestinations } from "@/data/sailExperience";

export function PopularDestinations() {
  return (
    <section className="section-shell py-12 md:py-18" id="destinos">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7E96]">Destinos populares</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal text-[#0B0B0B] md:text-5xl">
            Mar brasileiro, com curadoria de ponta a ponta.
          </h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717]">
          Ver todos os destinos
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-5">
        {popularDestinations.map((destination, index) => (
          <article
            key={destination.id}
            className="group relative min-h-[330px] overflow-hidden rounded-[30px] md:col-span-1 md:first:col-span-2"
          >
            <Image
              src={destination.imageUrl}
              alt={`${destination.name}, ${destination.state}`}
              fill
              sizes={index === 0 ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 20vw, 100vw"}
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-sm text-white/78">{destination.state}</p>
              <h3 className="mt-1 text-2xl font-semibold">{destination.name}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">{destination.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
