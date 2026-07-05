"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipboardCheck, Mail, User, Users } from "lucide-react";
import { WizardShell, type WizardStep } from "@/components/wizard/WizardShell";
import { SelectCards, SelectField, TextField } from "@/components/wizard/fields";
import {
  categoryOptions,
  communitySizeOptions,
  labelFor,
  platformOptions,
} from "@/components/wizard/options";

const steps: WizardStep[] = [
  { title: "Seus dados", icon: <User size={18} /> },
  { title: "Sua comunidade", icon: <Users size={18} /> },
  { title: "Revisão", icon: <ClipboardCheck size={18} /> },
];

const nicheOptions = categoryOptions.map(({ value, label }) => ({ value, label }));

export function AccountWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [communityName, setCommunityName] = useState("");
  const [platform, setPlatform] = useState("");
  const [niche, setNiche] = useState("");
  const [size, setSize] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const canProceed = (() => {
    if (step === 0) {
      return (
        name.trim() !== "" &&
        email.trim() !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        !passwordsMismatch
      );
    }
    if (step === 1) {
      return (
        communityName.trim() !== "" && platform !== "" && niche !== "" && size !== ""
      );
    }
    return acceptedTerms;
  })();

  function handleNext() {
    if (!canProceed) return;
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    // Mock: sem backend. Conclui indo para a configuração do primeiro canal.
    router.push("/canais/novo");
  }

  function handleBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  return (
    <WizardShell
      steps={steps}
      currentStep={step}
      onBack={handleBack}
      onNext={handleNext}
      canProceed={canProceed}
      isLast={step === steps.length - 1}
      title={steps[step].title}
      subtitle={
        step === 0
          ? "Crie sua conta de dono de comunidade."
          : step === 1
            ? "Conte um pouco sobre a comunidade que você administra."
            : "Confira os dados antes de criar sua conta."
      }
    >
      {step === 0 ? (
        <>
          <TextField
            id="name"
            label="Nome completo"
            value={name}
            onChange={setName}
            placeholder="Como você se chama"
            icon={<User size={18} />}
            autoComplete="name"
          />
          <TextField
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="voce@email.com"
            icon={<Mail size={18} />}
            autoComplete="email"
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Crie uma senha"
            autoComplete="new-password"
          />
          <TextField
            id="confirm-password"
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Repita a senha"
            autoComplete="new-password"
            error={passwordsMismatch ? "As senhas não coincidem." : undefined}
          />
        </>
      ) : null}

      {step === 1 ? (
        <>
          <TextField
            id="community-name"
            label="Nome da comunidade"
            value={communityName}
            onChange={setCommunityName}
            placeholder="Ex.: Brique dos Games SP"
            icon={<Users size={18} />}
          />
          <SelectCards
            name="account-platform"
            label="Plataforma"
            options={platformOptions}
            value={platform}
            onChange={setPlatform}
          />
          <SelectField
            id="niche"
            label="Nicho da comunidade"
            value={niche}
            onChange={setNiche}
            options={[{ value: "", label: "Selecione um nicho" }, ...nicheOptions]}
          />
          <SelectField
            id="community-size"
            label="Tamanho aproximado da comunidade"
            value={size}
            onChange={setSize}
            options={[{ value: "", label: "Selecione um tamanho" }, ...communitySizeOptions]}
          />
        </>
      ) : null}

      {step === 2 ? (
        <>
          <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
            <SummaryRow label="Nome" value={name || "—"} />
            <SummaryRow label="E-mail" value={email || "—"} />
            <SummaryRow label="Comunidade" value={communityName || "—"} />
            <SummaryRow label="Plataforma" value={labelFor(platformOptions, platform)} />
            <SummaryRow label="Nicho" value={labelFor(nicheOptions, niche)} />
            <SummaryRow label="Tamanho" value={labelFor(communitySizeOptions, size)} />
          </dl>
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-input-background p-4">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 accent-primary"
            />
            <span className="text-sm text-foreground">
              Li e aceito os{" "}
              <a href="#" className="font-semibold text-primary hover:text-primary/80">
                Termos de Uso
              </a>{" "}
              do Briquebot.
            </span>
          </label>
        </>
      ) : null}
    </WizardShell>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-input-background px-4 py-3">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold text-foreground">{value}</dd>
    </div>
  );
}

