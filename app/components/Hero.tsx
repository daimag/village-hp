import { company } from "@/app/lib/company";

// ヒーロー背景：クロスフェード＋ズームイン（Ken Burns）。
// 「建った家 → 解体後の更地」への変化が伝わるよう、同一現場の before→after を連続配置。
const heroSlides = [
  "/designs/img/hero.jpg", // 現状のイメージ写真（現場・重機）
  "/works/b-before.jpg", // 空き家（平屋）
  "/works/b-after.jpg", //   → 解体後の更地
  "/works/a-before.jpg", // 住宅（2階建）
  "/works/a-after.jpg", //   → 解体後の更地
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bg">
        <div className="slides">
          {heroSlides.map((src, i) => (
            <div
              key={src}
              className="slide"
              style={{ backgroundImage: `url('${src}')`, animationDelay: `${i * 5}s` }}
            />
          ))}
        </div>
      </div>
      <div className="in">
        <h1 className="en">
          {company.catchphraseEn[0]}
          <br />
          {company.catchphraseEn[1]}
        </h1>
        <div className="jp">{company.catchphraseJp}</div>
        <p>
          北九州・門司区を拠点に、解体工事・土地開発・リフォームをワンストップで。ひとつひとつの現場に、誠実に向き合います。
        </p>
      </div>
      <div className="scroll en">SCROLL</div>
    </section>
  );
}
