import { works } from "@/app/lib/company";

export function Works() {
  return (
    <section id="works" className="works">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> WORKS
          </p>
          <div className="j">施工実績</div>
        </div>
        <p className="lead">これまでの施工事例をご紹介します（※実績写真は掲載準備中）。</p>
        <div className="gal">
          {works.map((w, i) => (
            <div key={i} className={`g${w.big ? " big" : ""}`}>
              <div
                className="img ph"
                style={{ backgroundImage: `url('${w.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
            </div>
          ))}
        </div>
        <div className="more">
          <a className="btn-ghost" href="#contact">
            施工実績についてのお問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
