import { company } from "@/app/lib/company";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bg">
        <video
          className="herovid"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/designs/img/hero.jpg"
        >
          <source src="/designs/vid/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="in">
        <div className="slash" />
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
