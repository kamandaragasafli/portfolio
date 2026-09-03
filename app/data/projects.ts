import type { LocalizedString } from "../i18n/translations";

export type Project = {
  id: string;
  title: LocalizedString;
  tag: LocalizedString;
  image?: string;
  images?: string[];
  galleryBg?: string;
  description: LocalizedString;
  tech: string[];
  link?: string;
  github?: string;
  apps?: Project[];
};

export const mobileApps: Project[] = [
  {
    id: "calorie-tracker",
    title: { az: "Kalori İzləmə App", en: "Calorie Tracker App" },
    tag: { az: "Mobil Tətbiq", en: "Mobile App" },
    image: "/projects/calorie/home.jpg",
    galleryBg: "#e8f5e9",
    images: [
      "/projects/calorie/home.jpg",
      "/projects/calorie/add.jpg",
      "/projects/calorie/scan.jpg",
      "/projects/calorie/recipes.jpg",
      "/projects/calorie/profile.jpg",
    ],
    description: {
      az: "Gündəlik kalori izləmə mobil tətbiqi. TDEE əsasında fərdi hədəf, yemək əlavə etmə, barkod skan, tariflər və profil göstəriciləri.",
      en: "Daily calorie tracking mobile app. Personalized TDEE goals, meal logging, barcode scan, recipes and profile metrics.",
    },
    tech: ["Flutter", "Django", "PostgreSQL", "REST API"],
  },
  {
    id: "pipro",
    title: { az: "Offline Satış Sistemi", en: "Offline Sales System" },
    tag: { az: "ERP / CRM · Mobil", en: "ERP / CRM · Mobile" },
    image: "/projects/pipro/home.jpg",
    galleryBg: "#141414",
    images: [
      "/projects/pipro/home.jpg",
      "/projects/pipro/invoices.jpg",
      "/projects/pipro/catalog.jpg",
      "/projects/pipro/actions.jpg",
      "/projects/pipro/menu.jpg",
    ],
    description: {
      az: "Oflayn satış sistemi — dashboard, qaimələr, məhsul kataloqu, ödənişlər, müştərilər və anbar idarəetməsi. İnternet olmadan da satış, borc və marşrut izləmə.",
      en: "Offline sales system — dashboard, invoices, product catalog, payments, customers and warehouse management. Sell, track debt and routes even without internet.",
    },
    tech: ["Flutter", "Django", "PostgreSQL", "REST API", "Offline Sync"],
  },
  {
    id: "activity",
    title: { az: "Aktivlik & Kəşf App", en: "Activity & Discover App" },
    tag: { az: "Mobil Tətbiq", en: "Mobile App" },
    image: "/projects/activity/home.jpg",
    galleryBg: "#121212",
    images: [
      "/projects/activity/home.jpg",
      "/projects/activity/map.jpg",
      "/projects/activity/people.jpg",
      "/projects/activity/create.jpg",
      "/projects/activity/profile.jpg",
    ],
    description: {
      az: "Aktivlik kəşf tətbiqi — xəritə, insanlar, yeni aktivlik yaratmaq, kateqoriyalar və profil. Tədbirləri tap, qoşul və paylaş.",
      en: "Activity discovery app — map, people, create events, categories and profile. Find events, join and share.",
    },
    tech: ["Flutter", "Django", "PostgreSQL", "REST API", "Maps"],
  },
  {
    id: "courier",
    title: { az: "Kuryer Çatdırılma App", en: "Courier Delivery App" },
    tag: { az: "Mobil Tətbiq", en: "Mobile App" },
    image: "/projects/courier/order.jpg",
    galleryBg: "#f4f4f2",
    images: [
      "/projects/courier/order.jpg",
      "/projects/courier/nav.jpg",
    ],
    description: {
      az: "Kuryer üçün çatdırılma tətbiqi — restoran götürmə, müştəriyə çatdırma, xəritə naviqasiyası, zəng və qazanc izləmə.",
      en: "Courier delivery app — restaurant pickup, customer drop-off, map navigation, call and earnings tracking.",
    },
    tech: ["Flutter", "Maps", "REST API", "Real-time"],
  },
  {
    id: "wordix",
    title: { az: "WORDIX — Kəlimə Oyunu", en: "WORDIX — Word Game" },
    tag: { az: "Mobil Tətbiq", en: "Mobile App" },
    image: "/projects/wordix/home.jpg",
    galleryBg: "#FFF6EB",
    images: [
      "/projects/wordix/home.jpg",
      "/projects/wordix/play.jpg",
      "/projects/wordix/map.jpg",
      "/projects/wordix/complete.jpg",
    ],
    description: {
      az: "Azərbaycan dilində kəlimə oyunu — səviyyə xəritəsi, kateqoriyalar, taymer, ipucu və elm tapşırıqları. Sikkə və sandıq sistemi.",
      en: "Azerbaijani word game — level map, categories, timer, hints and science quizzes. Coins and chest rewards.",
    },
    tech: ["React Native", "Expo"],
  },
];

export const erpApps: Project[] = [
  {
    id: "solvey",
    title: { az: "Pharma Admin Panel", en: "Pharma Admin Panel" },
    tag: { az: "ERP", en: "ERP" },
    image: "/projects/solvey/dashboard.png",
    galleryBg: "#0b1220",
    images: [
      "/projects/solvey/dashboard.png",
      "/projects/solvey/doctors.png",
      "/projects/solvey/register.png",
      "/projects/solvey/report.png",
    ],
    description: {
      az: "Əczaçılıq idarəetmə paneli — həkimlər, qeydiyyat, satış, borc və aylıq hesabatlar. Dashboard, anbar və dərman izləmə.",
      en: "Pharmaceutical admin panel — doctors, registrations, sales, debts and monthly reports. Dashboard, warehouse and medicine tracking.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
  },
  {
    id: "anbar",
    title: { az: "Anbar İdarəetmə", en: "Warehouse Management" },
    tag: { az: "ERP", en: "ERP" },
    image: "/projects/anbar/stock.png",
    galleryBg: "#0b141a",
    images: [
      "/projects/anbar/stock.png",
      "/projects/anbar/invoices.png",
      "/projects/anbar/pharmacies.png",
      "/projects/anbar/medicines.png",
    ],
    description: {
      az: "Anbar idarəetmə paneli — qalıq, qaimələr, apteklər və dərman stoku. Sinxronizasiya, filtr və Excel export.",
      en: "Warehouse management panel — stock, invoices, pharmacies and medicine inventory. Sync, filters and Excel export.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
  },
  {
    id: "vizit",
    title: { az: "Vizit İdarəetmə", en: "Visit Management" },
    tag: { az: "CRM", en: "CRM" },
    image: "/projects/vizit/admin.png",
    galleryBg: "#e8eef6",
    images: [
      "/projects/vizit/admin.png",
      "/projects/vizit/visit.png",
      "/projects/vizit/report.png",
    ],
    description: {
      az: "Aptek vizit sistemi — nümayəndə idarəetməsi, vizit qeydiyyatı, dərman sorğusu, satış və mövcudluq, hesabat və statistika.",
      en: "Pharmacy visit system — rep management, visit logging, drug inquiry, sales and availability, reports and statistics.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
  },
  {
    id: "doner",
    title: { az: "Restoran ERP", en: "Restaurant ERP" },
    tag: { az: "ERP", en: "ERP" },
    image: "/projects/doner/dashboard.png",
    galleryBg: "#f5f6f8",
    images: [
      "/projects/doner/dashboard.png",
      "/projects/doner/menu.png",
      "/projects/doner/payment.png",
      "/projects/doner/kitchen.png",
      "/projects/doner/settings.png",
      "/projects/doner/qr.png",
    ],
    description: {
      az: "Restoran idarəetmə sistemi — dashboard, menyu, POS ödəniş, mətbəx lövhəsi, anbar, masa və QR sifariş. Nağd/kart, ƏDV və printer ayarları.",
      en: "Restaurant management system — dashboard, menu, POS payments, kitchen display, warehouse, tables and QR ordering. Cash/card, VAT and printer settings.",
    },
    tech: ["React", "TypeScript", "REST API"],
  },
];

export const webApps: Project[] = [
  {
    id: "rolewise",
    title: { az: "Rolewise — İş Dashboard", en: "Rolewise — Job Dashboard" },
    tag: { az: "Web Tətbiq", en: "Web App" },
    image: "/projects/rolewise/dashboard.png",
    galleryBg: "#e8eef4",
    images: [
      "/projects/rolewise/dashboard.png",
      "/projects/rolewise/jobs.png",
      "/projects/rolewise/cv.png",
      "/projects/rolewise/connections.png",
    ],
    description: {
      az: "Karyera və iş axtarış platforması. Profil idarəetməsi, iş uyğunluğu, saxlanılmış vakansiyalar, CV və müraciət izləmə funksiyaları ilə tam funksional dashboard.",
      en: "Career and job search platform. Fully featured dashboard with profile management, job matching, saved roles, CV and application tracking.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
  },
  {
    id: "yusipro",
    title: { az: "Yusipro — Korporativ Sayt", en: "Yusipro — Corporate Site" },
    tag: { az: "Vebsayt", en: "Website" },
    image: "/projects/yusipro.jpg",
    galleryBg: "#1a1a1a",
    images: ["/projects/yusipro.jpg"],
    description: {
      az: "Korporativ şirkət saytı — hero slayder, haqqımızda, məhsullar, partnyorlar və əlaqə. AZ dil dəstəyi və WhatsApp inteqrasiyası.",
      en: "Corporate company website — hero slider, about, products, partners and contact. AZ language support and WhatsApp integration.",
    },
    tech: ["Next.js", "React", "Responsive"],
  },
  {
    id: "pimobile",
    title: { az: "Pi Mobile — Landing", en: "Pi Mobile — Landing" },
    tag: { az: "Vebsayt", en: "Website" },
    image: "/projects/pimobile.png",
    galleryBg: "#111111",
    images: ["/projects/pimobile.png"],
    description: {
      az: "Offline satış sistemi üçün landing səhifə — xüsusiyyətlər, necə işləyir, qiymət və yükləmə. Telefon mockup ilə hero.",
      en: "Landing page for an offline sales system — features, how it works, pricing and download. Hero with a phone mockup.",
    },
    tech: ["Next.js", "React", "Responsive"],
  },
  {
    id: "burlart",
    title: { az: "Burlart — AI Platforma", en: "Burlart — AI Platform" },
    tag: { az: "Web Tətbiq", en: "Web App" },
    image: "/projects/burlart/landing.png",
    galleryBg: "#0a0a0a",
    images: [
      "/projects/burlart/landing.png",
      "/projects/burlart/studio.jpg",
    ],
    description: {
      az: "AI ilə video və şəkil yaratma platforması — landing, şablonlar, paket qiymətləri və studio paneli. Kredit sistemi, Pika, Sora, Kling və digər modellər.",
      en: "AI video and image platform — landing, templates, pricing packages and a studio panel. Credit system with Pika, Sora, Kling and other models.",
    },
    tech: ["Next.js", "React", "AI API"],
  },
];

export const aiApps: Project[] = [
  {
    id: "n8n-course",
    title: { az: "Kurs Data Workflow", en: "Course Data Workflow" },
    tag: { az: "n8n Automation", en: "n8n Automation" },
    image: "/projects/ai/course.png",
    galleryBg: "#f7f7fb",
    images: ["/projects/ai/course.png"],
    description: {
      az: "n8n workflow — cron ilə məlumat toplama, Airtable və API merge, PDF hesabat, Gmail və Discord bildirişləri.",
      en: "n8n workflow — scheduled data collection, Airtable and API merge, PDF reports, Gmail and Discord notifications.",
    },
    tech: ["n8n", "Airtable", "HTTP API", "Gmail", "Discord"],
  },
  {
    id: "n8n-social",
    title: { az: "Social Media Manager", en: "Social Media Manager" },
    tag: { az: "AI Automation", en: "AI Automation" },
    image: "/projects/ai/social.png",
    galleryBg: "#f4f6fb",
    images: ["/projects/ai/social.png"],
    description: {
      az: "WordPress postunu AI ilə sosial məzmuna çevirir, Teams-də təsdiq alır, X, Facebook və LinkedIn-ə paylaşır.",
      en: "Turns a WordPress post into social content with AI, waits for Teams approval, then publishes to X, Facebook and LinkedIn.",
    },
    tech: ["n8n", "OpenAI", "WordPress", "Microsoft Teams", "Facebook", "LinkedIn"],
  },
  {
    id: "n8n-discount",
    title: { az: "Kurs Endirim Workflow", en: "Course Discount Workflow" },
    tag: { az: "n8n Automation", en: "n8n Automation" },
    image: "/projects/ai/discount.webp",
    galleryBg: "#f4f5f7",
    images: ["/projects/ai/discount.webp"],
    description: {
      az: "Kurs səhifəsini scrape edir, 50%+ endirimi tapır, Google Sheets-ə yazır və Telegram bildirişi göndərir.",
      en: "Scrapes course pages, finds 50%+ discounts, appends them to Google Sheets and sends a Telegram notification.",
    },
    tech: ["n8n", "Web Scraping", "Google Sheets", "Telegram"],
  },
  {
    id: "n8n-proxmox",
    title: { az: "Proxmox AI Agent", en: "Proxmox AI Agent" },
    tag: { az: "AI Automation", en: "AI Automation" },
    image: "/projects/ai/proxmox.jpg",
    galleryBg: "#f3f4f6",
    images: ["/projects/ai/proxmox.jpg"],
    description: {
      az: "Webhook ilə AI agent Proxmox API-ni idarə edir. Gemini və Groq modelləri GET, POST, DELETE sorğularını seçir və cavabı strukturlaşdırır.",
      en: "An AI agent triggered by webhook manages the Proxmox API. Gemini and Groq models route GET, POST and DELETE requests and structure the response.",
    },
    tech: ["n8n", "Google Gemini", "Groq", "Proxmox API", "Webhook"],
  },
];

export const projects: Project[] = [
  {
    id: "mobile",
    title: { az: "Mobile", en: "Mobile" },
    tag: { az: "Mobil tətbiqlər", en: "Mobile apps" },
    description: {
      az: "iOS və Android üçün hazırladığım mobil tətbiqlər. Kartı aç və app-ləri gör.",
      en: "Mobile apps built for iOS and Android. Open the card to browse the apps.",
    },
    tech: ["Flutter", "Django", "PostgreSQL", "REST API"],
    apps: mobileApps,
  },
  {
    id: "erp-crm",
    title: { az: "ERP-CRM", en: "ERP-CRM" },
    tag: { az: "Biznes sistemləri", en: "Business systems" },
    description: {
      az: "ERP və CRM panellər. Kartı aç və layihələri gör. Təhlükəsizliyə görə məlumat gizlədilib.",
      en: "ERP and CRM panels. Open the card to browse the projects. Data is hidden for security reasons.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
    apps: erpApps,
  },
  {
    id: "web",
    title: { az: "Web", en: "Web" },
    tag: { az: "Web tətbiqlər", en: "Web apps" },
    description: {
      az: "Web tətbiqlər. Kartı aç və layihələri gör.",
      en: "Web applications. Open the card to browse the projects.",
    },
    tech: ["React", "Django", "PostgreSQL", "REST API"],
    apps: webApps,
  },
  {
    id: "ai-automation",
    title: { az: "AI Automation", en: "AI Automation" },
    tag: { az: "Workflow-lar", en: "Workflows" },
    description: {
      az: "n8n və AI ilə avtomatlaşdırılmış iş axınları. Kartı aç və workflow-ları gör.",
      en: "Automated workflows with n8n and AI. Open the card to browse the workflows.",
    },
    tech: ["n8n", "OpenAI", "Python"],
    apps: aiApps,
  },
];
