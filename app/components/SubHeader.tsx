import { Header } from "./Header";

// サブページ用ヘッダー：トップと同じ本ヘッダー（ナビ付き）を常時ソリッドで表示。
// 旧APIの back / backLabel は受け取るが未使用（呼び出し側の型エラー回避のため）。
export function SubHeader(_props?: { back?: string; backLabel?: string }) {
  return <Header solid />;
}
