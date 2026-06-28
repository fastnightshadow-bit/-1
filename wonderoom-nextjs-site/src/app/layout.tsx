import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { AppProviders } from "@/components/providers/app-providers";
import "@/styles/globals.css";

const siteUrl = "https://wonderoom.studio";
const siteTitle = "Wonderoom - студия дизайна интерьеров";
const siteDescription =
  "Wonderoom - премиальная студия дизайна интерьеров Ирины Бродиной: квартиры, частные дома, офисы, отели и салоны красоты с полным циклом проектирования.";
const seoKeywords = [
  "дизайн интерьера",
  "дизайн интерьеров",
  "студия дизайна интерьера",
  "дизайн проект интерьера",
  "дизайн интерьера квартиры",
  "дизайн интерьера дома",
  "современный дизайн интерьера",
  "дизайн интерьера кухни",
  "дизайн интерьера спальни",
  "дизайн интерьера гостиной",
  "дизайн интерьера фото",
  "дизайн интерьера онлайн",
  "дизайн интерьера 3d",
  "интерьерная студия",
  "дизайнер интерьера",
  "премиальный дизайн интерьера",
  "дизайн интерьера Москва",
  "дизайн интерьера Санкт-Петербург",
  "дизайн интерьера Екатеринбург",
  "дизайн интерьера Краснодар",
  "дизайн интерьера Сочи",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Wonderoom",
  },
  description: siteDescription,
  applicationName: "Wonderoom",
  authors: [{ name: "Irina Brodina" }],
  creator: "Wonderoom Studio",
  publisher: "Wonderoom Studio",
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Wonderoom",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/wonderoom-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wonderoom interior design studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/wonderoom-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0A0A0A",
};

type RootLayoutProps = {
  children: ReactNode;
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InteriorDesign",
  name: "Wonderoom",
  url: siteUrl,
  image: `${siteUrl}/images/wonderoom-hero.jpg`,
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "Ирина Бродина",
    alternateName: "Irina Brodina",
  },
  email: "borodina7714@mail.ru",
  telephone: "+79012993687",
  sameAs: [
    "https://t.me/Amaya_weekday",
    "https://vk.com/borodina7714",
    "https://instagram.com/Amaya_weekday",
  ],
  areaServed: [
    "Москва",
    "Санкт-Петербург",
    "Екатеринбург",
    "Краснодар",
    "Сочи",
    "Россия",
  ],
  serviceType: [
    "Дизайн интерьера квартиры",
    "Дизайн интерьера дома",
    "Дизайн интерьера офиса",
    "Дизайн интерьера отеля",
    "Дизайн интерьера салона красоты",
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
