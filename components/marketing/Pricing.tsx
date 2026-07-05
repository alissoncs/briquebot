import { Section, Eyebrow } from "./Section";

export function Pricing() {
  return (
    <Section id="preco" className="bg-slate-50/60">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Preço e modelo</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Sem mensalidade. A gente só ganha quando você ganha.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Criar seu grupo é grátis. O Briquebot fica com uma pequena taxa por anúncio pago —
          o resto é seu. Sem plano, sem fidelidade, sem surpresa.
        </p>
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-slate-200 bg-white px-8 py-6 text-left shadow-sm">
          <div>
            <p className="text-sm text-slate-500">Criar grupo</p>
            <p className="text-2xl font-extrabold text-slate-900">Grátis</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 sm:block" />
          <div>
            <p className="text-sm text-slate-500">Por anúncio pago</p>
            <p className="text-2xl font-extrabold text-brand">Pequena taxa</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
