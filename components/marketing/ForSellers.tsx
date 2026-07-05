import { ButtonLink } from "@/components/ui/Button";
import { Section, Eyebrow } from "./Section";
import { cta } from "@/lib/site";

export function ForSellers() {
  return (
    <Section id="para-vendedores">
      <div className="grid items-center gap-8 rounded-3xl border border-slate-100 bg-brand-50 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Eyebrow>Para vendedores</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Quer anunciar num grupo? É rápido.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Escolha o grupo, monte seu anúncio, pague o PIX e pronto: seu produto vai pro grupo
            com uma página só sua e o botão de contato direto no seu WhatsApp.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <ButtonLink href={cta.seller} variant="secondary" size="lg" className="w-full sm:w-auto">
            Quero anunciar
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
