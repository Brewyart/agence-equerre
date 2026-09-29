import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Agence de l'Equerre — Syndic et courtier immobilier à Louvain-la-Neuve",
  description:
    "Syndic de copropriété, courtage, location et gestion locative en Brabant wallon. Agence familiale agréée IPI, active depuis 2003.",
  openGraph: {
    title: "Agence de l'Equerre — Immobilier en Brabant wallon",
    description:
      "Syndic, courtage, expertise et gestion locative par une agence familiale active depuis 2003.",
    url: siteUrl,
    siteName: "Agence de l'Equerre",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/Hero-image.jpg",
        width: 2000,
        height: 1500,
        alt: "Agence de l'Equerre à Louvain-la-Neuve",
      },
    ],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
