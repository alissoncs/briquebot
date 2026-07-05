// Marca "B" reutilizada do fluxo de entrada — mantém a identidade visual
// consistente entre a home, o login e os wizards. Sem hooks: pode ser usada
// em server e client components.
export function BriquebotMark({ size = 48 }: { size?: number }) {
  return (
    <div
      className="grid place-items-center rounded-xl bg-primary font-black text-primary-foreground"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.42) }}
      aria-hidden
    >
      B
    </div>
  );
}

