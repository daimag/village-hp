# 株式会社ヴィレッジ 公式サイト

北九州市門司区の解体工事・土地開発・不動産・リフォーム／リノベーションを手がける
**株式会社ヴィレッジ** のコーポレートサイトです。

## 技術スタック

- [Next.js 16](https://nextjs.org/)（App Router）
- TypeScript
- Tailwind CSS v4
- Noto Sans JP（Google Fonts）

## 開発

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動（http://localhost:3000）
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLint
```

## 構成

```
app/
├─ layout.tsx           # 全体レイアウト・SEOメタ・構造化データ
├─ page.tsx             # トップページ（各セクションを合成）
├─ globals.css          # Tailwind・フォント設定
├─ lib/company.ts       # 会社情報・事業内容の一元管理（ここを編集すれば全体に反映）
└─ components/          # Header / Hero / Services / Strengths / Company / Contact / Footer など
```

会社情報・電話番号・事業内容などを変更する場合は、原則 [`app/lib/company.ts`](app/lib/company.ts) を編集してください。

## 会社概要

- 会社名：株式会社ヴィレッジ
- 代表者：代表取締役 中川 基次（一級土木施工管理技士）
- 所在地：〒800-0042 福岡県北九州市門司区上馬寄1丁目8-1-1203
- TEL：090-9566-9563 / MAIL：village2024@outlook.jp
