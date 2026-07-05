import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesse o Briquebot.io para criar o grupo de classificados da sua comunidade.",
  robots: { index: false },
};

// Placeholder entry point. Social login (Auth.js — Google, depois Facebook)
// entra numa fase posterior; por ora capturamos o interesse (early access) do
// dono de grupo, único público do produto. O parâmetro `intent` permite ajustar
// o assunto do contato conforme o CTA de origem.
export default function EntrarPage({
  searchParams,
}: {
  searchParams?: { intent?: string };
}) {
  const intent = searchParams?.intent;
  const subject = intent
    ? `Quero acesso ao Briquebot (${intent})`
    : "Quero acesso ao Briquebot";

  return (
    <main
      className="grid min-h-screen place-items-center bg-background px-5 py-16 text-foreground"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
          B
        </div>
        <h1
          className="mt-5 text-2xl font-extrabold tracking-tight text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Quase lá para criar seu canal
        </h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          O login com Google está chegando. Estamos abrindo o Briquebot para os primeiros
          grupos agora — deixe seu interesse e a gente te chama assim que liberar.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`mailto:contato@briquebot.io?subject=${encodeURIComponent(subject)}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Quero acesso antecipado
          </a>
          <Link
            href="/"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}
