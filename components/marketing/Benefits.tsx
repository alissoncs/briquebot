import { Section, Eyebrow } from "./Section";

const benefits = [
  { title: "Renda sem esforço", body: "Sua comunidade já existe. Agora ela paga as contas — no piloto quase automático." },
  { title: "Zero risco de ban", body: "O Briquebot nunca automatiza seu número. Você continua no controle: monta o post pra você, você envia." },
  { title: "PIX na hora", body: "O pagamento cai via PIX antes do anúncio ir pro ar. Sem cobrança perdida." },
  { title: "Curadoria automática", body: "Só anúncio pago entra na fila. Seu grupo fica limpo e a régua é sua." },
  { title: "Página pública do anúncio", body: "Cada anúncio ganha um link bonito com foto, preço e botão de contato direto no seu WhatsApp." },
  { title: "Você define o preço", body: "R$ 3, R$ 10 ou o que fizer sentido pro seu público. É o seu grupo, é a sua régua." },
];

export function Benefits() {
  return (
    <Section className="bg-slate-50/60">
      <div className="max-w-2xl">
        <Eyebrow>Para o dono do grupo</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Por que vale a pena
        </h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <article key={b.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{b.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
