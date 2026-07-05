"use client";

import {
  Car,
  Gamepad2,
  Hash,
  MessageCircle,
  MoreHorizontal,
  Package,
  Shirt,
  Smartphone,
  Sofa,
} from "lucide-react";
import type { SelectOption } from "@/components/wizard/fields";

// Opções compartilhadas entre o wizard de conta e o de canal para manter
// rótulos e ícones consistentes em todo o fluxo de onboarding.
export const platformOptions: SelectOption[] = [
  {
    value: "discord",
    label: "Discord",
    description: "Bot automatizado no seu servidor",
    icon: <Hash size={22} />,
  },
  {
    value: "whatsapp",
    label: "WhatsApp",
    description: "Publicação semi-automatizada no grupo",
    icon: <MessageCircle size={22} />,
  },
];

export const categoryOptions: SelectOption[] = [
  { value: "games", label: "Games", icon: <Gamepad2 size={22} /> },
  { value: "moda", label: "Moda & Streetwear", icon: <Shirt size={22} /> },
  { value: "colecionaveis", label: "Colecionáveis", icon: <Package size={22} /> },
  { value: "automotivo", label: "Automotivo", icon: <Car size={22} /> },
  { value: "eletronicos", label: "Eletrônicos", icon: <Smartphone size={22} /> },
  { value: "casa", label: "Casa & Decoração", icon: <Sofa size={22} /> },
  { value: "outros", label: "Outros", icon: <MoreHorizontal size={22} /> },
];

export const communitySizeOptions = [
  { value: "ate-500", label: "Até 500 membros" },
  { value: "500-2mil", label: "500 a 2 mil membros" },
  { value: "2mil-10mil", label: "2 mil a 10 mil membros" },
  { value: "10mil+", label: "Mais de 10 mil membros" },
];

export function labelFor(options: { value: string; label: string }[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "—";
}

