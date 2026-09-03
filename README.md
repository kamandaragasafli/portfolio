# Aarav Singh — Portfolio (Next.js)

Screenshot-un React/Tailwind ilə Next.js (App Router) versiyası.

## İşə salmaq

```bash
npm install
npm run dev
```

Sonra http://localhost:3000 aç.

## Struktur
- `app/layout.tsx` — root layout
- `app/page.tsx` — bütün səhifə (header, hero, about, services, tools, work, process, testimonials, contact)
- `app/globals.css` — Tailwind + glass-effect stilləri
- `tailwind.config.js` — rəng paleti (ink, violet, lilac)

Şəkildəki portret yerinə hazırda Unsplash-dan nümunə şəkil qoyulub — `app/page.tsx`-də `img src`-i öz şəklinlə əvəz edə bilərsən (`public/` qovluğuna at, `/senin-şəklin.jpg` kimi istifadə et).
