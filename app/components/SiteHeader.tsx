"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  ui.nav.home,
  ui.nav.about,
  ui.nav.services,
  ui.nav.work,
  ui.nav.process,
  ui.nav.contact,
];

type SiteHeaderProps = {
  variant?: "home" | "projects";
};

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="glass sticky top-3 z-30 rounded-2xl px-3 py-2.5 sm:top-4 sm:px-5 sm:py-3">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
            K
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-semibold">Kamandar Agasafli</p>
            <p className="truncate text-[11px] text-ink/50">{pick(ui.role, lang)}</p>
          </div>
        </Link>

        {variant === "home" ? (
          <nav className="hidden items-center gap-5 rounded-full bg-white/60 px-5 py-2 text-sm text-ink/70 xl:gap-6 xl:px-6 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={i === 0 ? "font-medium text-ink" : "whitespace-nowrap hover:text-ink"}
              >
                {pick(item, lang)}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          {variant === "home" ? (
            <>
              <a
                href="#contact"
                className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white sm:inline-flex"
              >
                {pick(ui.letsTalk, lang)}
              </a>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-ink lg:hidden"
                aria-label={open ? pick(ui.close, lang) : "Menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <TbX className="text-lg" /> : <TbMenu2 className="text-lg" />}
              </button>
            </>
          ) : (
            <Link href="/" className="rounded-full bg-ink px-3 py-2 text-xs font-medium text-white sm:px-4 sm:text-sm">
              {pick(ui.backHome, lang)}
            </Link>
          )}
        </div>
      </div>

      {variant === "home" && open ? (
        <div className="mt-3 border-t border-white/40 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/80 transition hover:bg-white/50 hover:text-ink"
              >
                {pick(item, lang)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-white sm:hidden"
            >
              {pick(ui.letsTalk, lang)}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
