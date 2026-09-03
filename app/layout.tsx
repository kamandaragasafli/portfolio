import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Kamandar Agasafli — Fullstack Developer",
  description: "Portfolio of Kamandar Agasafli, fullstack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
