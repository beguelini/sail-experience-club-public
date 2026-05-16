import Image from "next/image";
import { Heart, Menu, UserRound } from "lucide-react";

const navItems = ["Destinos", "Experiências", "Barcos", "Sobre o clube", "Para empresas"];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#EAEAEA]/80 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#" className="flex items-center" aria-label="Sail Experience Club">
          {/* Replace this placeholder with the final logo file at /public/sail-experience/logo-sail-experience-club.png. Do not recreate the logo in SVG, text or CSS. */}
          <Image
            src="/sail-experience/logo-sail-experience-club.png"
            alt="Sail Experience Club"
            width={190}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#171717] lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-[#FF7E96]">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="inline-flex size-10 items-center justify-center rounded-full border border-[#EAEAEA] text-[#171717] transition hover:border-[#FFD6DF] hover:bg-[#FFF4F7]" aria-label="Favoritos">
            <Heart size={18} />
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] transition hover:text-[#FF7E96]">
            <UserRound size={18} />
            Entrar
          </button>
          <button className="rounded-full bg-[#FFD6DF] px-5 py-3 text-sm font-semibold text-[#171717] shadow-sm transition hover:bg-[#FF9CAF]">
            Quero ser membro
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button className="rounded-full bg-[#FFD6DF] px-4 py-2 text-sm font-semibold text-[#171717]">
            Membro
          </button>
          <button className="inline-flex size-10 items-center justify-center rounded-full border border-[#EAEAEA]" aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
