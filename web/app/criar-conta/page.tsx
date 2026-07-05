import type { Metadata } from "next";
import { AccountWizard } from "@/components/wizard/AccountWizard";

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Crie sua conta de dono de comunidade no Briquebot.",
  robots: { index: false },
};

export default function CriarContaPage() {
  return <AccountWizard />;
}
