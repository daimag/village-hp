# ブログ（記事・お知らせ）設置手順書

yumehoken と同じ方式（**Decap CMS ＋ コンテンツ専用リポジトリ**）で、クライアントが
`/admin` からGitHubログインして「記事」「お知らせ」を投稿 → 自動で本番公開できる仕組みです。
作成：2026-07-22

---

## 0. 全体像

```
クライアント →[ /admin ]→ village-hp-content（記事だけ・クライアントに開放）
                               │ push → Deploy Hook
                               ▼
       village-hp（コード本体・非公開）ビルド時に取り込み → Vercel公開
```
- 月額費用なし（GitHub＋Vercel無料枠）。コードは見せず、記事だけ渡せる。
- 記事の実体：Markdown（`news/*.md`）。画像は `uploads/`。

---

## 1. 実装済み（コード側・対応不要）

このリポジトリ（village-hp）に以下を実装済みです。

- `app/lib/posts.ts` … 記事ローダー（区分：**記事／お知らせ**）
- `app/blog`・`app/blog/[slug]`・`app/news`・`app/news/[slug]` … 一覧・詳細ページ
- `app/components/PostCard.tsx`・`PostArticle.tsx`・`UpdatesPreview.tsx`（トップ新着情報）
- `public/admin/`（`index.html`＋`config.yml`）… 投稿管理画面（Decap CMS）
- `app/api/auth`・`app/api/callback` … GitHub OAuth 認証
- `scripts/fetch-content.mjs` … ビルド時にコンテンツリポから取り込み（`build` に組込済み）
- `content/news/*.md` … 初期サンプル記事（コンテンツリポ未接続時はこれを表示）

ナビ・フッターに「ブログ」「お知らせ」を追加済み。

---

## 2. あなたの作業（GitHub・Vercel・アカウント）

> ⚠️ ここは私（AI）では実行できないため、手順に沿ってお願いします。認証情報は
> `_reference/アカウント情報.md`（非公開）に追記して保管してください。

### ① 投稿用アカウントを用意
- **投稿用 Googleアカウント（メール）** を作成（例：`village.cms@gmail.com`）。
- **投稿用 GitHubアカウント** を用意。
  - 簡単にするなら、既存の `village-hubuser` をそのまま投稿用に使ってもOK。
  - 分ける場合は上記Gmailで新規GitHubアカウントを作成（2FAはオフでID/PWログインが楽）。

### ② コンテンツ専用リポジトリを作成
- `daimag/village-hp-content` を **Public** で作成（Publicなら取り込みにトークン不要）。
- 中に以下を用意：
  - `news/` … 最初は空でOK（サンプルは本体の `content/news` にあり）
  - `uploads/` … 空フォルダ（`.gitkeep` を置く）
  - `.github/workflows/redeploy.yml` … 下記③で作成

### ③ push時に自動再デプロイ（Deploy Hook）
1. Vercel の該当プロジェクト → Settings → Git → **Deploy Hooks** で作成（branch: `main`）。URLをコピー。
2. `village-hp-content` リポジトリ → Settings → Secrets and variables → Actions →
   **`VERCEL_DEPLOY_HOOK`** という名前で上記URLを登録。
3. `village-hp-content` に `.github/workflows/redeploy.yml` を作成：

```yaml
name: Redeploy site
on:
  push:
    branches: [main]
jobs:
  hook:
    runs-on: ubuntu-latest
    steps:
      - run: curl -X POST "${{ secrets.VERCEL_DEPLOY_HOOK }}"
```

### ④ GitHub OAuthアプリを作成（/admin のログイン用）
- GitHub → Settings → Developer settings → **OAuth Apps** → New。
  - Application name：`Village CMS`（任意）
  - Homepage URL：`https://（本番URL）`
  - **Authorization callback URL**：`https://（本番URL）/api/callback`
- 発行された **Client ID** と **Client Secret** を控える。

### ⑤ Vercel に環境変数を設定
本体（village-hp）の Vercel → Settings → Environment Variables に追加：

| 変数名 | 値 |
|---|---|
| `CONTENT_REPO` | `daimag/village-hp-content` |
| `GITHUB_OAUTH_CLIENT_ID` | ④のClient ID |
| `GITHUB_OAUTH_CLIENT_SECRET` | ④のClient Secret |
| `CONTENT_REPO_TOKEN` | （コンテンツリポをPrivateにした場合のみ・read権限トークン）|

設定後、**Redeploy** で反映。

### ⑥ config.yml の本番URLを更新
`public/admin/config.yml` の `base_url` を本番URLに変更（初期は `https://village-hp.vercel.app`）。
ドメイン確定後（例 `https://village2024.jp`）も、ここと④のOAuthアプリ2つのURLを合わせて更新。

### ⑦ 投稿アカウントを content リポへ招待
- `daimag/village-hp-content` → Settings → Collaborators で、投稿用アカウントを
  **Write権限**で招待 → 承認。**コード本体リポ（village-hp）には招待しない。**

---

## 3. 記事の投稿方法（クライアント向け）

1. ブラウザで **`https://（本番URL）/admin/`** を開く。
2. 「Login with GitHub」→ 投稿用アカウントのID/パスワードでログイン。
3. 「記事・お知らせ」→ **New 投稿**。
   - **投稿日／タイトル**（必須）
   - **区分**：`記事`（ブログ）または `お知らせ` を選ぶ
   - **画像**（任意・1枚）／**本文**（Markdown・任意）
4. **Publish** → 数十秒〜数分で本番サイトに反映（自動再デプロイ）。
5. 編集・削除も同じ画面から可能。

---

## 4. 補足

- **ローカル確認**：`pnpm dev` → `/blog`・`/news`・`/admin`（※/adminのログインは本番URL設定後）。
- コンテンツリポ未接続でも、本体同梱の `content/news` のサンプルで一覧・詳細は表示されます。
- 区分は **記事＝/blog、お知らせ＝/news** に自動振り分け。トップの「新着情報」に最新3件を表示。
- 参考：yumehoken の `docs/cms-reusable-guide.md`（同方式の詳細プレイブック）。
