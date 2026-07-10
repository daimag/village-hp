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

export type Service = {
  title: string;
  description: string;
  icon: "demolition" | "consulting" | "land" | "reform" | "renovation";
  image: string;
};

export const services: Service[] = [
  {
    title: "建物解体工事",
    description:
      "戸建住宅から店舗・ビルまで、木造・鉄骨・RC造に対応。近隣に配慮した安全管理と適正な分別解体を徹底します。",
    icon: "demolition",
    image: "/designs/img/001.jpg",
  },
  {
    title: "解体業コンサルタント",
    description:
      "解体計画の立案から届出・許認可、見積の精査まで。一級土木施工管理技士が最適なプランをご提案します。",
    icon: "consulting",
    image: "/designs/img/002.jpg",
  },
  {
    title: "土地開発",
    description:
      "造成・整地・インフラ整備まで、土地の価値を最大化する開発をトータルでサポートします。",
    icon: "land",
    image: "/designs/img/003.jpg",
  },
  {
    title: "リフォーム事業",
    description:
      "水回りから外装・内装まで、住まいの困りごとを解決。暮らしやすさと資産価値の向上をお手伝いします。",
    icon: "reform",
    image: "/designs/img/004.jpg",
  },
  {
    title: "リノベーション事業",
    description:
      "中古住宅を新たな価値へ。ライフスタイルに合わせた空間づくりをデザインから施工まで一貫して行います。",
    icon: "renovation",
    image: "/designs/img/005.jpg",
  },
];

// 近隣対策（他社に負けない点：ヒアリング反映）
export const measures = [
  { no: "01", title: "事前に工事内容をご説明", description: "着手前に周辺の皆さまへ工事内容をご説明します。", image: "/designs/img/0001.jpg" },
  { no: "02", title: "現場周りの定期清掃", description: "工事中も現場周りの清掃を徹底し、きれいに保ちます。", image: "/designs/img/0002.jpg" },
  { no: "03", title: "ご近所様へのあいさつ徹底", description: "着手前・完了後のあいさつ回りで信頼関係を大切に。", image: "/designs/img/0003.jpg" },
];

// 安全対策
export const safety = [
  { no: "01", title: "有資格者による現場管理", description: "一級土木施工管理技士が計画から施工まで管理。", image: "/designs/img/demo2.jpg" },
  { no: "02", title: "アスベスト事前調査", description: "建築物石綿含有建材調査者が法令に基づき調査。", image: "/designs/img/interior.jpg" },
  { no: "03", title: "適正な分別解体", description: "廃棄物を適正に分別・処理し、環境にも配慮。", image: "/designs/img/scrap.jpg" },
];

// 施工実績ギャラリー（※写真は差し替え前提）
export const works = [
  { image: "/designs/img/demo1.jpg", big: true },
  { image: "/designs/img/excavator.jpg", big: false },
  { image: "/designs/img/rubble.jpg", big: false },
  { image: "/designs/img/land.jpg", big: false },
  { image: "/designs/img/truck.jpg", big: false },
];

// ナビゲーション
export const nav = [
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#measures", label: "MEASURES" },
  { href: "#works", label: "WORKS" },
  { href: "#company", label: "COMPANY" },
];
