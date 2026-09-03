"use client";

import { useEffect, useState } from "react";
import {
  TbArrowUpRight,
  TbAutomation,
  TbBuildingStore,
  TbDeviceMobile,
  TbShoppingCart,
  TbUsers,
  TbWorldWww,
  TbX,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import { services, type Service } from "../data/services";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";

const icons: Record<string, IconType> = {
  "erp-crm": TbUsers,
  "mobile-app": TbDeviceMobile,
  website: TbWorldWww,
  ecommerce: TbShoppingCart,
  "web-app": TbBuildingStore,
  "ai-automation": TbAutomation,
};

export function ServiceShowcase() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.id] ?? TbArrowUpRight;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s)}
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
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="glass-modal animate-in max-h-[92vh] w-full overflow-y-auto rounded-t-3xl p-5 sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl sm:p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
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
                  <h3 id="service-modal-title" className="mt-1 text-lg font-semibold leading-snug break-words sm:text-2xl">
                    {pick(active.title, lang)}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-ink/60 transition hover:bg-white hover:text-ink"
                aria-label={pick(ui.close, lang)}
              >
                <TbX className="text-lg" />
              </button>
            </div>

            {active.screenshots && active.screenshots.length > 0 ? (
              <div
                className={`mt-5 gap-2.5 sm:mt-6 sm:gap-3 ${
                  active.screenshots.length > 1
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : "flex justify-center"
                }`}
              >
                {active.screenshots.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl"
                    style={{ backgroundColor: active.screenshotBg ?? "#141414" }}
                  >
                    <img
                      src={src}
                      alt={pick(active.title, lang)}
                      className="mx-auto max-h-52 w-full object-contain sm:max-h-64"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.whatIs, lang)}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(active.whatIs, lang)}</p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.includes, lang)}</p>
              <ul className="mt-3 space-y-2">
                {active.features.map((feature) => (
                  <li key={feature.en} className="flex items-start gap-2 text-sm text-ink/70">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: active.color }}
                    />
                    {pick(feature, lang)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-violet/5 p-4">
              <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.forWho, lang)}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(active.forWho, lang)}</p>
            </div>

            <a
              href="#contact"
              onClick={() => setActive(null)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white sm:w-auto"
            >
              {pick(ui.discuss, lang)}
              <TbArrowUpRight />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
