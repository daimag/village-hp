import type { Metadata } from "next";
import Link from "next/link";
import {
  estateServices,
  estateWorkFlow,
  estatePricing,
  estateFlow,
  estateFaq,
  estateArea,
  estateGallery,
} from "@/app/lib/company";
import { SubHeader } from "../components/SubHeader";
import { EstateIcon } from "../components/EstateIcon";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "遺品整理・生前整理｜解体までワンストップ",
  description:
    "北九州市門司区の遺品整理・生前整理・空き家の片付け。仕分け・処分・買取・清掃から建物の解体・整地まで自社でワンストップ対応。見積もり無料。思い出を大切に、心を込めて丁寧に。",
};

export default function EstateCleanupPage() {
  return (
    <div className="vg">
      <SubHeader />

      <main>
        {/* イントロ */}
        <section className="estate-intro">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> ESTATE CLEANUP
              </p>
              <div className="j">遺品整理・生前整理</div>
            </div>
            <p className="lead">
              <strong>思い出を大切に、心を込めて。</strong>
              仕分け・処分・買取・清掃から、建物の解体・整地まで自社でワンストップ。
              遠方にお住まいの方もお任せください。
            </p>
            <div className="more">
              <Link className="btn-fill" href="/contact">
                無料お見積もり・ご相談はこちら →
              </Link>
            </div>
          </div>
        </section>

        {/* 対応サービス */}
        <section className="estate-serv">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> SERVICE
              </p>
              <div className="j">対応サービス</div>
            </div>
            <div className="cardgrid">
              {estateServices.map((s, i) => (
                <div className="ec" key={i}>
                  <div className="ec-ic">
                    <EstateIcon icon={s.icon} className="ico" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 作業の流れ（整理→清掃→解体） */}
        <section className="estate-work">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> ONE-STOP
              </p>
              <div className="j">整理から解体まで、ワンストップ</div>
            </div>
            <p className="lead">
              何社も手配する必要はありません。<strong>すべて自社で、まとめて。</strong>
            </p>
            <div className="wflow">
              {estateWorkFlow.map((s, i) => (
                <div className="wstep" key={i}>
                  <div className="wic">
                    <EstateIcon icon={s.icon} className="ico" />
                  </div>
                  <div className="wno en">STEP {i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 作業実績（写真） */}
        {/* 写真が1枚も無いあいだはセクションごと出さない（空枠が並ぶのを防ぐ） */}
        {estateGallery.some((g) => g.src) && (
        <section className="estate-gallery">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> GALLERY
              </p>
              <div className="j">作業実績（写真）</div>
            </div>
            <div className="gal">
              {estateGallery
                .filter((g) => g.src)
                .map((g, i) => (
                  <figure key={i}>
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url('${g.src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <figcaption>{g.caption}</figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </section>
        )}

        {/* 料金の目安 */}
        <section className="estate-price">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> PRICE
              </p>
              <div className="j">費用の目安（間取り別）</div>
            </div>
            <div className="box">
              {estatePricing.map((p, i) => (
                <div className="row" key={i}>
                  <dt>{p.type}</dt>
                  <dd>{p.price}</dd>
                </div>
              ))}
            </div>
            <p className="note">
              ※上記は一般的な相場の目安です。実際の費用はお荷物の量・間取り・建物の状況により変動します。
              買取できる品がある場合は費用を差し引けることもあります。
              <strong>訪問での無料お見積もり</strong>で正確な金額をご提示します。
            </p>
          </div>
        </section>

        {/* ご依頼の流れ */}
        <section className="estate-flow">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> FLOW
              </p>
              <div className="j">ご依頼の流れ</div>
            </div>
            <div className="flow">
              {estateFlow.map((f) => (
                <div className="step" key={f.no}>
                  <div className="fno en">{f.no}</div>
                  <div className="ft">
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section className="estate-area">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> AREA
              </p>
              <div className="j">対応エリア</div>
            </div>
            <p className="lead">{estateArea}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="estate-faq">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> FAQ
              </p>
              <div className="j">よくあるご質問</div>
            </div>
            <div className="faq">
              {estateFaq.map((f, i) => (
                <div className="qa" key={i}>
                  <div className="q">
                    <span className="mk en">Q</span>
                    {f.q}
                  </div>
                  <div className="a">
                    <span className="mk en">A</span>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
            <div className="more">
              <Link className="btn-fill" href="/contact">
                無料お見積もり・ご相談はこちら →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
