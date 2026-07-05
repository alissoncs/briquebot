"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeDollarSign,
  CheckCircle,
  Eye,
  Hash,
  ShieldCheck,
} from "lucide-react";
import { WizardShell, type WizardStep } from "@/components/wizard/WizardShell";
import {
  SelectCards,
  TextArea,
  TextField,
  Toggle,
} from "@/components/wizard/fields";
import { BriquebotMark } from "@/components/BriquebotMark";
import {
  categoryOptions,
  labelFor,
  platformOptions,
} from "@/components/wizard/options";

const steps: WizardStep[] = [
  { title: "Identidade", icon: <Hash size={18} /> },
  { title: "Preço e regras", icon: <BadgeDollarSign size={18} /> },
  { title: "Moderação", icon: <ShieldCheck size={18} /> },
  { title: "Resumo", icon: <Eye size={18} /> },
];

const pricePresets = [2, 5, 10, 20];

const durationOptions = [
  { value: "7", label: "7 dias", description: "Rotatividade rápida" },
  { value: "15", label: "15 dias", description: "Equilíbrio" },
  { value: "30", label: "30 dias", description: "Máxima exposição" },
];

const subtitles = [
  "Como sua comunidade vai reconhecer o canal.",
  "Defina a contribuição por anúncio e as regras de publicação.",
  "Escolha como os anúncios são revisados e o que é permitido.",
  "Revise tudo antes de criar seu canal.",
];

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}


export function ChannelWizard() {
  const [step, setStep] = useState(0);
  const [created, setCreated] = useState(false);

  // Etapa 1 — Identidade
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [category, setCategory] = useState("");

  // Etapa 2 — Preço e regras
  const [contribution, setContribution] = useState("5");
  const [ownerSplit, setOwnerSplit] = useState(70);
  const [duration, setDuration] = useState("15");
  const [activeLimit, setActiveLimit] = useState("3");

  // Etapa 3 — Moderação
  const [approveBeforePublish, setApproveBeforePublish] = useState(true);
  const [allowPhotos, setAllowPhotos] = useState(true);
  const [allowEditAfter, setAllowEditAfter] = useState(false);
  const [requireWhatsapp, setRequireWhatsapp] = useState(true);
  const [rules, setRules] = useState("");

  const contributionValue = Number(contribution.replace(",", "."));
  const contributionValid = Number.isFinite(contributionValue) && contributionValue > 0;

  const canProceed = (() => {
    if (step === 0) {
      return channelName.trim() !== "" && platform !== "" && category !== "";
    }
    if (step === 1) {
      return contributionValid && duration !== "" && Number(activeLimit) >= 1;
    }
    return true;
  })();

  function handleNext() {
    if (!canProceed) return;
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    // Mock: sem backend. "Criar canal" apenas exibe a tela de sucesso.
    setCreated(true);
  }

  function handleBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  if (created) {
    return (
      <SuccessScreen
        channelName={channelName || "Seu canal"}
        platformLabel={labelFor(platformOptions, platform)}
        categoryLabel={labelFor(categoryOptions, category)}
        contribution={formatBRL(contributionValid ? contributionValue : 0)}
      />
    );
  }

  const ownerShare = formatBRL((contributionValid ? contributionValue : 0) * (ownerSplit / 100));

  return (
    <WizardShell
      steps={steps}
      currentStep={step}
      onBack={handleBack}
      onNext={handleNext}
      canProceed={canProceed}
      isLast={step === steps.length - 1}
      nextLabel={step === steps.length - 1 ? "Criar canal" : undefined}
      title={steps[step].title}
      subtitle={subtitles[step]}
    >
      {step === 0 ? (
        <>
          <TextField
            id="channel-name"
            label="Nome do canal"
            value={channelName}
            onChange={setChannelName}
            placeholder="Ex.: Classificados Games SP"
            icon={<Hash size={18} />}
          />
          <TextField
            id="channel-description"
            label="Descrição curta"
            value={description}
            onChange={setDescription}
            placeholder="Ex.: Compra e venda de games e acessórios"
          />
          <SelectCards
            name="channel-platform"
            label="Plataforma"
            options={platformOptions}
            value={platform}
            onChange={setPlatform}
          />
          <SelectCards
            name="channel-category"
            label="Categoria"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            columns={3}
          />
        </>
      ) : null}

      {step === 1 ? (
        <>
          <div className="flex flex-col gap-2">
            <TextField
              id="contribution"
              label="Contribuição por anúncio"
              type="number"
              value={contribution}
              onChange={setContribution}
              prefix="R$"
              min={1}
              inputMode="decimal"
              placeholder="5"
              error={
                contribution !== "" && !contributionValid
                  ? "Informe um valor maior que zero."
                  : undefined
              }
            />
            <div className="flex flex-wrap gap-2">
              {pricePresets.map((preset) => {
                const active = contributionValue === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setContribution(String(preset))}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60 ${
                      active
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-secondary text-foreground hover:border-primary/50"
                    }`}
                  >
                    R$ {preset}
                  </button>
                );
              })}
            </div>
          </div>

          <SliderField
            id="owner-split"
            label="% que o dono do grupo recebe"
            value={ownerSplit}
            onChange={setOwnerSplit}
            hint={`Você recebe ${ownerSplit}% — ${ownerShare} por anúncio`}
          />

          <SelectCards
            name="channel-duration"
            label="Duração do anúncio"
            options={durationOptions}
            value={duration}
            onChange={setDuration}
            columns={3}
          />

          <TextField
            id="active-limit"
            label="Limite de anúncios ativos por membro"
            type="number"
            value={activeLimit}
            onChange={setActiveLimit}
            min={1}
            inputMode="numeric"
          />
        </>
      ) : null}

      {step === 2 ? (
        <>
          <Toggle
            id="approve-before"
            label="Aprovar anúncios antes de publicar"
            description="Você revisa cada anúncio antes de ir ao ar."
            checked={approveBeforePublish}
            onChange={setApproveBeforePublish}
          />
          <Toggle
            id="allow-photos"
            label="Permitir fotos nos anúncios"
            description="Membros podem anexar imagens do produto."
            checked={allowPhotos}
            onChange={setAllowPhotos}
          />
          <Toggle
            id="allow-edit"
            label="Permitir edição após publicação"
            description="Anúncios podem ser editados depois de publicados."
            checked={allowEditAfter}
            onChange={setAllowEditAfter}
          />
          <Toggle
            id="require-whatsapp"
            label="Exigir contato via WhatsApp"
            description="Compradores falam com o vendedor pelo WhatsApp."
            checked={requireWhatsapp}
            onChange={setRequireWhatsapp}
          />
          <TextArea
            id="channel-rules"
            label="Regras do canal"
            value={rules}
            onChange={setRules}
            placeholder="Ex.: Proibido anúncio de réplicas. Apenas produtos da categoria do canal."
            optional
          />
        </>
      ) : null}

      {step === 3 ? (
        <ChannelPreview
          channelName={channelName}
          description={description}
          platformLabel={labelFor(platformOptions, platform)}
          categoryLabel={labelFor(categoryOptions, category)}
          contribution={formatBRL(contributionValid ? contributionValue : 0)}
          durationLabel={labelFor(durationOptions, duration)}
          ownerSplit={ownerSplit}
          ownerShare={ownerShare}
          rules={rules}
        />
      ) : null}
    </WizardShell>
  );
}

type SliderFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
};

function SliderField({ id, label, value, onChange, hint }: SliderFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-semibold text-foreground">
          {label}
        </label>
        <span className="font-bold text-primary">{value}%</span>
      </div>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
      />
      {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

type ChannelPreviewProps = {
  channelName: string;
  description: string;
  platformLabel: string;
  categoryLabel: string;
  contribution: string;
  durationLabel: string;
  ownerSplit: number;
  ownerShare: string;
  rules: string;
};

function ChannelPreview({
  channelName,
  description,
  platformLabel,
  categoryLabel,
  contribution,
  durationLabel,
  ownerSplit,
  ownerShare,
  rules,
}: ChannelPreviewProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
          <Hash size={22} />
        </div>
        <div className="min-w-0">
          <h2
            className="truncate text-lg font-extrabold"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {channelName || "Seu canal"}
          </h2>
          {description ? (
            <p className="truncate text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3">
        <PreviewStat label="Plataforma" value={platformLabel} />
        <PreviewStat label="Categoria" value={categoryLabel} />
        <PreviewStat label="Contribuição / anúncio" value={contribution} />
        <PreviewStat label="Duração" value={durationLabel} />
        <PreviewStat label="Split do dono" value={`${ownerSplit}% · ${ownerShare}`} />
      </dl>

      {rules.trim() ? (
        <div className="mt-4 rounded-xl border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Regras do canal
          </p>
          <p className="mt-1 whitespace-pre-line text-sm text-foreground">{rules}</p>
        </div>
      ) : null}
    </div>
  );
}

function PreviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 font-semibold text-foreground">{value}</dd>
    </div>
  );
}

type SuccessScreenProps = {
  channelName: string;
  platformLabel: string;
  categoryLabel: string;
  contribution: string;
};

function SuccessScreen({
  channelName,
  platformLabel,
  categoryLabel,
  contribution,
}: SuccessScreenProps) {
  return (
    <main
      className="grid min-h-screen place-items-center bg-background px-5 py-16 text-foreground"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex items-center justify-center">
          <BriquebotMark size={40} />
        </div>
        <div className="mx-auto mt-6 grid h-20 w-20 place-items-center rounded-full bg-primary/15 text-primary">
          <CheckCircle size={44} />
        </div>
        <h1
          className="mt-5 text-2xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Canal criado com sucesso!
        </h1>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          <strong className="text-foreground">{channelName}</strong> já está pronto no{" "}
          {platformLabel} — categoria {categoryLabel}, contribuição de {contribution} por anúncio.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-bold text-primary-foreground outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            Ver meu canal
          </a>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-secondary px-6 font-bold text-foreground outline-none transition-colors hover:bg-secondary/70 focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}

