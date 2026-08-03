import Link from "next/link";
import { estateServices } from "@/app/lib/company";

export function IhinPreview() {
  const chips = estateServices.slice(0, 5);
  return (
    <section id="ihin" className="ihin split-sec">
      {/* 写真は左端まで抜く（ABOUTと左右を入れ替えて視線を振る） */}
      <div className="wrap split alt">
        <div className="split-media">
          <div
            className="a ph"
            style={{
              backgroundImage: "url('/designs/img/interior.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="split-body">
          <p className="t en">
            <span className="sl">/</span> ESTATE CLEANUP
          </p>
          <div className="j">遺品整理・生前整理</div>
          <h2>
            片付けから解体まで、
            <br />
            ひとつの窓口で。
          </h2>
          <p>
            大切なご家族が遺されたお品を、ご遺族のお気持ちに寄り添いながら丁寧に整理します。
            仕分け・処分・買取・清掃、そして建物の解体・整地まで自社で対応。遠方にお住まいの方もお任せください。
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
      </div>
    </section>
  );
}
