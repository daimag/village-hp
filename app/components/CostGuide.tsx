import { costGuide } from "@/app/lib/company";

export function CostGuide() {
  return (
    <section id="cost" className="cost">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> COST
          </p>
          <div className="j">解体費用の目安</div>
        </div>
        <p className="lead">
          「いくらかかるの？」にお答えします。まずは目安を、正確な金額は
          <strong>無料の現地お見積もり</strong>でご案内します。
        </p>
        <div className="cost-grid">
          <div className="cost-box">
            <h3>構造別の坪単価</h3>
            <dl>
              {costGuide.structures.map((s, i) => (
                <div className="crow" key={i}>
                  <dt>{s.name}</dt>
                  <dd>{s.per}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="cost-box">
            <h3>木造住宅の総額目安</h3>
            <dl>
              {costGuide.examples.map((e, i) => (
                <div className="crow" key={i}>
                  <dt>{e.size}</dt>
                  <dd>{e.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="note">
          ※2026年の一般的な相場の目安です。立地・重機の可否・残置物の量・付帯工事（ブロック塀・樹木・地中埋設物など）で変動します。買取や補助金で費用を抑えられる場合もあります。
        </p>
        <div className="more">
          <a className="btn-fill" href="#contact">
            無料お見積もり・ご相談 →
          </a>
        </div>
      </div>
    </section>
  );
}
