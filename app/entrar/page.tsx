import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesse o Briquebot.io para criar o grupo de classificados da sua comunidade.",
  robots: { index: false },
};

// Placeholder entry point. Social login (Auth.js — Google, depois Facebook)
// entra numa fase posterior; por ora capturamos o interesse (early access) do
// dono de grupo, único público do produto.
export default function EntrarPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-50 px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand text-lg font-black text-white">
          B
        </div>
        <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900">
          Quase lá para criar seu grupo
        </h1>
        <p className="mt-3 leading-relaxed text-slate-600">
          O login com Google está chegando. Estamos abrindo o Briquebot para os primeiros
          grupos agora — deixe seu interesse e a gente te chama assim que liberar.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <ButtonLink href="mailto:contato@briquebot.io?subject=Quero%20acesso%20ao%20Briquebot" size="lg">
            Quero acesso antecipado
          </ButtonLink>
          <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-brand-700">
            Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}
