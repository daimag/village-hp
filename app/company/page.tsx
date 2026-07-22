import type { Metadata } from "next";
import Link from "next/link";
import { company, greeting } from "@/app/lib/company";
import { CompanyTable } from "../components/CompanyTable";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "会社案内・代表あいさつ",
  description: `${company.name}の会社案内と代表あいさつ。北九州市門司区で、解体・遺品整理から土地活用まで、地域に根ざして誠実に対応します。`,
};

export default function CompanyPage() {
  return (
    <div className="vg">
      <header className="subhd">
        <div className="in">
          <Link className="brand" href="/" aria-label={company.name}>
            <span className="vmark">V</span>
            <span className="bt">
              VILLAGE
              <small>{company.name}</small>
            </span>
          </Link>
          <Link className="back" href="/">
            ← トップへ戻る
          </Link>
        </div>
      </header>

      <main>
        {/* 代表あいさつ */}
        <section className="greet-page">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> MESSAGE
              </p>
              <div className="j">代表あいさつ</div>
            </div>

            <div className="greet full">
              <div className="greet-figure">
                <div
                  className="greet-img ph"
                  style={{
                    backgroundImage: `url('${greeting.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                  role="img"
                  aria-label={`${greeting.title} ${greeting.name}`}
                />
                <div className="sign">
                  <span className="role">{greeting.title}</span>
                  <span className="nm">{greeting.name}</span>
                </div>
              </div>
              <div className="greet-body">
                <h1>{greeting.lead}</h1>
                {greeting.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="company company-page">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> COMPANY
              </p>
              <div className="j">会社概要</div>
            </div>
            <CompanyTable />
            <div className="more">
              <Link className="btn-fill" href="/#contact">
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
