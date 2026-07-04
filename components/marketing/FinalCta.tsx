import { ButtonLink } from "@/components/ui/Button";
import { Section } from "./Section";
import { cta } from "@/lib/site";

export function FinalCta() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center text-white sm:px-12">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Seu grupo já tem gente. Agora ele pode ter renda.
          </h2>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={cta.primary}
              size="lg"
              className="w-full bg-white text-brand-700 hover:bg-brand-50 sm:w-auto"
            >
              Criar meu grupo grátis
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
