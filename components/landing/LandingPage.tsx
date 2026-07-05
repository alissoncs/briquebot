"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, Star, Zap, ShieldCheck, TrendingUp, Users, Tag, MessageCircle, ArrowRight, Play, X } from "lucide-react";

const BriquebotLogo = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#00d068" />
    <path d="M8 14C8 11.8 9.8 10 12 10H28C30.2 10 32 11.8 32 14V24C32 26.2 30.2 28 28 28H22L17 33V28H12C9.8 28 8 26.2 8 24V14Z" fill="#061209" />
    <rect x="14" y="17" width="4" height="4" rx="2" fill="#00d068" />
    <rect x="22" y="17" width="4" height="4" rx="2" fill="#00d068" />
    <path d="M15 23.5C16.5 25 23.5 25 25 23.5" stroke="#00d068" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 10V8" stroke="#061209" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="7" r="2" fill="#ffd100" />
  </svg>
);

const steps = [
  {
    num: "01",
    title: "Configure seu canal",
    desc: "Crie e personalize seu canal de classificados — defina a taxa de contribuição por anúncio e pronto.",
    icon: <Tag size={22} />,
  },
  {
    num: "02",
    title: "Membro cria o anúncio",
    desc: "Seu membro envia fotos e detalhes do produto e paga a taxa via PIX em segundos.",
    icon: <Zap size={22} />,
  },
  {
    num: "03",
    title: "Anúncio vai ao ar",
    desc: "O anúncio é publicado no seu canal do WhatsApp com página pública e botão de contato direto.",
    icon: <MessageCircle size={22} />,
  },
];

const features = [
  { icon: <ShieldCheck size={20} />, title: "Curadoria do dono", desc: "Você controla quem anuncia. Nada vai ao ar sem você querer." },
  { icon: <TrendingUp size={20} />, title: "Receita recorrente", desc: "Cada anúncio gera receita passiva. Mais ativo o grupo, mais você ganha." },
  { icon: <Zap size={20} />, title: "PIX automático", desc: "Pagamento instantâneo direto na sua conta. Zero burocracia." },
  { icon: <Users size={20} />, title: "Página pública", desc: "Cada produto tem URL própria. Os membros compartilham, você lucra." },
  { icon: <MessageCircle size={20} />, title: "Link para WhatsApp", desc: "Botão de contato direto com o vendedor. Negociação no 1:1, sem intermediários." },
  { icon: <Star size={20} />, title: "Reputação do grupo", desc: "Anúncios verificados fortalecem a confiança da sua comunidade." },
];

function RevenueCalculator() {
  const [listings, setListings] = useState(20);
  const [fee, setFee] = useState(8);
  const [share, setShare] = useState(70);

  const monthlyRevenue = listings * 4 * fee * (share / 100);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4" style={{ fontFamily: "Figtree, sans-serif" }}>
            Calculadora de ganhos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Quanto o seu grupo<br />pode gerar por mês?
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-muted-foreground" style={{ fontFamily: "Figtree, sans-serif" }}>Anúncios por semana</label>
                <span className="text-primary font-bold text-lg">{listings}</span>
              </div>
              <input
                type="range" min={1} max={100} value={listings}
                onChange={e => setListings(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full appearance-none bg-secondary cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-muted-foreground" style={{ fontFamily: "Figtree, sans-serif" }}>Taxa por anúncio (R$)</label>
                <span className="text-primary font-bold text-lg">R$ {fee}</span>
              </div>
              <input
                type="range" min={2} max={50} value={fee}
                onChange={e => setFee(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full appearance-none bg-secondary cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-muted-foreground" style={{ fontFamily: "Figtree, sans-serif" }}>Sua parte (%)</label>
                <span className="text-primary font-bold text-lg">{share}%</span>
              </div>
              <input
                type="range" min={50} max={90} value={share}
                onChange={e => setShare(Number(e.target.value))}
                className="w-full accent-primary h-1.5 rounded-full appearance-none bg-secondary cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center bg-secondary rounded-xl p-8 space-y-3">
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "Figtree, sans-serif" }}>Renda estimada</p>
            <div className="text-6xl font-extrabold text-primary leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              R$ {monthlyRevenue.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
            </div>
            <p className="text-muted-foreground text-sm" style={{ fontFamily: "Figtree, sans-serif" }}>por mês</p>
            <div className="pt-4 text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "Figtree, sans-serif" }}>
              {listings} anúncios/sem × 4 semanas × R$ {fee} × {share}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppMockup() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4" style={{ fontFamily: "Figtree, sans-serif" }}>
            Exemplo real
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Assim fica no seu<br />canal do WhatsApp
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto" style={{ fontFamily: "Figtree, sans-serif" }}>
            Cada anúncio pago é publicado automaticamente no seu canal, com foto, preço e botão de contato.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Phone frame */}
          <div className="relative w-[340px] rounded-[40px] border-4 border-[#2a3a2e] shadow-2xl shadow-black/60 overflow-hidden"
            style={{ background: "#111b21" }}>

            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1 bg-[#111b21]">
              <span className="text-[10px] text-white font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-2 rounded-sm border border-white/60 relative">
                  <div className="absolute inset-0.5 left-0.5 right-1 bg-white/70 rounded-sm" />
                </div>
              </div>
            </div>

            {/* WhatsApp header */}
            <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: "#1f2c34" }}>
              <div className="w-8 h-8 rounded-full bg-[#00d068] flex items-center justify-center text-[#061209] font-bold text-xs">GV</div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold leading-tight">Grupo Venda & Troca SP 🔥</div>
                <div className="text-[#8696a0] text-[10px]">Canal · 4.832 inscritos</div>
              </div>
              <div className="flex gap-3 text-[#aebac1]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3C16.3 5.8 13.5 3 10.2 3S4 5.8 4 9.7s2.8 6.7 6.2 6.7c1.6 0 3-.6 4.1-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5.3-5.2zm-5.7 0C7.7 14.3 5.5 12 5.5 9.7s2.2-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.6-4.7 4.6z" /></svg>
              </div>
            </div>

            {/* Chat area */}
            <div className="px-3 py-3 space-y-2 min-h-[520px]" style={{ background: "#0b141a", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.015) 1px, transparent 0)", backgroundSize: "20px 20px" }}>

              {/* Date separator */}
              <div className="flex justify-center">
                <span className="text-[10px] text-[#8696a0] bg-[#1f2c34]/80 px-3 py-0.5 rounded-full">HOJE</span>
              </div>

              {/* Announcement message bubble */}
              <div className="bg-[#202c33] rounded-2xl rounded-tl-sm overflow-hidden shadow-md max-w-[295px]">

                {/* Product image */}
                <div className="relative w-full h-44 bg-[#111b21] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=350&fit=crop&auto=format"
                    alt="NVIDIA RTX 4090 GPU"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#00d068] text-[#061209] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Novo anúncio</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#202c33] to-transparent" />
                </div>

                {/* Content */}
                <div className="px-3 pt-2 pb-3 space-y-2">
                  <div className="text-white font-bold text-sm leading-snug">
                    🖥️ NVIDIA RTX 4090 24GB — Pouco uso
                  </div>

                  <div className="text-[#25d366] font-bold text-lg leading-none">
                    R$ 8.900
                  </div>

                  <div className="text-[#8696a0] text-[11px] leading-relaxed">
                    Placa em perfeito estado, caixa original, nota fiscal. Comprada há 8 meses. Ideal pra quem quer entrar no jogo sem pagar preço de loja.
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["Semi-novo", "São Paulo-SP", "Eletrônicos"].map(tag => (
                      <span key={tag} className="text-[9px] bg-[#2a3942] text-[#8696a0] px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>

                  {/* Contact button */}
                  <a href="#" className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold text-[#111b21] mt-1"
                    style={{ background: "#25d366" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Falar com o vendedor
                  </a>

                  {/* Briquebot badge */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <BriquebotLogo size={12} />
                    <span className="text-[9px] text-[#8696a0]">Publicado via Briquebot · Anúncio verificado</span>
                  </div>
                </div>
              </div>

              {/* Timestamp */}
              <div className="text-[9px] text-[#8696a0] pl-1">14:32 ✓✓</div>

              {/* Reaction row */}
              <div className="flex gap-1 pl-1">
                {["🔥 47", "👀 312", "❤️ 23"].map(r => (
                  <span key={r} className="text-[10px] bg-[#2a3942] text-white px-2 py-0.5 rounded-full">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "Figtree, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <BriquebotLogo size={34} />
            <span className="text-xl font-extrabold tracking-tight text-foreground" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              brique<span className="text-primary">bot</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Como funciona", "Funcionalidades", "Ganhos", "Preços"].map(l => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">Entrar</a>
            <a href="/entrar" className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Começar grátis
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-muted-foreground">
            {mobileMenuOpen ? <X size={22} /> : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
            {["Como funciona", "Funcionalidades", "Ganhos", "Preços"].map(l => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-1">{l}</a>
            ))}
            <a href="/entrar" className="block text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-center mt-2">
              Começar grátis
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #00d068 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Novo · Monetize seu grupo agora
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Seu grupo do<br />
              WhatsApp pode<br />
              <span className="text-primary">gerar dinheiro</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Crie um canal de classificados oficial pra sua comunidade. Membros anunciam, pagam via PIX — e você lucra em cada postagem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/entrar" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] text-base">
                Criar meu canal grátis
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-secondary transition-colors text-base">
                <Play size={16} className="text-primary" />
                Ver demonstração
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <div>
                <div className="flex text-accent text-sm">{"★★★★★"}</div>
                <p className="text-xs text-muted-foreground">+2.100 donos de grupo ativos</p>
              </div>
            </div>
          </div>

          {/* Stats panel */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Anúncios publicados", value: "487.320", change: "+12% essa semana" },
                { label: "Receita total gerada", value: "R$ 2,1M", change: "para donos de grupo" },
                { label: "Grupos ativos", value: "2.143", change: "em todo o Brasil" },
                { label: "Tempo médio por anúncio", value: "< 3 min", change: "do PIX ao ar" },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                  <div className="text-2xl font-extrabold text-foreground mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{s.value}</div>
                  <div className="text-xs font-semibold text-foreground mb-1">{s.label}</div>
                  <div className="text-[11px] text-muted-foreground">{s.change}</div>
                </div>
              ))}
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold">Novo anúncio publicado!</div>
                <div className="text-[10px] text-muted-foreground">Grupo Eletrônicos BH · R$ 12 via PIX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos bar */}
      <section className="py-10 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Donos de grupos em todo o Brasil</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Eletrônicos SP", "Moda Feminina RJ", "Carros BH", "Games Brasil", "Casa & Deco", "Esportes PE"].map(name => (
              <span key={name} className="text-sm font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Como funciona</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Três passos.<br />Canal ativo.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl font-extrabold text-primary/20 leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{step.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-muted-foreground/30">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Mockup */}
      <WhatsAppMockup />

      {/* Revenue Calculator */}
      <RevenueCalculator />

      {/* Features */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Funcionalidades</span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Feito para o<br />dono do grupo.<br />
                <span className="text-primary">Do início ao fim.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Você cria a regra, define o preço, aprova os anúncios. O Briquebot cuida do resto — pagamento, publicação e página pública de cada produto.
              </p>
              <a href="/entrar" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                Começar agora <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1.5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Donos de grupo falam</span>
            <h2 className="text-4xl font-extrabold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Comunidade que gera renda.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcos Oliveira",
                role: "Grupo Eletrônicos SP — 8.200 membros",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
                text: "Em dois meses tô tirando R$ 1.800 por mês só com os anúncios do grupo. Nunca imaginei que minha comunidade ia virar fonte de renda assim.",
              },
              {
                name: "Camila Freitas",
                role: "Moda Feminina RJ — 15.400 membros",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
                text: "O pessoal ama porque os anúncios ficam organizados e bonitos. Parece coisa profissional. E eu recebo via PIX na hora.",
              },
              {
                name: "Rafael Cunha",
                role: "Carros & Motos BH — 22.000 membros",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
                text: "Antes o grupo era um caos de anúncio. Agora é canal profissional. Todo mundo paga, ninguém reclama — porque vende de verdade.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <div className="flex text-accent text-sm">{"★★★★★"}</div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border-2 border-border" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Planos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Simples e transparente.
            </h2>
            <p className="mt-4 text-muted-foreground">Comece grátis. Só pagamos quando você ganha.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Starter",
                price: "Grátis",
                period: "",
                highlight: false,
                description: "Para começar a monetizar seu grupo agora.",
                features: ["1 canal de classificados", "Até 50 anúncios/mês", "Pagamento via PIX automático", "Página pública por anúncio", "75% da taxa para você"],
                cta: "Começar grátis",
              },
              {
                name: "Pro",
                price: "R$ 49",
                period: "/mês",
                highlight: true,
                description: "Para grupos grandes que querem máxima receita.",
                features: ["Canais ilimitados", "Anúncios ilimitados", "85% da taxa para você", "Métricas e relatórios", "Suporte prioritário", "Domínio personalizado"],
                cta: "Assinar Pro",
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl border p-8 space-y-6 ${plan.highlight ? "border-primary bg-primary/5 relative overflow-hidden" : "border-border bg-card"}`}>
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Mais popular
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{plan.price}</span>
                    <span className="text-muted-foreground pb-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle size={15} className="text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="/entrar" className={`block text-center font-bold py-3 rounded-xl transition-all text-sm ${plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary text-primary hover:bg-primary/10"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-border rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, #00d068 0%, transparent 70%)" }} />
            <div className="relative z-10 space-y-6">
              <BriquebotLogo size={52} />
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Seu grupo já tem<br />
                <span className="text-primary">valor. Monetize.</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Junte-se a mais de 2.100 donos de grupo que estão transformando comunidade em renda com o Briquebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/entrar" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] text-base">
                  Criar meu canal grátis
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="text-xs text-muted-foreground">Sem cartão de crédito. Comece em menos de 5 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <BriquebotLogo size={28} />
                <span className="font-extrabold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  brique<span className="text-primary">bot</span>
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Classificados para grupos do WhatsApp. Feito no Brasil 🇧🇷
              </p>
            </div>

            {[
              { title: "Produto", links: ["Como funciona", "Funcionalidades", "Preços", "Changelog"] },
              { title: "Suporte", links: ["Central de ajuda", "WhatsApp", "Status", "Contato"] },
              { title: "Empresa", links: ["Sobre nós", "Blog", "Termos", "Privacidade"] },
            ].map(col => (
              <div key={col.title}>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2025 Briquebot. Todos os direitos reservados.</p>
            <p className="text-xs text-muted-foreground">CNPJ 00.000.000/0001-00 · São Paulo, Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
