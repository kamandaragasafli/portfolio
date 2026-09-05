"use client";

import { ProjectShowcase } from "../components/ProjectShowcase";
import { PurpleAmbient } from "../components/PurpleAmbient";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PurpleAmbient />

      <div className="mx-auto max-w-6xl px-3 py-3 sm:px-4 sm:py-4">
        <SiteHeader variant="projects" />

        <section className="glass animate-in mt-3 rounded-2xl p-5 sm:mt-4 sm:rounded-3xl sm:p-8 md:p-10">
          <p className="text-xs font-medium tracking-wide text-violet">{pick(ui.portfolio, lang)}</p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{pick(ui.allProjects, lang)}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">{pick(ui.allProjectsDesc, lang)}</p>
        </section>

        <section className="mt-3 rounded-2xl p-1 sm:mt-4 sm:rounded-3xl sm:p-2 md:p-4">
          <ProjectShowcase projects={projects} />
        </section>

        <SiteFooter variant="projects" />
      </div>
    </main>
  );
}
