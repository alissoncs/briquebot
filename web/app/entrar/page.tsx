import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesse o Briquebot para gerenciar o canal de classificados da sua comunidade.",
  robots: { index: false },
};

export default function EntrarPage() {
  return <LoginForm />;
}
