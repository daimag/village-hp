import { concerns } from "@/app/lib/company";
import { ConcernIcon } from "./ConcernIcon";

export function Concerns() {
  return (
    <section id="concerns" className="concerns">
      {/* 背景は受領写真（若葉の空き家）。テーマと合うため実物を使い、強めのフィルタで質感として敷く */}
      <div
        className="bg ph"
        style={{
          backgroundImage: "url('/works/c5-before.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 62%",
        }}
      />
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> CONCERNS
          </p>
          <div className="j">こんなお悩みありませんか？</div>
        </div>
        <ul className="worry">
          {concerns.map((c) => (
            <li key={c.icon}>
              <span className="wi">
                <ConcernIcon icon={c.icon} className="ico" />
              </span>
              <h3>{c.title}</h3>
              <p>{c.note}</p>
            </li>
          ))}
        </ul>
        <p className="worry-msg">
          ひとつでも当てはまれば、<strong>ヴィレッジにご相談ください。</strong>
          <br />
          片付けから解体・整地まで、地域の会社としてまとめて解決します。
        </p>
        <div className="more">
          <a className="btn-fill" href="/contact">
            まずは無料で相談する →
          </a>
        </div>
      </div>
    </section>
  );
}
