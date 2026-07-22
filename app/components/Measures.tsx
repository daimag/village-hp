import { measures } from "@/app/lib/company";

export function Measures() {
  return (
    <section id="measures" className="measures">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> NEIGHBORHOOD MEASURES
          </p>
          <div className="j">近隣対策</div>
        </div>
        <p className="lead">
          解体工事は、ご近所様への配慮が第一。
          <strong>{measures.length}つの取り組み</strong>で、騒音・粉じん・トラブルを未然に防ぎます。
        </p>
        <div className="mgrid">
          {measures.map((m) => (
            <div className="mcard" key={m.no}>
              <div className="mno en">{m.no}</div>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
