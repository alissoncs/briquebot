"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { BriquebotMark } from "@/components/BriquebotMark";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden focusable="false">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.47.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden focusable="false">
      <path
        fill="#1877F2"
        d="M18 9a9 9 0 1 0-10.4 8.89v-6.29H5.3V9h2.3V7.02c0-2.27 1.35-3.52 3.42-3.52.99 0 2.02.17 2.02.17v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42V9h2.5l-.4 2.6h-2.1v6.29A9 9 0 0 0 18 9Z"
      />
    </svg>
  );
}

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Mock: sem backend. Um "login" apenas navega para a criação de canal.
  function goToApp() {
    router.push("/canais/novo");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim()) {
      setError("Informe seu e-mail para continuar.");
      return;
    }
    setError("");
    goToApp();
  }

  return (
    <main
      className="grid min-h-screen place-items-center bg-background px-5 py-16 text-foreground"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8">
        <div className="flex flex-col items-center text-center">
          <BriquebotMark size={48} />
          <h1
            className="mt-5 text-2xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Entrar no Briquebot
          </h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Acesse para gerenciar o canal de classificados da sua comunidade.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              E-mail
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="voce@email.com"
                autoComplete="email"
                aria-invalid={error ? true : undefined}
                className="w-full rounded-xl border border-border bg-input-background py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-foreground">
                Senha
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Esqueci minha senha
              </a>
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Sua senha"
                autoComplete="current-password"
                className="w-full rounded-xl border border-border bg-input-background py-3 pl-10 pr-11 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <button
            type="submit"
            className="mt-1 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-bold text-primary-foreground outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            Entrar
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          ou continue com
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={goToApp}
            className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-border bg-secondary px-6 font-semibold text-foreground outline-none transition-colors hover:bg-secondary/70 focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <GoogleIcon />
            Continuar com Google
          </button>
          <button
            type="button"
            onClick={goToApp}
            className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-border bg-secondary px-6 font-semibold text-foreground outline-none transition-colors hover:bg-secondary/70 focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <FacebookIcon />
            Continuar com Facebook
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-muted-foreground">
          Ainda não tem uma conta?{" "}
          <Link
            href="/criar-conta"
            className="font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}

