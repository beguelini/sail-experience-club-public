import { Anchor, BadgeCheck, BriefcaseBusiness, Compass, Crown, Fish, HeartHandshake, LifeBuoy, Sailboat, ShieldCheck, Sparkles, Umbrella } from "lucide-react";
import type { Benefit, Destination, ExperienceCategory, SearchPayload } from "@/types/sailExperience";

export const popularDestinations: Destination[] = [
  {
    id: "angra-dos-reis",
    name: "Angra dos Reis",
    state: "Rio de Janeiro",
    imageUrl: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=85",
    description: "Ilhas preservadas, aguas calmas e roteiros de alto padrao."
  },
  {
    id: "ilha-grande",
    name: "Ilha Grande",
    state: "Rio de Janeiro",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    description: "Baias escondidas e travessias para dias inteiros no mar."
  },
  {
    id: "fernando-de-noronha",
    name: "Fernando de Noronha",
    state: "Pernambuco",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    description: "Experiencias exclusivas em um dos destinos mais desejados do Brasil."
  },
  {
    id: "buzios",
    name: "Buzios",
    state: "Rio de Janeiro",
    imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    description: "Mar azul, enseadas elegantes e passeios sob medida."
  },
  {
    id: "salvador",
    name: "Salvador",
    state: "Bahia",
    imageUrl: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&w=1200&q=85",
    description: "Baia de Todos-os-Santos com curadoria, conforto e cultura."
  }
];

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "vela",
    title: "Vela",
    description: "Navegacoes com skipper, por do sol e rotas costeiras selecionadas.",
    icon: Sailboat
  },
  {
    id: "passeios-de-lancha",
    title: "Passeios de Lancha",
    description: "Dias no mar com conforto, roteiro flexivel e paradas especiais.",
    icon: Anchor
  },
  {
    id: "pesca-esportiva",
    title: "Pesca Esportiva",
    description: "Saidas guiadas para grupos que buscam tecnica, emocao e seguranca.",
    icon: Fish
  },
  {
    id: "dia-de-praia",
    title: "Dia de Praia",
    description: "Experiencias leves para relaxar, nadar e aproveitar praias acessiveis pelo mar.",
    icon: Umbrella
  },
  {
    id: "experiencias-exclusivas",
    title: "Experiencias Exclusivas",
    description: "Roteiros privativos, celebracoes e momentos desenhados sob medida.",
    icon: Sparkles
  }
];

export const benefits: Benefit[] = [
  {
    id: "curadoria-premium",
    title: "Curadoria Premium",
    description: "Operadores, rotas e experiencias avaliadas com cuidado.",
    icon: BadgeCheck
  },
  {
    id: "membros-tem-mais",
    title: "Membros tem mais",
    description: "Beneficios, convites e condicoes especiais para o clube.",
    icon: Crown
  },
  {
    id: "seguranca-em-primeiro",
    title: "Seguranca em primeiro",
    description: "Criterios claros para embarcacoes, tripulacao e operacao.",
    icon: ShieldCheck
  },
  {
    id: "suporte-dedicado",
    title: "Suporte dedicado",
    description: "Acompanhamento humano antes, durante e depois da experiencia.",
    icon: LifeBuoy
  }
];

export const membershipBenefits = [
  "Descontos exclusivos",
  "Experiencias unicas",
  "Atendimento prioritario",
  "Convites para eventos"
];

export const seenInLogos = ["BOAT International", "NAUTICA", "Skipper", "Yacht Style", "destino luxo", "MUNDO MAR"];

export async function searchExperiences(payload: SearchPayload) {
  // Backend hook: replace this placeholder with an API call when search is available.
  console.log("Search experiences payload", payload);
  return Promise.resolve([]);
}

export const enterpriseHighlights = [
  {
    label: "Eventos corporativos",
    icon: BriefcaseBusiness
  },
  {
    label: "Roteiros nacionais",
    icon: Compass
  },
  {
    label: "Atendimento dedicado",
    icon: HeartHandshake
  }
];
