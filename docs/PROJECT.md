# 株式会社ヴィレッジ HP制作プロジェクト

北九州市門司区の解体・不動産・リフォーム会社「株式会社ヴィレッジ」のコーポレートサイト制作。

---

## 1. 発注元情報（名刺より）

| 項目 | 内容 |
|---|---|
| 会社名 | 株式会社ヴィレッジ（Village Inc.） |
| 代表者 | 代表取締役　中川 基次（Mototsugu Nakagawa） |
| 資格 | 一級土木施工管理技士 |
| 所在地 | 〒800-0042　福岡県北九州市門司区上馬寄1丁目8-1-1203 |
| 電話 | 090-9566-9563 |
| メール | village2024@outlook.jp |
| 事業内容 | 建物解体工事 / 解体業コンサルタント / 土地開発 / 不動産売買 / リフォーム事業 / リノベーション事業 |
| ロゴ | 青×緑の「V」マーク |

> 一次資料：`_reference/business-card.jpeg`（名刺スキャン。gitignore済み・非公開）

---

## 2. 技術スタック / 環境

- **Next.js 16**（App Router, Turbopack）
- **TypeScript**
- **Tailwind CSS v4**
- **Noto Sans JP**（Google Fonts）
- Node.js v24 / **pnpm**（パッケージマネージャ。`packageManager` 指定・`corepack enable` で有効化）

### 開発コマンド

```bash
cd C:\Users\user\Desktop\village
pnpm install     # 初回のみ（依存インストール）
pnpm dev         # 開発サーバー → http://localhost:3000
pnpm build       # 本番ビルド
pnpm start       # 本番サーバー
pnpm lint        # ESLint
```

> ⚠️ サイトを表示するには `pnpm dev` の起動が必要（起動中のみ localhost:3000 が見られる）。

---

## 3. サイト構成

トップページ1枚（ランディング）構成。各セクションは `app/components/` に分割。

| セクション | ファイル | 内容 |
|---|---|---|
| ヘッダー | `Header.tsx` | 追従ナビ・電話CTA・モバイルメニュー |
| ヒーロー | `Hero.tsx` | キャッチコピー「解体から、まちの未来をつくる。」 |
| 事業内容 | `Services.tsx` | 6事業カード（アイコン `ServiceIcon.tsx`） |
| 選ばれる理由 | `Strengths.tsx` | 強み3点 |
| 会社概要 | `Company.tsx` | 会社情報テーブル |
| お問い合わせ | `Contact.tsx` | 電話・メール導線 |
| フッター | `Footer.tsx` | 住所・連絡先 |

- **会社情報・事業内容・強みは [`app/lib/company.ts`](../app/lib/company.ts) に一元管理。** 文言変更は原則ここを編集すれば全体に反映。
- SEO：`app/layout.tsx` に metadata・OGP・構造化データ（JSON-LD, GeneralContractor）を設定。
- ロゴ：`app/components/Logo.tsx`（SVGで再現。正式ロゴデータ入手後に差し替え予定）。

---

## 4. ヒアリングシート（客先確認用）

- ファイル：`docs/ヴィレッジHP_ヒアリングシート.xlsx`
- 生成スクリプト：`docs/generate_hearing_xlsx.py`（openpyxl。文言変更→再実行で作り直し）
- **1シート構成**（お客様が身構えないよう、タブ切替なしの縦1枚）。
- 列：`項目 / 現在の制作内容（ドラフト） / ヒアリング記入欄`。見出し行は固定表示。
- 収録：ごあいさつ → TOP → 事業内容 → 選ばれる理由 → 会社概要 → 写真リスト → デザイン/参考URL → お問い合わせ・**希望ドメイン**。

### 再生成方法

```bash
# Excelを閉じてから
python docs/generate_hearing_xlsx.py
```

---

## 5. Git / リモート

- リモート：https://github.com/daimag/village-hp.git （`main`）
- `_reference/`（名刺スキャン）は `.gitignore` で除外。
- コミットは日本語。ローカルは `C:\Users\user\Desktop\village`。

---

## 6. 次回タスク（TODO）

- [ ] **確認用サイトの公開**（Vercel等）— お客様がドラフトを閲覧できるURLを用意し、ヒアリングシート表紙の「確認用URL」に記入
- [ ] ヒアリングシートを客先へ送付（→ 送付メール文面の作成が必要なら別途）
- [ ] 回収後、`app/lib/company.ts` 等に内容反映
- [ ] 正式ロゴデータ・現場写真の差し替え
- [ ] 希望ドメインの取得手続き
- [ ] （必要に応じて）お問い合わせフォーム・Googleマップ設置

---

## 7. 参考

- 本プロジェクトのヒアリングシート形式は `sanadaroko` プロジェクト（真田炉工HP）の
  `generate_hearing_xlsx.py` を参考に、ヴィレッジ向けに簡素化（1シート化）したもの。
