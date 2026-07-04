import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "./site.css";
import { company } from "./lib/company";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | 北九州の解体・土地開発・リフォーム`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "解体工事",
    "解体業",
    "北九州",
    "門司区",
    "土地開発",
    "リフォーム",
    "リノベーション",
    company.name,
  ],
  openGraph: {
    title: `${company.name} | 北九州の解体・土地開発・リフォーム`,
    description: company.description,
    type: "website",
    locale: "ja_JP",
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  telephone: company.tel,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    postalCode: company.postalCode,
    addressRegion: "福岡県",
    addressLocality: "北九州市門司区",
    streetAddress: "上馬寄1丁目8-1-1203",
    addressCountry: "JP",
  },
  areaServed: "北九州市",
  founder: company.representative,
  description: company.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
