// 株式会社ヴィレッジ 会社情報（名刺 _reference/business-card.jpeg より）
export const company = {
  name: "株式会社ヴィレッジ",
  nameEn: "Village Inc.",
  representative: "中川 基次",
  representativeEn: "Mototsugu Nakagawa",
  representativeTitle: "代表取締役",
  license: "一級土木施工管理技士",
  postalCode: "800-0042",
  address: "福岡県北九州市門司区上馬寄1丁目8-1-1203",
  tel: "090-9566-9563",
  email: "village2024@outlook.jp",
  businessHours: "8:00 〜 19:00（日曜・祝日を除く）",
  catchphrase: "解体から、まちの未来をつくる。",
  description:
    "北九州市門司区を拠点に、建物解体工事・土地開発・不動産・リフォームまでをワンストップでご提供。安全・丁寧・スピーディーな施工で、地域の暮らしと未来を支えます。",
} as const;

export type Service = {
  title: string;
  description: string;
  icon: "demolition" | "consulting" | "land" | "realestate" | "reform" | "renovation";
};

export const services: Service[] = [
  {
    title: "建物解体工事",
    description:
      "戸建住宅から店舗・ビルまで、木造・鉄骨・RC造に対応。近隣に配慮した安全管理と適正な分別解体を徹底します。",
    icon: "demolition",
  },
  {
    title: "解体業コンサルタント",
    description:
      "解体計画の立案から届出・許認可、見積の精査まで。一級土木施工管理技士が最適なプランをご提案します。",
    icon: "consulting",
  },
  {
    title: "土地開発",
    description:
      "造成・整地・インフラ整備まで、土地の価値を最大化する開発をトータルでサポートします。",
    icon: "land",
  },
  {
    title: "不動産売買",
    description:
      "解体後の土地活用や売却、物件の買取までワンストップ。地域に精通したスタッフが親身に対応します。",
    icon: "realestate",
  },
  {
    title: "リフォーム事業",
    description:
      "水回りから外装・内装まで、住まいの困りごとを解決。暮らしやすさと資産価値の向上をお手伝いします。",
    icon: "reform",
  },
  {
    title: "リノベーション事業",
    description:
      "中古住宅を新たな価値へ。ライフスタイルに合わせた空間づくりをデザインから施工まで一貫して行います。",
    icon: "renovation",
  },
];

export const strengths = [
  {
    number: "01",
    title: "有資格者による確かな品質",
    description:
      "一級土木施工管理技士が現場を管理。計画から施工まで責任を持って対応します。",
  },
  {
    number: "02",
    title: "解体から活用までワンストップ",
    description:
      "解体・土地開発・不動産・リフォームを自社で一貫対応。窓口ひとつで完結します。",
  },
  {
    number: "03",
    title: "地域密着・スピード対応",
    description:
      "北九州エリアを中心にフットワーク軽く対応。お見積りは無料でご相談いただけます。",
  },
];
