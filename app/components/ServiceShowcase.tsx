"use client";

import { useEffect, useState } from "react";
import {
  TbArrowUpRight,
  TbAutomation,
  TbChartBar,
  TbUsers,
  TbWorldWww,
  TbX,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import { services, type Service, type ServiceDetail } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";

const icons: Record<string, IconType> = {
  "ai-automation": TbAutomation,
  "erp-crm": TbUsers,
  marketing: TbChartBar,
  web: TbWorldWww,
};

export function ServiceShowcase() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<Service | null>(null);
  const [detail, setDetail] = useState<ServiceDetail | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (detail) {
        setDetail(null);
        return;
      }
      setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, detail]);

  const closeAll = () => {
    setActive(null);
    setDetail(null);
  };

  const openCategory = (service: Service) => {
    setActive(service);
    setDetail(null);
  };

  return (
    <>
      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        {services.map((s, i) => {
          const Icon = icons[s.id] ?? TbArrowUpRight;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => openCategory(s)}
              className="glass animate-in group flex h-full flex-col rounded-2xl p-5 text-left sm:p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="mb-5 grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${s.color}18`, color: s.color }}
              >
                <Icon className="text-xl" aria-hidden />
              </div>
              <p className="font-semibold leading-snug">{pick(s.title, lang)}</p>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-ink/50">{pick(s.desc, lang)}</p>
              <div className="mt-5 flex items-center justify-end">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/60 text-ink/40 transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                  <TbArrowUpRight className="text-base" aria-hidden />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={closeAll}
          role="presentation"
        >
          <div
            className="glass-modal animate-in max-h-[94vh] w-full overflow-y-auto rounded-t-3xl p-5 sm:max-h-[92vh] sm:max-w-4xl sm:rounded-3xl sm:p-6 md:max-w-5xl md:p-8 lg:max-w-6xl lg:p-10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            {detail ? (
              <>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setDetail(null)}
                      className="text-xs font-medium tracking-wide text-violet transition hover:text-ink"
                    >
                      {pick(ui.back, lang)}
                    </button>
                    <h3
                      id="service-modal-title"
                      className="mt-2 text-lg font-semibold leading-snug break-words sm:text-2xl"
                    >
                      {pick(detail.title, lang)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/55">{pick(detail.desc, lang)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={closeAll}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-ink/60 transition hover:bg-white hover:text-ink"
                    aria-label={pick(ui.close, lang)}
                  >
                    <TbX className="text-lg" />
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.whatIs, lang)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(detail.whatIs, lang)}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.whyImportant, lang)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(detail.whyImportant, lang)}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.howItWorks, lang)}</p>
                  <ul className="mt-3 space-y-3">
                    {detail.howItWorks.map((step) => (
                      <li key={step.title.az} className="rounded-2xl bg-white/40 p-3.5 sm:p-4">
                        <p className="text-sm font-medium text-ink/85">{pick(step.title, lang)}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                          {pick(step.description, lang)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.includes, lang)}</p>
                  <ul className="mt-3 space-y-2">
                    {detail.benefits.map((benefit) => (
                      <li key={benefit.az} className="flex items-start gap-2 text-sm text-ink/70">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: active.color }}
                        />
                        {pick(benefit, lang)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl bg-violet/5 p-4">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.forWho, lang)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(detail.forWho, lang)}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.conclusion, lang)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(detail.conclusion, lang)}</p>
                </div>

                <a
                  href="#contact"
                  onClick={closeAll}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
                >
                  {pick(ui.discuss, lang)}
                  <TbArrowUpRight />
                </a>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    {(() => {
                      const Icon = icons[active.id] ?? TbArrowUpRight;
                      return (
                        <div
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12"
                          style={{ backgroundColor: `${active.color}18`, color: active.color }}
                        >
                          <Icon className="text-xl sm:text-2xl" aria-hidden />
                        </div>
                      );
                    })()}
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.service, lang)}</p>
                      <h3
                        id="service-modal-title"
                        className="mt-1 text-lg font-semibold leading-snug break-words sm:text-2xl"
                      >
                        {pick(active.title, lang)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/55">{pick(active.desc, lang)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeAll}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-ink/60 transition hover:bg-white hover:text-ink"
                    aria-label={pick(ui.close, lang)}
                  >
                    <TbX className="text-lg" />
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.serviceDetails, lang)}</p>
                  <div className="mt-3 space-y-2">
                    {active.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDetail(item)}
                        className="group flex w-full items-start justify-between gap-3 rounded-2xl bg-white/45 p-3.5 text-left transition hover:bg-white/70 sm:p-4"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink/85">{pick(item.title, lang)}</p>
                          <p className="mt-1 text-xs leading-relaxed text-ink/50">{pick(item.desc, lang)}</p>
                        </div>
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/70 text-ink/35 transition group-hover:bg-violet group-hover:text-white">
                          <TbArrowUpRight className="text-base" aria-hidden />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={closeAll}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
                >
                  {pick(ui.discuss, lang)}
                  <TbArrowUpRight />
                </a>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
