export type Lang = "az" | "en";

export type LocalizedString = { az: string; en: string };

export function pick(value: LocalizedString, lang: Lang): string {
  return value[lang];
}

export const ui = {
  role: { az: "Fullstack Developer", en: "Fullstack Developer" },
  letsTalk: { az: "Əlaqə ↗", en: "Let's Talk ↗" },
  hello: { az: "SALAM, MƏN", en: "HELLO, I'M" },
  fullstack: { az: "Fullstack Developer", en: "Fullstack Developer" },
  heroDesc: {
    az: "React və Python/Django ilə fullstack web tətbiqlər qururam, AI ilə iş axınlarını avtomatlaşdırıram və PostgreSQL ilə verilənlər bazasını idarə edirəm.",
    en: "I build fullstack web applications with React and Python/Django, automate workflows with AI, and manage databases with PostgreSQL.",
  },
  viewWork: { az: "İşlərimə bax ↗", en: "View My Work ↗" },
  techStack: { az: "Texnologiyalar", en: "Tech Stack" },
  aboutLabel: { az: "HAQQIMDA", en: "ABOUT ME" },
  aboutTitle: {
    az: "Proqram qururam, əməliyyatları idarə edirəm",
    en: "Building Software, Managing Operations",
  },
  aboutDesc: {
    az: "React, Python, Django, REST API, PostgreSQL və AI avtomatlaşdırma təcrübəsi olan fullstack developerəm. Frontend, backend və avtomatlaşdırma ilə tam həllər hazırlayıram.",
    en: "I'm a fullstack developer with experience in React, Python, Django, REST APIs, PostgreSQL and AI automation. I build complete solutions across frontend, backend and automation.",
  },
  contactMe: { az: "Əlaqə saxla ↗", en: "Contact Me ↗" },
  whatIDo: { az: "NƏ EDİRƏM", en: "WHAT I DO" },
  servicesTitle: { az: "Təklif etdiyim xidmətlər", en: "Services I Offer" },
  toolsLabel: { az: "ALƏTLƏR & BACARIQLAR", en: "TOOLS & SKILLS" },
  toolsTitle: { az: "İstifadə etdiyim texnologiyalar", en: "Technologies I Use" },
  featured: { az: "SEÇİLMİŞ LAYİHƏLƏR", en: "FEATURED PROJECTS" },
  selectedWork: { az: "Seçilmiş işlər", en: "Selected Work" },
  viewAll: { az: "Bütün layihələr ↗", en: "View All Projects ↗" },
  processLabel: { az: "PROSESİM", en: "MY PROCESS" },
  processTitle: { az: "İzlədiyim inkişaf prosesi", en: "Development Process I Follow" },
  connect: { az: "ƏLAQƏ", en: "LET'S CONNECT" },
  contactTitle: {
    az: "Layihən var? Gəlin birlikdə gözəl bir şey quraq.",
    en: "Have a project in mind? Let's build something great together.",
  },
  name: { az: "Adınız", en: "Your Name" },
  email: { az: "Emailiniz", en: "Your Email" },
  project: { az: "Layihəniz", en: "Your Project" },
  message: { az: "Mesajınız", en: "Your Message" },
  send: { az: "Mesaj göndər ↗", en: "Send Message ↗" },
  footer: {
    az: "© 2026 Kamandar Agasafli. Bütün hüquqlar qorunur.",
    en: "© 2026 Kamandar Agasafli. All rights reserved.",
  },
  whatsapp: { az: "WhatsApp ilə yaz", en: "Message on WhatsApp" },
  backHome: { az: "← Ana səhifə", en: "← Back Home" },
  portfolio: { az: "PORTFOLIO", en: "PORTFOLIO" },
  allProjects: { az: "Bütün layihələr", en: "All Projects" },
  allProjectsDesc: {
    az: "İşlərimin kolleksiyası — fullstack web app-lər, REST API-lər və AI avtomatlaşdırma. Detallar üçün karta bas.",
    en: "A collection of my work — fullstack web apps, REST APIs, and AI automation projects. Click any card to see details.",
  },
  service: { az: "XİDMƏT", en: "SERVICE" },
  whatIs: { az: "BU NƏDİR?", en: "WHAT IS THIS?" },
  includes: { az: "NƏLƏR DAXİLDİR?", en: "WHAT'S INCLUDED?" },
  forWho: { az: "KİM ÜÇÜN?", en: "WHO IS IT FOR?" },
  discuss: { az: "Gəlin müzakirə edək", en: "Let's discuss" },
  close: { az: "Bağla", en: "Close" },
  back: { az: "← Geri", en: "← Back" },
  appsInside: { az: "APP-LƏR", en: "APPS" },
  openApps: { az: "App-ləri gör", en: "View apps" },
  dataHidden: {
    az: "Təhlükəsizliyə görə məlumat gizlədilib.",
    en: "Data is hidden for security reasons.",
  },
  projectImage: { az: "Layihə şəkli", en: "Project image" },
  addImage: { az: "Buraya layihə şəklini əlavə edə bilərsən", en: "You can add a project image here" },
  techStackLabel: { az: "TEXNOLOGİYALAR", en: "TECH STACK" },
  viewProject: { az: "Layihəyə bax", en: "View project" },
  nav: {
    home: { az: "Ana", en: "Home", href: "#home" },
    about: { az: "Haqqında", en: "About", href: "#about" },
    services: { az: "Xidmətlər", en: "Services", href: "#services" },
    work: { az: "İşlər", en: "Work", href: "#work" },
    process: { az: "Proses", en: "Process", href: "#process" },
    contact: { az: "Əlaqə", en: "Contact", href: "#contact" },
  },
  process: [
    {
      n: "01",
      title: { az: "Plan", en: "Plan" },
      desc: {
        az: "Tələbləri anlayıb layihənin əhatəsini müəyyən edirəm.",
        en: "Understanding requirements and defining project scope.",
      },
    },
    {
      n: "02",
      title: { az: "İnkişaf", en: "Develop" },
      desc: {
        az: "React, Python və Django ilə frontend və backend qururam.",
        en: "Building frontend and backend with React, Python and Django.",
      },
    },
    {
      n: "03",
      title: { az: "İnteqrasiya", en: "Integrate" },
      desc: {
        az: "REST API, verilənlər bazası və üçüncü tərəf xidmətlərini birləşdirirəm.",
        en: "Connecting REST APIs, databases and third-party services.",
      },
    },
    {
      n: "04",
      title: { az: "Test", en: "Test" },
      desc: {
        az: "Test və debugging ilə keyfiyyəti təmin edirəm.",
        en: "Ensuring quality through testing and debugging.",
      },
    },
    {
      n: "05",
      title: { az: "Deploy", en: "Deploy" },
      desc: {
        az: "Stabil, production-ready həllər təqdim edirəm.",
        en: "Delivering stable, production-ready solutions.",
      },
    },
  ],
} as const;
