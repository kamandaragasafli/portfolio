"use client";

import {
  SiDjango,
  SiFlutter,
  SiPostgresql,
  SiPython,
  SiReact,
  SiWhatsapp,
} from "react-icons/si";
import { TbApi, TbAutomation, TbBrandReactNative, TbDatabase, TbFileExcel } from "react-icons/tb";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ServiceShowcase } from "./components/ServiceShowcase";
import { SiteHeader } from "./components/SiteHeader";
import { projects } from "./data/projects";
import { useLanguage } from "./i18n/LanguageContext";
import { pick, ui } from "./i18n/translations";

const tools = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "REST", icon: TbApi, color: "#6B5CE0" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "SQL", icon: TbDatabase, color: "#F59E0B" },
  { name: "Excel", icon: TbFileExcel, color: "#217346" },
  { name: "AI Automation", icon: TbAutomation, color: "#8B5CF6" },
];

export default function Page() {
  const { lang } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(920px,90vh)] bg-[url('/hero-bg.webp')] bg-cover bg-top bg-no-repeat"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(920px,90vh)] bg-gradient-to-b from-transparent from-60% to-[#eeecf6]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[min(920px,90vh)] bg-[url('/footer-bg.webp')] bg-cover bg-bottom bg-no-repeat"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[min(920px,90vh)] bg-gradient-to-t from-transparent via-white/10 to-[#eeecf6]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-3 py-3 sm:px-4 sm:py-4">
        <SiteHeader />

        <section
          id="home"
          className="glass animate-in relative mt-3 overflow-hidden rounded-2xl p-5 sm:mt-4 sm:rounded-3xl sm:p-8 md:p-12"
          style={{ animationDelay: "100ms" }}
        >
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold leading-tight break-words sm:text-4xl md:text-5xl">
                Kamandar Agasafli
              </h1>
              <h2 className="bg-gradient-to-r from-violet to-lilac bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
                {pick(ui.fullstack, lang)}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                <a
                  href="#work"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
                >
                  {pick(ui.viewWork, lang)}
                </a>
              </div>
              <p className="mt-6 text-xs text-ink/40 sm:mt-8">{pick(ui.techStack, lang)}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ink/50 sm:gap-3 sm:text-sm">
                {tools.map((t) => (
                  <span key={t.name} className="rounded-full bg-white/60 px-2.5 py-1 sm:px-3">
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[280px] md:min-h-[320px]">
              <div className="glass absolute right-0 top-0 hidden rounded-2xl px-4 py-3 text-center sm:block">
                <p className="text-xl font-semibold">Fullstack</p>
                <p className="text-[10px] text-ink/50">Developer</p>
              </div>
              <div className="glass animate-float w-full max-w-sm overflow-hidden rounded-xl shadow-lg shadow-violet/10">
                <div className="flex items-center gap-1.5 border-b border-white/40 bg-white/30 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="ml-1 text-[9px] text-ink/40">~/portfolio</span>
                </div>
                <pre className="overflow-x-auto bg-white/20 p-3 font-mono text-[8px] leading-relaxed sm:text-[9px]">
                  <code>
                    <span className="text-violet">const</span>{" "}
                    <span className="text-sky-600">dev</span> = {"{"}
                    {"\n"}{"  "}
                    <span className="text-ink/70">name</span>:{" "}
                    <span className="text-emerald-600">&apos;Kamandar&apos;</span>,
                    {"\n"}{"  "}
                    <span className="text-ink/70">role</span>:{" "}
                    <span className="text-emerald-600">&apos;fullstack&apos;</span>,
                    {"\n"}{"  "}
                    <span className="text-ink/70">stack</span>: [
                    {"\n"}{"    "}
                    <span className="text-emerald-600">&apos;react&apos;</span>,
                    {"\n"}{"    "}
                    <span className="text-emerald-600">&apos;django&apos;</span>,
                    {"\n"}{"    "}
                    <span className="text-emerald-600">&apos;flutter&apos;</span>
                    {"\n"}{"  "}],
                    {"\n"}{"  "}
                    <span className="text-ink/70">status</span>:{" "}
                    <span className="text-emerald-600">&apos;ready&apos;</span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="glass animate-in mt-3 rounded-2xl p-5 sm:mt-4 sm:rounded-3xl sm:p-8 md:p-10"
          style={{ animationDelay: "150ms" }}
        >
          <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.aboutLabel, lang)}</p>
          <div className="mt-2 grid gap-4 sm:gap-6 md:grid-cols-2">
            <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{pick(ui.aboutTitle, lang)}</h3>
            <p className="text-sm leading-relaxed text-ink/60">{pick(ui.aboutDesc, lang)}</p>
          </div>
          <div className="glass mt-5 flex flex-col gap-5 rounded-2xl p-4 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="grid grid-cols-2 gap-4 text-sm sm:flex sm:flex-wrap sm:gap-8 md:gap-10">
              <div>
                <p className="text-base font-semibold sm:text-lg">React</p>
                <p className="text-ink/50">Frontend</p>
              </div>
              <div>
                <p className="text-base font-semibold sm:text-lg">Django</p>
                <p className="text-ink/50">Backend</p>
              </div>
              <div>
                <p className="text-base font-semibold sm:text-lg">PostgreSQL</p>
                <p className="text-ink/50">Database</p>
              </div>
              <div>
                <p className="text-base font-semibold sm:text-lg">AI</p>
                <p className="text-ink/50">Automation</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium shadow-sm sm:w-auto"
            >
              {pick(ui.contactMe, lang)}
            </a>
          </div>
        </section>

        <section id="services" className="mt-3 rounded-2xl p-1 sm:mt-4 sm:rounded-3xl sm:p-2 md:p-4">
          <div className="animate-in px-1 sm:px-0">
            <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.whatIDo, lang)}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{pick(ui.servicesTitle, lang)}</h3>
          </div>
          <ServiceShowcase />
        </section>

        <section className="mt-3 rounded-2xl p-1 sm:mt-4 sm:rounded-3xl sm:p-2 md:p-4">
          <div className="animate-in px-1 sm:px-0">
            <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.toolsLabel, lang)}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{pick(ui.toolsTitle, lang)}</h3>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
            {tools.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className="glass animate-in group flex flex-col items-center gap-2 rounded-2xl p-3 text-center text-[11px] text-ink/60 sm:p-4 sm:text-xs"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Icon
                    className="text-xl transition-transform duration-300 group-hover:scale-110 sm:text-2xl"
                    style={{ color: t.color }}
                    aria-hidden
                  />
                  <span className="leading-tight">{t.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="work" className="mt-3 rounded-2xl p-1 sm:mt-4 sm:rounded-3xl sm:p-2 md:p-4">
          <div className="animate-in flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between sm:px-0">
            <div>
              <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.featured, lang)}</p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{pick(ui.selectedWork, lang)}</h3>
            </div>
            <a href="/projects" className="text-sm text-ink/60 transition hover:text-ink">
              {pick(ui.viewAll, lang)}
            </a>
          </div>
          <ProjectShowcase projects={projects} />
        </section>

        <section id="process" className="mt-3 rounded-2xl p-1 sm:mt-4 sm:rounded-3xl sm:p-2 md:p-4">
          <div className="animate-in px-1 sm:px-0">
            <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.processLabel, lang)}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{pick(ui.processTitle, lang)}</h3>
          </div>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {ui.process.map((s, i) => (
              <div
                key={s.n}
                className="glass animate-in rounded-2xl p-4 sm:p-5"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <p className="text-xs text-ink/40">{s.n}</p>
                <p className="mt-3 font-medium">{pick(s.title, lang)}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink/50">{pick(s.desc, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="glass animate-in mt-3 rounded-2xl p-5 sm:mt-4 sm:rounded-3xl sm:p-8 md:p-10"
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.connect, lang)}</p>
          <div className="mt-4 grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{pick(ui.contactTitle, lang)}</h3>
              <div className="mt-5 space-y-2 break-words text-sm text-ink/60 sm:mt-6">
                <p>
                  ✉{" "}
                  <a href="mailto:akasaflikamandar@gmail.com" className="hover:text-violet">
                    akasaflikamandar@gmail.com
                  </a>
                </p>
                <p>
                  ☎{" "}
                  <a href="tel:+994504768843" className="hover:text-violet">
                    +994 50 476 88 43
                  </a>
                </p>
                <p>💼 {pick(ui.role, lang)}</p>
                <p>🛠 React · Python · Django · Flutter · AI Automation</p>
              </div>
            </div>
            <form className="glass space-y-3 rounded-2xl p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-2.5 text-sm"
                  placeholder={pick(ui.name, lang)}
                />
                <input
                  className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-2.5 text-sm"
                  placeholder={pick(ui.email, lang)}
                />
              </div>
              <input
                className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-2.5 text-sm"
                placeholder={pick(ui.project, lang)}
              />
              <textarea
                className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-2.5 text-sm"
                rows={3}
                placeholder={pick(ui.message, lang)}
              />
              <button className="w-full rounded-xl bg-ink py-3 text-sm font-medium text-white">
                {pick(ui.send, lang)}
              </button>
            </form>
          </div>
        </section>

        <footer className="px-2 py-8 text-center text-xs text-ink/40">{pick(ui.footer, lang)}</footer>
      </div>

      <a
        href="https://wa.me/994504768843"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={pick(ui.whatsapp, lang)}
        className="animate-pulse-soft fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <SiWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </main>
  );
}
