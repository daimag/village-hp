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
  metadataBase: new URL("https://village2024.jp"),
  title: {
    default: `${company.name} | 北九州・門司区の解体／遺品整理／リフォーム`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "解体工事",
    "解体 門司",
    "北九州 解体",
    "空き家 解体",
    "遺品整理",
    "生前整理",
    "門司区",
    "土地開発",
    "リフォーム",
    "リノベーション",
    company.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${company.name} | 北九州・門司区の解体／遺品整理／リフォーム`,
    description: company.description,
    url: "https://village2024.jp",
    type: "website",
    locale: "ja_JP",
    siteName: company.name,
    images: [{ url: "/ogp.png", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | 北九州・門司区の解体／遺品整理／リフォーム`,
    description: company.description,
    images: ["/ogp.png"],
  },
  // ⚠️ 公開前：検索エンジンに載せない設定。正式公開時に index:true / follow:true へ戻す。
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
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
