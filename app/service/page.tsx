import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/app/lib/company";
import { SubHeader } from "../components/SubHeader";
import { ServiceIcon } from "../components/ServiceIcon";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "株式会社ヴィレッジの事業内容。建物解体工事を軸に、解体業コンサルタント・土地開発・リフォーム・リノベーションまで、北九州で幅広く対応します。",
};

export default function ServiceIndexPage() {
  return (
    <div className="vg">
      <SubHeader />

      <main>
        <section className="service-index">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> SERVICE
              </p>
              <div className="j">事業内容</div>
            </div>
            <p className="lead">
              建物解体を軸に、土地開発・リフォーム・リノベーションまで。北九州で幅広く対応しています。
              各サービスの詳細は、カードからご覧ください。
            </p>

            <div className="svc-list">
              {services.map((s, i) => (
                <Link key={s.slug} href={`/service/${s.slug}`} className="svc-item">
                  <div
                    className="svc-thumb ph"
                    style={{
                      backgroundImage: `url('${s.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="svc-info">
                    <div className="head">
                      <span className="no en">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ic">
                        <ServiceIcon icon={s.icon} className="ico" />
                      </span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <span className="more-in en">詳細を見る →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="more">
              <Link className="btn-fill" href="/contact">
                お問い合わせ・ご相談はこちら →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
