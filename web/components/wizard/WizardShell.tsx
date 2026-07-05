"use client";

import type { ReactNode } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { BriquebotMark } from "@/components/BriquebotMark";

export type WizardStep = {
  title: string;
  icon: ReactNode;
};

type WizardShellProps = {
  steps: WizardStep[];
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  children: ReactNode;
  canProceed: boolean;
  nextLabel?: string;
  isLast?: boolean;
  title: string;
  subtitle?: string;
};

export function WizardShell({
  steps,
  currentStep,
  onBack,
  onNext,
  children,
  canProceed,
  nextLabel,
  isLast = false,
  title,
  subtitle,
}: WizardShellProps) {
  const total = steps.length;
  const progress = Math.round(((currentStep + 1) / total) * 100);
  const resolvedNextLabel = nextLabel ?? (isLast ? "Concluir" : "Avançar");

  return (
    <main
      className="min-h-screen bg-background px-5 py-16 text-foreground"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 flex items-center gap-3">
          <BriquebotMark size={40} />
          <span
            className="text-lg font-extrabold tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Briquebot
          </span>
        </div>

        {/* Barra de progresso */}
        <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Etapa {currentStep + 1} de {total}
          </span>
          <span>{progress}%</span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Progresso: etapa ${currentStep + 1} de ${total}`}
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Indicador de etapas */}
        <ol className="mt-6 flex items-center gap-2 overflow-x-auto pb-1">
          {steps.map((step, index) => {
            const isDone = index < currentStep;
            const isCurrent = index === currentStep;
            return (
              <li key={step.title} className="flex min-w-0 flex-1 items-center gap-2">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                    isCurrent
                      ? "border-primary bg-primary text-primary-foreground"
                      : isDone
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {isDone ? <Check size={18} /> : step.icon}
                </span>
                <span
                  className={`hidden truncate text-sm sm:block ${
                    isCurrent ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
                {index < total - 1 ? (
                  <span className="mx-1 hidden h-px flex-1 bg-border sm:block" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ol>

        {/* Cartão da etapa */}
        <div className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h1
            className="text-2xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 leading-relaxed text-muted-foreground">{subtitle}</p>
          ) : null}

          <div className="mt-6 flex flex-col gap-5">{children}</div>

          <div className="mt-8 flex items-center gap-3">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-5 font-bold text-foreground outline-none transition-colors hover:bg-secondary/70 focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <ArrowLeft size={18} />
                Voltar
              </button>
            ) : null}
            <button
              type="button"
              onClick={onNext}
              disabled={!canProceed}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-bold text-primary-foreground outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/60 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {resolvedNextLabel}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

