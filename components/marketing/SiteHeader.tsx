import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "./Section";
import { cta, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-slate-900">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-black text-white"
          >
            B
          </span>
          <span className="text-lg tracking-tight">
            {site.name}
            <span className="text-brand">.io</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={cta.login}
            className="hidden px-3 py-2 text-sm font-semibold text-slate-600 hover:text-brand-700 sm:inline-block"
          >
            Entrar
          </Link>
          <ButtonLink href={cta.primary} size="md" className="whitespace-nowrap">
            Criar meu grupo grátis
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
