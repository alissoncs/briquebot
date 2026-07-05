"use client";

import type { ReactNode } from "react";

const inputBase =
  "w-full rounded-xl border border-border bg-input-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/60";

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  icon?: ReactNode;
  trailing?: ReactNode;
  error?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  prefix?: string;
  inputMode?: "text" | "email" | "numeric" | "decimal";
};

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
  trailing,
  error,
  autoComplete,
  min,
  max,
  prefix,
  inputMode,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        ) : null}
        {prefix ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          min={min}
          max={max}
          inputMode={inputMode}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputBase} ${icon || prefix ? "pl-10" : ""} ${trailing ? "pr-11" : ""} ${
            error ? "border-destructive focus:border-destructive focus:ring-destructive/40" : ""
          }`}
        />
        {trailing ? (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">{trailing}</span>
        ) : null}
      </div>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  optional?: boolean;
};

export function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  optional,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {optional ? (
          <span className="ml-2 text-xs font-normal text-muted-foreground">(opcional)</span>
        ) : null}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${inputBase} resize-y`}
      />
    </div>
  );
}

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
};

type SelectCardsProps = {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
  name: string;
};

export function SelectCards({
  label,
  options,
  value,
  onChange,
  columns = 2,
  name,
}: SelectCardsProps) {
  const gridCols = columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-semibold text-foreground">{label}</legend>
      <div className={`grid grid-cols-1 gap-3 ${gridCols}`}>
        {options.map((option) => {
          const selected = value === option.value;
          const inputId = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={inputId}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors focus-within:ring-2 focus-within:ring-ring/60 ${
                selected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-input-background hover:border-primary/50"
              }`}
            >
              <input
                id={inputId}
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              {option.icon ? (
                <span
                  className={`mt-0.5 shrink-0 ${selected ? "text-primary" : "text-muted-foreground"}`}
                >
                  {option.icon}
                </span>
              ) : null}
              <span className="flex flex-col">
                <span className="font-semibold text-foreground">{option.label}</span>
                {option.description ? (
                  <span className="text-sm text-muted-foreground">{option.description}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export function SelectField({ id, label, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputBase} appearance-none bg-[right_1rem_center] bg-no-repeat pr-10`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-card text-foreground">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type ToggleProps = {
  id: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function Toggle({ id, label, description, checked, onChange }: ToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-input-background p-4">
      <div className="flex flex-col">
        <label htmlFor={id} className="cursor-pointer font-semibold text-foreground">
          {label}
        </label>
        {description ? (
          <span className="text-sm text-muted-foreground">{description}</span>
        ) : null}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
          checked ? "bg-primary" : "bg-switch-background"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

