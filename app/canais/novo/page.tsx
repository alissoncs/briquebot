import type { Metadata } from "next";
import { ChannelWizard } from "@/components/wizard/ChannelWizard";

export const metadata: Metadata = {
  title: "Novo canal",
  description: "Configure o canal de classificados da sua comunidade no Briquebot.",
  robots: { index: false },
};

export default function NovoCanalPage() {
  return <ChannelWizard />;
}
