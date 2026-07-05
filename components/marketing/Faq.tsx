import { Section, Eyebrow } from "./Section";

const faqs = [
  { q: "Preciso instalar alguma coisa?", a: "Não. É tudo pelo navegador e pelo seu WhatsApp de sempre." },
  { q: "Corro risco de ter meu número banido?", a: "Não. O Briquebot nunca automatiza seu WhatsApp. Ele monta o post e você envia — do jeito permitido pela plataforma." },
  { q: "Como o vendedor paga?", a: "Via PIX, na hora, antes do anúncio entrar na sua fila. Processado pela Pagar.me." },
  { q: "Posso definir o preço de cada anúncio?", a: "Sim. Você define o valor por anúncio do seu grupo e muda quando quiser." },
  { q: "Quanto custa pra mim, dono do grupo?", a: "Criar o grupo é grátis. A plataforma fica com uma pequena taxa por anúncio pago." },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
