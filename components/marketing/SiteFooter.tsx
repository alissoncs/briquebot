import Link from "next/link";
import { Container } from "./Section";
import { cta, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-extrabold text-slate-900">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-xs font-black text-white">
            B
          </span>
          {site.name}<span className="text-brand">.io</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="#como-funciona" className="hover:text-brand-700">Como funciona</Link>
          <Link href="#preco" className="hover:text-brand-700">Preço</Link>
          <Link href="#faq" className="hover:text-brand-700">FAQ</Link>
          <Link href={cta.login} className="hover:text-brand-700">Entrar</Link>
        </nav>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {site.name}.io
        </p>
      </Container>
    </footer>
  );
}
