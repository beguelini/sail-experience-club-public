import type { LucideIcon } from "lucide-react";

export type Destination = {
  id: string;
  name: string;
  state: string;
  imageUrl: string;
  description: string;
};

export type ExperienceCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SearchPayload = {
  destination: string;
  date: string;
  people: string;
};
