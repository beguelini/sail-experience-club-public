"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, MapPin, Search, UsersRound } from "lucide-react";
import { searchExperiences } from "@/data/sailExperience";
import type { SearchPayload } from "@/types/sailExperience";

const initialSearch: SearchPayload = {
  destination: "",
  date: "",
  people: "2 adultos"
};

export function SearchBar() {
  const [payload, setPayload] = useState<SearchPayload>(initialSearch);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await searchExperiences(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section-shell absolute inset-x-0 bottom-0 z-20 translate-y-1/2 rounded-[32px] border border-[#EAEAEA] bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.14)]"
      aria-label="Buscar experiencias no mar"
    >
      <div className="grid gap-2 md:grid-cols-[1.15fr_1fr_1fr_auto] md:items-center">
        <label className="flex min-h-20 items-center gap-4 rounded-[24px] px-5 transition focus-within:bg-[#FFF7F9]">
          <MapPin className="shrink-0 text-[#FF9CAF]" size={22} />
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">Destino</span>
            <input
              value={payload.destination}
              onChange={(event) => setPayload((current) => ({ ...current, destination: event.target.value }))}
              placeholder="Para onde vamos?"
              className="w-full bg-transparent text-base font-semibold text-[#171717] outline-none placeholder:text-[#A3A3A3]"
            />
          </span>
        </label>

        <label className="flex min-h-20 items-center gap-4 rounded-[24px] px-5 transition focus-within:bg-[#FFF7F9] md:border-l md:border-[#EAEAEA]">
          <CalendarDays className="shrink-0 text-[#FF9CAF]" size={22} />
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">Data</span>
            <input
              type="text"
              value={payload.date}
              onChange={(event) => setPayload((current) => ({ ...current, date: event.target.value }))}
              placeholder="Selecionar datas"
              className="w-full bg-transparent text-base font-semibold text-[#171717] outline-none placeholder:text-[#A3A3A3]"
            />
          </span>
        </label>

        <label className="flex min-h-20 items-center gap-4 rounded-[24px] px-5 transition focus-within:bg-[#FFF7F9] md:border-l md:border-[#EAEAEA]">
          <UsersRound className="shrink-0 text-[#FF9CAF]" size={22} />
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">Pessoas</span>
            <input
              value={payload.people}
              onChange={(event) => setPayload((current) => ({ ...current, people: event.target.value }))}
              className="w-full bg-transparent text-base font-semibold text-[#171717] outline-none placeholder:text-[#A3A3A3]"
            />
          </span>
        </label>

        <button
          type="submit"
          className="flex min-h-16 items-center justify-center gap-2 rounded-full bg-[#FF9CAF] px-7 text-sm font-semibold text-[#171717] shadow-[0_12px_32px_rgba(255,156,175,0.45)] transition hover:bg-[#FFD6DF] md:size-16 md:px-0"
          aria-label="Buscar experiencias"
        >
          <Search size={22} />
          <span className="md:hidden">Buscar</span>
        </button>
      </div>
    </form>
  );
}
