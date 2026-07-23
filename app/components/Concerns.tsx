import { concerns } from "@/app/lib/company";

export function Concerns() {
  return (
    <section id="concerns" className="concerns">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> CONCERNS
          </p>
          <div className="j">こんなお悩みありませんか？</div>
        </div>
        <ul className="worry">
          {concerns.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <p className="worry-msg">
          ひとつでも当てはまれば、ヴィレッジにご相談ください。
          <br />
          片付けから解体・整地まで、地域の会社としてまとめて解決します。
        </p>
        <div className="more">
          <a className="btn-fill" href="#contact">
            まずは無料で相談する →
          </a>
        </div>
      </div>
    </section>
  );
}
