"use client";

import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";

const navItems = [
  ui.nav.home,
  ui.nav.about,
  ui.nav.services,
  ui.nav.work,
  ui.nav.process,
  ui.nav.contact,
];

type SiteFooterProps = {
  variant?: "home" | "projects";
};

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const { lang } = useLanguage();

  return (
    <footer className="glass mt-4 rounded-2xl p-5 sm:mt-6 sm:rounded-3xl sm:p-8 md:p-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
              K
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Kamandar Agasafli</p>
              <p className="text-[11px] text-ink/50">{pick(ui.role, lang)}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">{pick(ui.footerTagline, lang)}</p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.footerNav, lang)}</p>
          <nav className="mt-3 flex flex-col gap-2">
            {variant === "home"
              ? navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-ink/60 transition hover:text-ink"
                  >
                    {pick(item, lang)}
                  </a>
                ))
              : (
                  <>
                    <Link href="/" className="text-sm text-ink/60 transition hover:text-ink">
                      {pick(ui.nav.home, lang)}
                    </Link>
                    <Link href="/#work" className="text-sm text-ink/60 transition hover:text-ink">
                      {pick(ui.nav.work, lang)}
                    </Link>
                    <Link href="/#contact" className="text-sm text-ink/60 transition hover:text-ink">
                      {pick(ui.nav.contact, lang)}
                    </Link>
                    <Link href="/projects" className="text-sm text-ink/60 transition hover:text-ink">
                      {pick(ui.allProjects, lang)}
                    </Link>
                  </>
                )}
          </nav>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.footerContact, lang)}</p>
          <div className="mt-3 space-y-2 break-words text-sm text-ink/60">
            <p>
              <a href="mailto:akasaflikamandar@gmail.com" className="transition hover:text-violet">
                akasaflikamandar@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+994504768843" className="transition hover:text-violet">
                +994 50 476 88 43
              </a>
            </p>
            <a
              href="https://wa.me/994504768843"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D366]/20"
            >
              <SiWhatsapp className="text-base" />
              {pick(ui.whatsapp, lang)}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-ink/10 pt-5 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
        <p>{pick(ui.footer, lang)}</p>
        <p>React · Django · Flutter · AI</p>
      </div>
    </footer>
  );
}
