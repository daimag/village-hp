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
          解体工事は、ご近所様への配慮が第一。工事前のご説明から、あいさつ回り・清掃まで徹底します。
        </p>
        <div className="trio">
          {measures.map((m) => (
            <div className="it" key={m.no}>
              <div
                className="img ph"
                style={{ backgroundImage: `url('${m.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="no">{m.no}</div>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
