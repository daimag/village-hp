import { services } from "@/app/lib/company";
import { ServiceIcon } from "./ServiceIcon";

export function Services() {
  return (
    <section id="service" className="service">
      <div
        className="bg ph dark"
        style={{
          backgroundImage: "url('/designs/img/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> SERVICE
          </p>
          <div className="j">事業内容</div>
        </div>
        <p className="lead">
          建物解体を軸に、土地開発・リフォーム・リノベーションまで。北九州で幅広く対応しています。
        </p>
        <div className="grid">
          {services.map((s, i) => (
            <article key={s.title} className="card">
              <span
                className="img"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <span className="cih">
                <ServiceIcon icon={s.icon} className="ico" />
              </span>
              <div className="meta">
                <div className="no">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
