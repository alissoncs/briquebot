import { Section, Eyebrow } from "./Section";

const steps = [
  {
    n: "1",
    title: "Cadastre seu grupo",
    body: "Defina o preço por anúncio em segundos. Sem contrato, sem mensalidade.",
  },
  {
    n: "2",
    title: "Receba anúncios já pagos",
    body: "O vendedor monta o anúncio e paga via PIX. Só entra na sua fila o que já foi pago — nada de calote.",
  },
  {
    n: "3",
    title: "Poste com um toque",
    body: "O Briquebot monta o post pronto, com foto, preço e link curto. Você toca em «Enviar para o WhatsApp» e pronto.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <div className="max-w-2xl">
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Do cadastro ao post: 3 passos
        </h2>
      </div>
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-lg font-black text-white">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
