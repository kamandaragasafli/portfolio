"use client";

import { useLanguage, type Lang } from "../i18n/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  const btn = (code: Lang, label: string) => (
    <button
      key={code}
      type="button"
      onClick={() => setLang(code)}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
        lang === code ? "bg-ink text-white" : "text-ink/50 hover:text-ink"
      }`}
      aria-pressed={lang === code}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full bg-white/60 p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn("az", "AZ")}
      {btn("en", "EN")}
    </div>
  );
}
