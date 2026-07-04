import { safety } from "@/app/lib/company";

export function Safety() {
  return (
    <section id="safety" className="safety">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> SAFETY MEASURE
          </p>
          <div className="j">安全対策</div>
        </div>
        <p className="lead">
          有資格者による管理のもと、安全・法令遵守を徹底した施工を行います。
        </p>
        <div className="trio">
          {safety.map((s) => (
            <div className="it" key={s.no}>
              <div
                className="img ph"
                style={{ backgroundImage: `url('${s.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
