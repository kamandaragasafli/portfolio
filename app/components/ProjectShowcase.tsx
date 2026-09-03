"use client";

import { useEffect, useState } from "react";
import {
  TbAlphabetLatin,
  TbArrowUpRight,
  TbAutomation,
  TbBriefcase,
  TbDeviceMobile,
  TbFlame,
  TbMotorbike,
  TbMapPin,
  TbLayoutDashboard,
  TbBuildingSkyscraper,
  TbChefHat,
  TbPackage,
  TbSparkles,
  TbStethoscope,
  TbUsers,
  TbX,
} from "react-icons/tb";
import type { IconType } from "react-icons";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { pick, ui } from "../i18n/translations";

type ProjectShowcaseProps = {
  projects: Project[];
};

const projectIcons: Record<string, { icon: IconType; color: string }> = {
  mobile: { icon: TbDeviceMobile, color: "#0EA5E9" },
  "erp-crm": { icon: TbUsers, color: "#6B5CE0" },
  web: { icon: TbLayoutDashboard, color: "#3B82F6" },
  solvey: { icon: TbLayoutDashboard, color: "#2563EB" },
  anbar: { icon: TbPackage, color: "#14B8A6" },
  vizit: { icon: TbStethoscope, color: "#1D4ED8" },
  doner: { icon: TbChefHat, color: "#22C55E" },
  pipro: { icon: TbBriefcase, color: "#F59E0B" },
  "calorie-tracker": { icon: TbFlame, color: "#10B981" },
  activity: { icon: TbMapPin, color: "#14B8A6" },
  courier: { icon: TbMotorbike, color: "#E87722" },
  wordix: { icon: TbAlphabetLatin, color: "#F39344" },
  rolewise: { icon: TbLayoutDashboard, color: "#0EA5E9" },
  yusipro: { icon: TbBuildingSkyscraper, color: "#E87722" },
  pimobile: { icon: TbDeviceMobile, color: "#FF7A00" },
  burlart: { icon: TbSparkles, color: "#8B5CF6" },
  "ai-automation": { icon: TbAutomation, color: "#EF4444" },
  "n8n-course": { icon: TbAutomation, color: "#EA4B71" },
  "n8n-social": { icon: TbAutomation, color: "#7C3AED" },
  "n8n-discount": { icon: TbAutomation, color: "#10B981" },
  "n8n-proxmox": { icon: TbAutomation, color: "#E87722" },
};

function iconFor(id: string) {
  return projectIcons[id] ?? { icon: TbArrowUpRight, color: "#6B5CE0" };
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Project | null>(null);
  const [activeApp, setActiveApp] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const viewing = activeApp ?? activeCategory;

  useEffect(() => {
    if (!viewing) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (activeApp && activeCategory?.apps) {
        setActiveApp(null);
        return;
      }
      setActiveCategory(null);
      setActiveApp(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [viewing, activeApp, activeCategory]);

  const closeAll = () => {
    setActiveCategory(null);
    setActiveApp(null);
    setGalleryIndex(0);
  };

  const openCard = (project: Project) => {
    setActiveCategory(project);
    setActiveApp(null);
    setGalleryIndex(0);
  };

  const detail = activeApp ?? (activeCategory && !activeCategory.apps ? activeCategory : null);

  return (
    <>
      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {projects.map((project, index) => {
          const meta = iconFor(project.id);
          const Icon = meta.icon;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => openCard(project)}
              className="glass animate-in group flex w-full flex-col rounded-2xl p-5 text-left sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${meta.color}18`, color: meta.color }}
              >
                <Icon className="text-2xl" aria-hidden />
              </div>
              <div className="flex flex-1 items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{pick(project.title, lang)}</p>
                  <p className="mt-1 text-xs text-ink/40">{pick(project.tag, lang)}</p>
                  {project.apps ? (
                    <p className="mt-2 text-xs text-violet">
                      {project.apps.length} {lang === "az" ? "app" : "apps"}
                    </p>
                  ) : null}
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/60 text-ink/40 transition-all duration-300 group-hover:bg-violet group-hover:text-white">
                  <TbArrowUpRight className="text-base" aria-hidden />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {activeCategory ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={closeAll}
          role="presentation"
        >
          <div
            className="glass-modal animate-in max-h-[92vh] w-full overflow-y-auto rounded-t-3xl p-4 sm:max-h-[96vh] sm:max-w-6xl sm:rounded-3xl sm:p-5 md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                {(() => {
                  const current = detail ?? activeCategory;
                  const meta = iconFor(current.id);
                  const Icon = meta.icon;
                  return (
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12"
                      style={{ backgroundColor: `${meta.color}18`, color: meta.color }}
                    >
                      <Icon className="text-xl sm:text-2xl" aria-hidden />
                    </div>
                  );
                })()}
                <div className="min-w-0">
                  <p className="text-xs font-medium tracking-wide text-violet">
                    {pick((detail ?? activeCategory).tag, lang)}
                  </p>
                  <h3 id="project-modal-title" className="mt-1 text-lg font-semibold leading-snug break-words sm:text-2xl">
                    {pick((detail ?? activeCategory).title, lang)}
                  </h3>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {activeApp && activeCategory.apps ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveApp(null);
                      setGalleryIndex(0);
                    }}
                    className="rounded-full bg-white/70 px-2.5 py-2 text-[11px] font-medium text-ink/70 transition hover:bg-white hover:text-ink sm:px-3 sm:text-xs"
                  >
                    {pick(ui.back, lang)}
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={closeAll}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-ink/60 transition hover:bg-white hover:text-ink"
                  aria-label={pick(ui.close, lang)}
                >
                  <TbX className="text-lg" />
                </button>
              </div>
            </div>

            {activeCategory.apps && !activeApp ? (
              <>
                <p className="mt-6 text-sm leading-relaxed text-ink/70">{pick(activeCategory.description, lang)}</p>
                {activeCategory.id === "erp-crm" ? (
                  <p className="mt-3 rounded-xl bg-amber-50 px-4 py-2.5 text-xs leading-relaxed text-amber-800">
                    {pick(ui.dataHidden, lang)}
                  </p>
                ) : null}
                <p className="mt-6 text-xs font-medium tracking-wide text-violet">{pick(ui.appsInside, lang)}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {activeCategory.apps.map((app) => {
                    const meta = iconFor(app.id);
                    const Icon = meta.icon;
                    return (
                      <button
                        key={app.id}
                        type="button"
                        onClick={() => {
                          setActiveApp(app);
                          setGalleryIndex(0);
                        }}
                        className="group rounded-2xl border border-ink/10 bg-white/70 p-3.5 text-left transition hover:border-violet/30 hover:shadow-md sm:p-4"
                      >
                        <div
                          className="mb-3 grid h-10 w-10 place-items-center rounded-xl"
                          style={{ backgroundColor: `${meta.color}18`, color: meta.color }}
                        >
                          <Icon className="text-xl" aria-hidden />
                        </div>
                        <p className="text-sm font-medium">{pick(app.title, lang)}</p>
                        <p className="mt-1 text-xs text-ink/40">{pick(app.tag, lang)}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs text-violet">
                          {pick(ui.openApps, lang)}
                          <TbArrowUpRight />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : null}

            {detail ? (
              <>
                {(() => {
                  const gallery =
                    detail.images?.length ? detail.images : detail.image ? [detail.image] : [];
                  if (gallery.length === 0) return null;
                  const current = gallery[Math.min(galleryIndex, gallery.length - 1)];
                  return (
                    <div className="mt-6">
                      <div
                        className="overflow-hidden rounded-2xl"
                        style={{ backgroundColor: detail.galleryBg ?? "#141414" }}
                      >
                        <img
                          src={current}
                          alt={pick(detail.title, lang)}
                          className="mx-auto h-auto max-h-[45vh] w-full object-contain sm:max-h-[62vh]"
                        />
                      </div>
                      {gallery.length > 1 ? (
                        <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                          {gallery.map((src, i) => (
                            <button
                              key={src}
                              type="button"
                              onClick={() => setGalleryIndex(i)}
                              className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 sm:h-16 sm:w-28 ${
                                i === galleryIndex ? "border-violet" : "border-transparent opacity-70"
                              }`}
                              style={{ backgroundColor: detail.galleryBg ?? "#141414" }}
                            >
                              <img src={src} alt="" className="h-full w-full object-cover" />
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })()}

                {["solvey", "anbar", "vizit"].includes(detail.id) ? (
                  <p className="mt-4 rounded-xl bg-amber-50 px-4 py-2.5 text-xs leading-relaxed text-amber-800">
                    {pick(ui.dataHidden, lang)}
                  </p>
                ) : null}

                <p className="mt-6 text-sm leading-relaxed text-ink/70">{pick(detail.description, lang)}</p>

                {(detail.link || detail.github) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white"
                      >
                        {pick(ui.viewProject, lang)}
                        <TbArrowUpRight />
                      </a>
                    ) : null}
                    {detail.github ? (
                      <a
                        href={detail.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-medium"
                      >
                        GitHub
                        <TbArrowUpRight />
                      </a>
                    ) : null}
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
