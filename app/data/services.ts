import type { LocalizedString } from "../i18n/translations";

export type Service = {
  id: string;
  color: string;
  title: LocalizedString;
  desc: LocalizedString;
  whatIs: LocalizedString;
  features: LocalizedString[];
  forWho: LocalizedString;
  screenshots?: string[];
  screenshotBg?: string;
};

export const services: Service[] = [
  {
    id: "erp-crm",
    color: "#6B5CE0",
    title: { az: "ERP & CRM Sistemləri", en: "ERP & CRM Systems" },
    desc: {
      az: "Satış, anbar, müştəri və biznes əməliyyatları üçün xüsusi ERP və CRM həlləri.",
      en: "Custom ERP and CRM solutions for sales, inventory, customers and business operations.",
    },
    screenshots: [
      "/projects/solvey/dashboard.png",
      "/projects/solvey/doctors.png",
      "/projects/solvey/register.png",
      "/projects/solvey/report.png",
    ],
    screenshotBg: "#0b1220",
    whatIs: {
      az: "ERP (Enterprise Resource Planning) şirkətin satış, anbar, maliyyə və əməliyyatlarını bir sistemdə birləşdirir. CRM (Customer Relationship Management) isə müştərilərlə əlaqəni, satış pipeline-ını və dəstək proseslərini idarə edir.",
      en: "ERP (Enterprise Resource Planning) unifies sales, inventory, finance and operations in one system. CRM (Customer Relationship Management) manages customer relationships, sales pipelines and support processes.",
    },
    features: [
      { az: "Satış, anbar və sifariş idarəetməsi", en: "Sales, inventory and order management" },
      { az: "Müştəri bazası və əlaqə tarixçəsi", en: "Customer database and contact history" },
      { az: "Hesabatlar və real-time analitika", en: "Reports and real-time analytics" },
      { az: "Oflayn / online iş rejimi", en: "Offline / online work mode" },
      { az: "Rol əsaslı giriş və təhlükəsizlik", en: "Role-based access and security" },
    ],
    forWho: {
      az: "Satış komandaları, topdan/pərakəndə şirkətlər, distributorlar və böyüyən bizneslər.",
      en: "Sales teams, wholesale/retail companies, distributors and growing businesses.",
    },
  },
  {
    id: "mobile-app",
    color: "#0EA5E9",
    title: { az: "Mobil Tətbiq İnkişafı", en: "Mobile App Development" },
    desc: {
      az: "iOS və Android üçün müasir UX-li native və cross-platform mobil tətbiqlər.",
      en: "Native and cross-platform mobile apps for iOS and Android with modern UX.",
    },
    screenshots: [
      "/projects/calorie/home.jpg",
      "/projects/calorie/add.jpg",
      "/projects/calorie/scan.jpg",
      "/projects/calorie/recipes.jpg",
      "/projects/calorie/profile.jpg",
    ],
    screenshotBg: "#e8f5e9",
    whatIs: {
      az: "Mobil tətbiq — telefon və planşetdə işləyən proqramdır. Flutter və React Native ilə həm iOS, həm Android üçün bir kod bazasından sürətli və müasir app hazırlanır.",
      en: "A mobile app runs on phones and tablets. With Flutter and React Native, modern apps are built for both iOS and Android from a single codebase.",
    },
    features: [
      { az: "iOS və Android uyğunluğu", en: "iOS and Android compatibility" },
      { az: "Push bildirişlər və oflayn iş", en: "Push notifications and offline support" },
      { az: "API inteqrasiyası", en: "API integration" },
      { az: "İstifadəçi dostu interfeys", en: "User-friendly interface" },
      { az: "App Store / Play Store hazırlığı", en: "App Store / Play Store readiness" },
    ],
    forWho: {
      az: "Bizneslər, startaplar və istifadəçilərinə mobil həll təqdim etmək istəyən şirkətlər.",
      en: "Businesses, startups and companies that want to offer a mobile solution to their users.",
    },
  },
  {
    id: "website",
    color: "#10B981",
    title: { az: "Vebsayt İnkişafı", en: "Website Development" },
    desc: {
      az: "Ziyarətçiləri müştəriyə çevirən responsive şirkət saytları, landing page və portfoliolar.",
      en: "Responsive company websites, landing pages and portfolios that convert visitors.",
    },
    screenshots: ["/projects/yusipro.jpg", "/projects/pimobile.png", "/projects/burlart/landing.png"],
    screenshotBg: "#1a1a1a",
    whatIs: {
      az: "Vebsayt — şirkətin internetdəki üzüdür. Şirkət saytı, landing page və portfolio müştərilərə xidmətlərinizi göstərir və əlaqə yaradır.",
      en: "A website is your company's face online. Company sites, landing pages and portfolios present your services and help you connect with clients.",
    },
    features: [
      { az: "Mobilə uyğun (responsive) dizayn", en: "Mobile-friendly (responsive) design" },
      { az: "Sürətli yüklənmə və SEO əsasları", en: "Fast loading and SEO basics" },
      { az: "Kontakt forması və WhatsApp inteqrasiyası", en: "Contact form and WhatsApp integration" },
      { az: "Müasir və peşəkar görünüş", en: "Modern and professional look" },
      { az: "Admin paneldən məzmun yeniləmə", en: "Content updates from an admin panel" },
    ],
    forWho: {
      az: "Şirkətlər, freelancers, agentliklər və onlayn mövcudluq istəyən hər kəs.",
      en: "Companies, freelancers, agencies and anyone who wants an online presence.",
    },
  },
  {
    id: "ecommerce",
    color: "#F59E0B",
    title: { az: "E-commerce", en: "E-commerce" },
    desc: {
      az: "Məhsul kataloqu, səbət, ödəniş və sifariş idarəetməsi olan onlayn mağazalar.",
      en: "Online stores with product catalogs, carts, payments and order management.",
    },
    whatIs: {
      az: "E-commerce — internet üzərindən satış platformasıdır. Məhsul kataloqu, səbət, ödəniş və sifariş idarəetməsi ilə 24/7 satış imkanı yaradır.",
      en: "E-commerce is an online sales platform. With catalogs, carts, payments and order management, it enables 24/7 selling.",
    },
    features: [
      { az: "Məhsul kataloqu və kateqoriyalar", en: "Product catalog and categories" },
      { az: "Səbət və checkout prosesi", en: "Cart and checkout flow" },
      { az: "Online ödəniş inteqrasiyası", en: "Online payment integration" },
      { az: "Sifariş və kuryer izləmə", en: "Order and courier tracking" },
      { az: "Admin panel və inventar idarəetməsi", en: "Admin panel and inventory management" },
    ],
    forWho: {
      az: "Onlayn mağaza açmaq istəyən brendlər, retail və wholesale bizneslər.",
      en: "Brands and retail/wholesale businesses that want to open an online store.",
    },
  },
  {
    id: "web-app",
    color: "#8B5CF6",
    title: { az: "Web Tətbiqlər", en: "Web Applications" },
    desc: {
      az: "Daxili alətlər və müştəri portalları üçün xüsusi dashboard və web platformalar.",
      en: "Custom dashboards and web platforms for internal tools and customer portals.",
    },
    screenshots: [
      "/projects/rolewise/dashboard.png",
      "/projects/rolewise/jobs.png",
      "/projects/rolewise/cv.png",
      "/projects/rolewise/connections.png",
    ],
    screenshotBg: "#e8eef4",
    whatIs: {
      az: "Web application — brauzerdə işləyən tam funksional proqramdır. Dashboard, daxili alətlər və müştəri portalları əməkdaşlara və müştərilərə rahat iş mühiti verir.",
      en: "A web application is a full-featured program that runs in the browser. Dashboards, internal tools and customer portals give teams and clients a smooth workspace.",
    },
    features: [
      { az: "Custom dashboard və analitika", en: "Custom dashboard and analytics" },
      { az: "İstifadəçi rolları və icazələr", en: "User roles and permissions" },
      { az: "Real-time məlumat yenilənməsi", en: "Real-time data updates" },
      { az: "API və üçüncü tərəf inteqrasiyaları", en: "API and third-party integrations" },
      { az: "Təhlükəsiz autentifikasiya", en: "Secure authentication" },
    ],
    forWho: {
      az: "Daxili prosesləri rəqəmsallaşdırmaq istəyən şirkətlər və SaaS layihələri.",
      en: "Companies digitizing internal processes and SaaS projects.",
    },
  },
  {
    id: "ai-automation",
    color: "#EF4444",
    title: { az: "AI Avtomatlaşdırma", en: "AI Automation" },
    desc: {
      az: "AI alətləri və inteqrasiyalarla iş axınlarını və biznes proseslərini avtomatlaşdırmaq.",
      en: "Automating workflows and business processes with AI-powered tools and integrations.",
    },
    whatIs: {
      az: "AI Automation — təkrarlanan işləri süni intellekt və botlarla avtomatlaşdırmaqdır. Məlumat toplama, bildiriş, hesabat və inteqrasiyalar insan müdaxiləsi olmadan işləyə bilər.",
      en: "AI Automation means automating repetitive work with AI and bots. Data collection, notifications, reports and integrations can run with little human intervention.",
    },
    features: [
      { az: "Workflow və tapşırıq avtomatlaşdırması", en: "Workflow and task automation" },
      { az: "Telegram / Email bildirişləri", en: "Telegram / Email notifications" },
      { az: "Web scraping və məlumat toplama", en: "Web scraping and data collection" },
      { az: "Google Sheets və API inteqrasiyası", en: "Google Sheets and API integration" },
      { az: "Zaman və xərc qənaəti", en: "Time and cost savings" },
    ],
    forWho: {
      az: "Manual işləri azaltmaq və prosesləri sürətləndirmək istəyən komandalar.",
      en: "Teams that want to cut manual work and speed up processes.",
    },
    screenshots: ["/projects/ai/course.png", "/projects/ai/social.png", "/projects/ai/discount.webp", "/projects/ai/proxmox.jpg"],
    screenshotBg: "#f7f7fb",
  },
];
