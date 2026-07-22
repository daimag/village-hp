import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/app/lib/company";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "会社紹介",
  description:
    "北九州市門司区の解体会社・株式会社ヴィレッジの会社紹介。大きな工事から、ご家庭一軒・空き家の解体、遺品整理まで。有資格者による品質管理と近隣配慮で、地域に根ざして誠実に対応します。",
};

const strengths = [
  {
    title: "有資格者による品質管理",
    desc: "一級土木施工管理技士が計画から施工まで一貫管理。建築物石綿含有建材調査者も在籍し、アスベスト事前調査も自社対応します。",
  },
  {
    title: "近隣への配慮を徹底",
    desc: "着手前のご説明・あいさつ回りから、養生・散水・時間帯配慮・定期清掃まで。ご近所トラブルを未然に防ぎます。",
  },
  {
    title: "片付けから解体までワンストップ",
    desc: "遺品整理・残置物の片付けから、建物の解体・整地・土地活用まで一社で完結。窓口ひとつで安心です。",
  },
];

export default function AboutPage() {
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
        <section className="about-page">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> ABOUT
              </p>
              <div className="j">会社紹介</div>
            </div>

            <div className="ab-lead">
              <h1>
                解体工事のイメージを、
                <br />
                変えていきたい。
              </h1>
              <p>
                私たちはそんな想いでスタートした、北九州・門司区の解体会社です。一級土木施工管理技士が現場を管理し、計画から施工まで一貫対応。建築物石綿含有建材調査者も在籍し、法令に基づくアスベスト事前調査にも自社で対応します。地域の暮らしと未来を、確かな技術と誠実な仕事で支えます。
              </p>
              <p className="ind">
                <strong>大きな工事だけでなく、ご家庭の解体こそ歓迎しています。</strong>
                「実家が空き家になった」「一軒だけ解体したい」「まずは遺品整理から」——
                個人のお客様のご相談を、残置物の片付けから解体・整地まで
                <strong>ワンストップ</strong>で、親身にお受けします。
              </p>
            </div>

            <div className="ab-strength">
              <h2>ヴィレッジの3つの強み</h2>
              <div className="cardgrid">
                {strengths.map((s, i) => (
                  <div className="ec" key={i}>
                    <div className="rno en">{String(i + 1).padStart(2, "0")}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ab-links more">
              <Link className="btn-fill" href="/company">
                代表あいさつ・会社概要を見る →
              </Link>
              <Link className="btn-ghost" href="/#contact">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
