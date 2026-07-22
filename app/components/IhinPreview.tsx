import Link from "next/link";
import { estateServices } from "@/app/lib/company";

export function IhinPreview() {
  const chips = estateServices.slice(0, 5);
  return (
    <section id="ihin" className="ihin">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> ESTATE CLEANUP
          </p>
          <div className="j">遺品整理・生前整理</div>
        </div>
        <p className="lead">
          <strong>遺品整理・空き家の片付けから、そのまま解体まで。</strong>
          思い出を大切に、心を込めて。仕分け・処分・買取・清掃、そして建物の
          解体・整地まで<strong>ワンストップ</strong>で対応します。遠方にお住まいの方もお任せください。
        </p>
        <div className="ihin-chips">
          {chips.map((c, i) => (
            <span className="chip" key={i}>
              {c.title}
            </span>
          ))}
        </div>
        <div className="more">
          <Link className="btn-fill" href="/ihin-seiri">
            遺品整理の詳細を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
