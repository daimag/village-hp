import Link from "next/link";
import { cases } from "@/app/lib/company";
import { CaseCard } from "./CaseCard";

export function Works() {
  const preview = cases.slice(0, 2);
  return (
    <section id="works" className="works">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> WORKS
          </p>
          <div className="j">解体の施工例</div>
        </div>
        <p className="lead">
          <strong>ご家庭・空き家の解体こそ、私たちの得意分野です。</strong>
          「実家が空き家になった」「一軒だけ解体したい」——そんな個人のお客様の解体を、
          ビフォーアフターと費用の目安でご紹介します。
        </p>
        <div className="cases">
          {preview.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
        <p className="note">
          ※費用は建物の規模・構造・立地などにより異なります。表示は一例（目安）です。
        </p>
        <div className="more">
          <Link className="btn-fill" href="/works">
            施工例をもっと見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
