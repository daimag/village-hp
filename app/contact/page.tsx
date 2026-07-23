import type { Metadata } from "next";
import { SubHeader } from "../components/SubHeader";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "解体・遺品整理・リフォームのご相談、無料お見積もり・現地調査はこちら。北九州市門司区の株式会社ヴィレッジ。お電話・フォームよりお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <div className="vg">
      <SubHeader />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
