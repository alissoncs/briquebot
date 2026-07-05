import { Section } from "./Section";

// NOTE: no invented metrics. Until real traction exists, this block uses a
// beta framing ("primeiros grupos entrando agora") per the spec.
const communities = ["Bike & Trilha", "Brechó de Luxo", "Colecionáveis", "Automotivo", "Moda Fitness"];

export function SocialProof() {
  return (
    <Section className="border-y border-slate-100 bg-slate-50/60 !py-12">
      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Comunidades de verdade já estão no Briquebot
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">
          De rodas de bike a brechó de luxo — cada grupo com seu preço e suas regras.
          Os primeiros grupos estão entrando agora.
        </p>
      </div>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {communities.map((name) => (
          <li
            key={name}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
