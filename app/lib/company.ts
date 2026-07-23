// 株式会社ヴィレッジ 会社情報（名刺 _reference/business-card.jpeg + 客先ヒアリングシートより）
export const company = {
  name: "株式会社ヴィレッジ",
  nameEn: "Village Inc.",
  representative: "中川 基次",
  representativeEn: "Mototsugu Nakagawa",
  representativeTitle: "代表取締役",
  license: "一級土木施工管理技士",
  established: "2024年",
  postalCode: "800-0042",
  address: "福岡県北九州市門司区上馬寄1丁目8-1-1203",
  tel: "090-9566-9563",
  email: "village2024@outlook.jp",
  businessHours: "8:00 〜 18:00（日曜・祝日を除く）",
  catchphrase: "解体工事で未来のかけ橋を創造する",
  catchphraseEn: ["CREATE THE BRIDGE", "TO THE FUTURE"],
  catchphraseJp: "解体で、未来をつなぐ",
  description:
    "北九州市門司区を拠点に、建物解体工事・土地開発・リフォームまでをワンストップでご提供。安全・丁寧・スピーディーな施工で、地域の暮らしと未来を支えます。",
  // 許可・登録番号
  demolitionLicense: "解体工事業登録番号：福岡県知事　第1456号",
  asbestosLicense: "建築物石綿含有建材調査者：第21071177号",
} as const;

// 代表あいさつ（AIで作成。B2C戦略・地域密着・誠実さを反映）
export const greeting = {
  heading: "ごあいさつ",
  lead: "「解体」のイメージを、変えていきたい。",
  image: "/company/president.jpg",
  title: "代表取締役",
  name: "中川 基次",
  body: [
    "「解体」と聞くと、少し身構えてしまう方もいらっしゃるかもしれません。私たちヴィレッジは、その「こわい・わかりにくい」というイメージを変えたいという想いで、この会社を立ち上げました。",
    "北九州・門司区を拠点に、大きな工事はもちろん、ご家庭一軒の解体や空き家の片付け、遺品整理まで、一つひとつのご依頼に丁寧に向き合っています。「実家が空き家になって困っている」「何から相談すればいいか分からない」——そんなお悩みにこそ、地域の会社として親身にお応えしたいと考えています。",
    "一級土木施工管理技士として現場に立ち続けてきた経験と、有資格者による確かな管理。そして、着手前のご説明から近隣へのあいさつ回りまで、ご近所様への配慮を何より大切にしています。片付けから解体・整地まで、窓口ひとつでお任せいただけるのも私たちの強みです。",
    "お客様、そして地域の皆さまに安心していただける仕事を、誠実に積み重ねてまいります。どんな小さなことでも、まずはお気軽にご相談ください。",
  ],
};

export type Service = {
  slug: string;
  title: string;
  summary: string; // カード用の短い概要
  description: string; // 詳細ページ用リード
  points: string[]; // 詳細ページの対応内容
  icon: "demolition" | "consulting" | "land" | "reform" | "renovation";
  image: string;
};

export const services: Service[] = [
  {
    slug: "kaitai",
    title: "建物解体工事",
    summary: "木造・鉄骨・RC造に対応。戸建から店舗・ビルまで安全に。",
    description:
      "戸建住宅から店舗・ビルまで、木造・鉄骨・RC造に対応。近隣に配慮した安全管理と適正な分別解体を徹底します。ご家庭一軒・空き家の解体もお気軽にご相談ください。",
    points: [
      "木造・鉄骨・RC造まで幅広く対応",
      "戸建住宅・空き家から店舗・ビルまで",
      "近隣に配慮した養生・散水・安全管理",
      "廃棄物の適正な分別解体・処理",
    ],
    icon: "demolition",
    image: "/designs/img/001.jpg",
  },
  {
    slug: "consulting",
    title: "解体業コンサルタント",
    summary: "計画立案から届出・見積精査まで、有資格者がサポート。",
    description:
      "解体計画の立案から届出・許認可、見積の精査まで。一級土木施工管理技士が、無駄のない最適なプランをご提案します。",
    points: [
      "解体計画の立案・工程管理",
      "届出・許認可の手続き支援",
      "見積の精査・コストの最適化",
      "有資格者による技術サポート",
    ],
    icon: "consulting",
    image: "/designs/img/002.jpg",
  },
  {
    slug: "land",
    title: "土地開発",
    summary: "造成・整地・インフラ整備で土地の価値を最大化。",
    description:
      "造成・整地・インフラ整備まで、土地の価値を最大化する開発をトータルでサポート。解体から活用まで一貫してお任せいただけます。",
    points: [
      "造成・整地",
      "インフラ整備",
      "土地の有効活用のご提案",
      "解体〜活用までワンストップ",
    ],
    icon: "land",
    image: "/designs/img/003.jpg",
  },
  {
    slug: "reform",
    title: "リフォーム事業",
    summary: "水回り・内外装まで、住まいの困りごとを解決。",
    description:
      "水回りから外装・内装まで、住まいの困りごとを解決。暮らしやすさと資産価値の向上をお手伝いします。小さな修繕もご相談ください。",
    points: [
      "水回り・内装・外装のリフォーム",
      "小さな修繕から対応",
      "住まいの困りごとを解決",
      "暮らしやすさ・資産価値の向上",
    ],
    icon: "reform",
    image: "/designs/img/004.jpg",
  },
  {
    slug: "renovation",
    title: "リノベーション事業",
    summary: "中古住宅を新たな価値へ。設計から施工まで一貫。",
    description:
      "中古住宅を新たな価値へ。ライフスタイルに合わせた空間づくりを、デザインから施工まで一貫して行います。",
    points: [
      "中古住宅を新たな価値へ",
      "ライフスタイルに合わせた設計",
      "デザインから施工まで一貫対応",
      "空間の可能性を最大化",
    ],
    icon: "renovation",
    image: "/designs/img/005.jpg",
  },
];

// 近隣対策（6つの取り組み。ヒアリング＋他社事例を参考に補強）
export const measures = [
  { no: "01", title: "事前の工事説明", description: "着手前に、周辺の皆さまへ工事内容・期間を丁寧にご説明します。" },
  { no: "02", title: "あいさつ回りの徹底", description: "着手前と完了後、ご近所へごあいさつ。信頼関係を大切にします。" },
  { no: "03", title: "養生・防音シート", description: "建物をしっかり覆い、騒音・粉じん・破片の飛散を抑えます。" },
  { no: "04", title: "こまめな散水", description: "解体中は水をまき、粉じんの飛散を最小限に抑えます。" },
  { no: "05", title: "作業時間帯への配慮", description: "生活リズムに配慮し、時間帯を守って作業を行います。" },
  { no: "06", title: "現場周りの定期清掃", description: "工事中も周辺をこまめに清掃し、きれいな状態を保ちます。" },
];

// 安全対策
export const safety = [
  { no: "01", title: "有資格者による現場管理", description: "一級土木施工管理技士が計画から施工まで管理。", image: "/designs/img/1.jpg" },
  { no: "02", title: "アスベスト事前調査", description: "建築物石綿含有建材調査者が法令に基づき調査。", image: "/designs/img/2.jpg" },
  { no: "03", title: "適正な分別解体", description: "廃棄物を適正に分別・処理し、環境にも配慮。", image: "/designs/img/3.jpg" },
];

// 解体の施工例（ビフォーアフター＋概算費用）
// ※費用は一例（目安）。前後ペア・金額は社長確認のうえ更新すること。
export type DemolitionCase = {
  id: string;
  title: string;      // 例：木造2階建て住宅の解体
  structure: string;  // 構造・規模
  area?: string;      // エリア
  price: string;      // 費用の目安（例）
  before: string;
  after: string;
  comment?: string;
};

export const cases: DemolitionCase[] = [
  {
    id: "a",
    title: "2階建て住宅の解体・整地",
    structure: "木造2階建て（屋上バルコニー付）",
    area: "北九州市門司区",
    price: "約150万円〜",
    before: "/works/a-before.jpg",
    after: "/works/a-after.jpg",
    comment: "住宅街の中の建物を、近隣に配慮しながら解体。整地して駐車場として活用できる状態に。",
  },
  {
    id: "b",
    title: "空き家（平屋）の解体・整地",
    structure: "木造平屋（車庫付）",
    area: "北九州市門司区",
    price: "約100万円〜",
    before: "/works/b-before.jpg",
    after: "/works/b-after.jpg",
    comment: "長く空き家だった住宅を解体。残置物の整理から整地までワンストップで対応。",
  },
];

// 遺品整理（内容・料金の目安・流れ）
// 料金は一般的な相場の目安（間取り別）。実費は荷物量・現場状況で変動 → 訪問無料見積もり前提。
// こんなお悩みありませんか
export const estateWorries = [
  "遠方に住んでいて、実家の片付けになかなか行けない",
  "何から手をつければいいのか分からない",
  "大切な写真や思い出の品は残したい",
  "仏壇・お位牌・人形の処分に困っている",
  "片付けたあと、そのまま解体もお願いしたい",
  "費用がいくらかかるのか不安",
];

// 対応サービス
export const estateServices = [
  { icon: "sort" as const, title: "遺品整理", description: "残すもの・処分するものを、ご遺族と確認しながら一つひとつ丁寧に仕分け。搬出まで対応します。" },
  { icon: "living" as const, title: "生前整理", description: "お元気なうちに、ご本人と一緒に持ち物を整理。将来のご家族の負担を減らします。" },
  { icon: "house" as const, title: "空き家の片付け", description: "遠方の空き家の残置物もまとめて対応。遠くにお住まいの方もお任せください。" },
  { icon: "haul" as const, title: "不用品回収・処分", description: "家具・家電・粗大ごみを適正に分別・処分。分別の手間もお任せいただけます。" },
  { icon: "money" as const, title: "高価買取", description: "再利用できる品・価値ある品は買取し、費用のご負担を軽減します。" },
  { icon: "clean" as const, title: "清掃・特殊清掃", description: "搬出後のお部屋を清掃。必要に応じて専門的な清掃もご相談いただけます。" },
  { icon: "soul" as const, title: "供養・お焚き上げ", description: "仏壇・お位牌・人形など、大切な品の供養・お焚き上げを手配します。" },
  { icon: "demolish" as const, title: "解体・整地までワンストップ", description: "片付け後、そのまま建物の解体・整地まで自社で対応。何社も探す必要はありません。" },
];

// 選ばれる理由
export const estateReasons = [
  { title: "お見積もり無料・追加料金なし", description: "訪問でしっかり確認し、明朗な料金を事前にご提示します。" },
  { title: "解体まで自社でワンストップ", description: "片付けから解体・整地まで一社で完結。窓口が一つで安心です。" },
  { title: "地域密着（門司区・北九州）", description: "地元だから小回りが利き、フットワーク軽くお伺いします。" },
  { title: "買取で費用を軽減", description: "価値ある品は買取し、整理にかかる総額を抑えます。" },
  { title: "心情に寄り添う対応", description: "思い出を大切に、ご遺族のお気持ちに配慮して作業します。" },
  { title: "有資格の解体会社が運営", description: "一級土木施工管理技士・石綿含有建材調査者が在籍し安心。" },
];

// よくあるご質問
export const estateFaq = [
  { q: "遠方に住んでいても依頼できますか？", a: "はい。現地確認やお立会いの日程も含めてご相談いただけます。まずはお写真での事前相談も可能です。" },
  { q: "お見積もりは無料ですか？", a: "無料です。訪問でお荷物の量・建物の状況を確認し、明朗な費用をご提示します。追加料金は原則ありません。" },
  { q: "残しておきたい物を探してもらえますか？", a: "はい。現金・通帳・権利書・写真・形見など、大切な品を探してお渡しします。" },
  { q: "片付けと一緒に解体もお願いできますか？", a: "できます。片付けから建物の解体・整地まで、自社でワンストップ対応します。" },
  { q: "仏壇や人形の供養もできますか？", a: "ご相談いただけます。供養・お焚き上げの手配も承ります。" },
];

// 対応エリア
export const estateArea =
  "北九州市門司区を中心に、北九州市全域（小倉北区・小倉南区・戸畑区・八幡東区・八幡西区・若松区）に対応します。近隣地域もお気軽にご相談ください。";

// 作業実績ギャラリー（写真は後日差し替え。src が空なら「写真準備中」表示）
export const estateGallery = [
  { caption: "作業前の様子", src: "" },
  { caption: "仕分け・分別", src: "" },
  { caption: "搬出作業", src: "" },
  { caption: "作業後（清掃済み）", src: "" },
  { caption: "買取対応の品", src: "" },
  { caption: "スタッフの対応", src: "" },
];

export const estatePricing = [
  { type: "1R・1K", price: "3万〜8万円" },
  { type: "1LDK・2DK", price: "5万〜20万円" },
  { type: "2LDK", price: "12万〜30万円" },
  { type: "3LDK・一軒家", price: "15万〜80万円" },
];

// 作業の流れ（整理→搬出→清掃→解体：ワンストップ）※イラスト付き
export const estateWorkFlow = [
  { icon: "sort" as const, title: "仕分け・整理", desc: "思い出の品を大切に、残す物と処分する物を一つひとつ丁寧に分別します。" },
  { icon: "haul" as const, title: "搬出・処分／買取", desc: "不用品を適正に搬出・分別処分。価値ある品は買取で費用を軽減します。" },
  { icon: "clean" as const, title: "清掃", desc: "作業後のお部屋を清掃。必要に応じて専門的な清掃にも対応します。" },
  { icon: "demolish" as const, title: "解体・整地", desc: "空き家はそのまま建物の解体・整地まで、自社でワンストップ対応します。" },
];

// ご依頼の流れ（お問い合わせ〜完了）
export const estateFlow = [
  { no: "01", title: "お問い合わせ", description: "お電話またはフォームからお気軽にご相談ください。" },
  { no: "02", title: "訪問・無料お見積もり", description: "現地で荷物量・状況を確認し、明朗な費用をご提示します。" },
  { no: "03", title: "ご契約・日程調整", description: "ご納得いただいてからのご契約。ご都合に合わせて日程を調整します。" },
  { no: "04", title: "遺品整理作業", description: "仕分け・搬出・清掃まで、心を込めて丁寧に作業します。" },
  { no: "05", title: "立会い・最終確認", description: "大切な品のお渡しと、仕上がりをご一緒に確認します。" },
  { no: "06", title: "完了・お支払い", description: "作業完了。ご希望に応じて、解体・整地のご相談も承ります。" },
];

// 対応した建物の実例（写真ギャラリー。施工例ページ用）
export const caseGallery = [
  { src: "/works/g3.jpg", caption: "大型2階建て住宅の解体" },
  { src: "/works/g4.jpg", caption: "3階建て建物の解体" },
  { src: "/works/g1.jpg", caption: "木造平屋（古家）の解体" },
  { src: "/works/g2.jpg", caption: "庭木のある住宅の解体" },
  { src: "/works/g5.jpg", caption: "解体後の整地（更地）" },
];

// 個人向けのお悩み（集客フック）
export const concerns = [
  "実家が空き家になり、管理や固定資産税が負担になっている",
  "相続した家をどうすればいいか分からない",
  "一軒だけ・小さな家でも解体を頼めるのか不安",
  "解体費用がいくらかかるのか見当がつかない",
  "家財・遺品が残ったままで、片付けから困っている",
  "ご近所への騒音・ほこりのトラブルが心配",
];

// 解体費用の目安（2026年の相場ベース。実費は現地見積り）
export const costGuide = {
  structures: [
    { name: "木造", per: "約 4〜5 万円 / 坪" },
    { name: "鉄骨造", per: "約 5〜7 万円 / 坪" },
    { name: "RC造（鉄筋コンクリート）", per: "約 8〜12 万円 / 坪" },
  ],
  examples: [
    { size: "木造 20坪（約66㎡）", price: "約 80〜130 万円" },
    { size: "木造 30坪（約99㎡）", price: "約 120〜180 万円" },
    { size: "木造 40坪（約132㎡）", price: "約 160〜240 万円" },
  ],
};

// 解体のよくあるご質問（トップ用・SEO/AI要約対策）
export const kaitaiFaq = [
  { q: "一軒だけ・小さな家でも解体してもらえますか？", a: "はい。ご家庭一軒・空き家の解体こそ得意としています。物置や離れだけでも、お気軽にご相談ください。" },
  { q: "解体費用はどのくらいかかりますか？", a: "建物の構造・広さ・立地・残置物の量で変わります。木造なら坪あたり約4〜5万円が目安です。正確な金額は無料の現地お見積もりでご提示します。" },
  { q: "家財や遺品が残ったままでも大丈夫ですか？", a: "問題ありません。遺品整理・残置物の片付けから解体・整地まで、当社がまとめて対応します。" },
  { q: "ご近所への配慮はしてもらえますか？", a: "着手前のご説明・あいさつ回りから、養生・散水・作業時間帯への配慮・定期清掃まで徹底し、トラブルを未然に防ぎます。" },
  { q: "遠方に住んでいても依頼できますか？", a: "はい。現地確認やお立会いの日程調整も含めご相談いただけます。お写真での事前相談も可能です。" },
  { q: "見積もりは無料ですか？", a: "無料です。現地を確認して明朗な費用をご提示します。追加料金は原則ありません。" },
];

// 対応エリア（トップ用）
export const serviceArea =
  "北九州市門司区を中心に、小倉北区・小倉南区・戸畑区・八幡東区・八幡西区・若松区など北九州市全域に対応。近隣地域もお気軽にご相談ください。";

// ナビゲーション（完全日本語。各項目を独立ページへ直結。トップは各ページへの入口）
export const nav = [
  { href: "/about", label: "会社紹介" },
  { href: "/service", label: "事業内容" },
  { href: "/works", label: "施工例" },
  { href: "/ihin-seiri", label: "遺品整理" },
  { href: "/blog", label: "ブログ" },
  { href: "/news", label: "お知らせ" },
  { href: "/company", label: "会社概要" },
];
