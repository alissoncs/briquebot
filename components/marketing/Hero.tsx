import { ButtonLink } from "@/components/ui/Button";
import { Container } from "./Section";
import { cta } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Seu grupo de WhatsApp vale dinheiro.{" "}
              <span className="text-brand">Comece a receber por isso.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              O Briquebot deixa você cobrar por cada anúncio postado no seu grupo —
              pagamento na hora via PIX, aprovação com um toque e zero risco de
              banimento. Você cuida da comunidade; a gente cuida da grana.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={cta.primary} size="lg" className="w-full sm:w-auto">
                Criar meu grupo grátis
              </ButtonLink>
              <ButtonLink href="#como-funciona" variant="ghost" size="lg" className="w-full sm:w-auto">
                Ver como funciona
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Sem contrato · sem mensalidade · você define o preço.
            </p>
          </div>

          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}

// Visual proof of the "post pronto + botão enviar" — the semi-automated
// differentiator the spec says must be seen, not just read.
function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl">
        <div className="rounded-[1.4rem] bg-slate-50 p-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-whatsapp text-white">✓</span>
            <div>
              <p className="text-sm font-bold text-slate-800">Fila do Briquebot</p>
              <p className="text-xs text-slate-500">1 anúncio pago · pronto pra postar</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
            <div className="h-24 rounded-lg bg-gradient-to-br from-brand-100 to-accent-soft" />
            <p className="mt-2 text-sm font-bold text-slate-800">Bike aro 29 — seminova</p>
            <p className="text-sm text-slate-500">R$ 1.200 · pago via PIX</p>
          </div>
          <button
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-2.5 text-sm font-bold text-white"
            tabIndex={-1}
            aria-hidden
          >
            Enviar para o WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

