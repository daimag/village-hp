import type { Metadata } from "next";
import Link from "next/link";
import { cases, caseGallery } from "@/app/lib/company";
import { SubHeader } from "../components/SubHeader";
import { CaseCard } from "../components/CaseCard";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "解体の施工例｜個人・空き家の解体",
  description:
    "北九州市門司区を中心に、ご家庭・空き家の解体工事のビフォーアフターと費用の目安をご紹介します。一軒だけの解体もお気軽にご相談ください。",
};

export default function WorksPage() {
  return (
    <div className="vg">
      <SubHeader />

      <main>
        <section className="workspage">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> WORKS
              </p>
              <div className="j">解体の施工例</div>
            </div>
            <p className="lead">
              <strong>個人のお客様・空き家の解体に力を入れています。</strong>
              「実家が空き家になって困っている」「一軒だけ解体したい」——
              大きな現場だけでなく、ご家庭一軒の解体も、残置物の整理から整地まで
              ワンストップで、近隣に配慮して丁寧に対応します。
            </p>

            <div className="cases list">
              {cases.map((c) => (
                <CaseCard key={c.id} c={c} />
              ))}
            </div>

            <p className="note">
              ※費用は建物の規模・構造・立地・残置物の量などにより異なります。表示は一例（目安）です。正確な費用は無料お見積もりにてご案内します。
            </p>

            <div className="case-gallery">
              <h2>対応した建物の実例</h2>
              <div className="cg-grid">
                {caseGallery.map((g, i) => (
                  <figure key={i}>
                    <div
                      className="img ph"
                      style={{
                        backgroundImage: `url('${g.src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <figcaption>{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="more">
              <Link className="btn-fill" href="/contact">
                無料お見積もり・ご相談はこちら →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
