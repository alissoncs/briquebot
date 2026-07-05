import { Section } from "./Section";

export function Trust() {
  return (
    <Section id="seguranca">
      <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-whatsapp/15 px-3 py-1 text-sm font-semibold text-whatsapp">
              Sem robô no seu número
            </span>
            <span className="rounded-full bg-pix/15 px-3 py-1 text-sm font-semibold text-pix">
              PIX via Pagar.me
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Seguro pro seu número. Seguro pro seu bolso.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Nada de robô postando no seu lugar. O Briquebot prepara o anúncio e você envia
            pelo próprio WhatsApp — do jeito que a plataforma permite, sem risco de bloqueio.
            E o dinheiro? Pagamento via PIX processado pela Pagar.me, uma das maiores do Brasil.
          </p>
        </div>
      </div>
    </Section>
  );
}
