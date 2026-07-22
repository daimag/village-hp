export function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <p className="t en">
            <span className="sl">/</span> ABOUT
          </p>
          <div className="j">ヴィレッジについて</div>
          <h2>
            解体工事のイメージを、
            <br />
            変えていきたい。
          </h2>
          <p>
            私たちはそんな想いでスタートした、北九州・門司区の解体会社です。一級土木施工管理技士が現場を管理し、計画から施工まで一貫対応。建築物石綿含有建材調査者も在籍し、法令に基づくアスベスト事前調査にも自社で対応します。地域の暮らしと未来を、確かな技術と誠実な仕事で支えます。
          </p>
          <p className="ind">
            <strong>大きな工事だけでなく、ご家庭の解体こそ歓迎しています。</strong>
            「実家が空き家になった」「一軒だけ解体したい」「まずは遺品整理から」——
            個人のお客様のご相談を、残置物の片付けから解体・整地まで
            <strong>ワンストップ</strong>で、親身にお受けします。まずはお気軽にどうぞ。
          </p>
          <p className="ab-more">
            <a className="btn-ghost" href="/about">
              会社紹介を見る →
            </a>
          </p>
        </div>
        <div className="imgwrap">
          <div
            className="a ph"
            style={{
              backgroundImage: "url('/designs/img/01.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="tagen">SINCE 2024</div>
        </div>
      </div>
    </section>
  );
}
