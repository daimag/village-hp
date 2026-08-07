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
- ⚠️ **招待は「送った」だけでは効きません。** 投稿用アカウント側で承諾するまで無権限です
  （GitHubの招待は**7日で失効**）。承諾ページ：`https://github.com/（owner）/（repo）/invitations`
- 権限が入ったかの確認コマンド（`push: true` になっていればOK）:
  ```bash
  curl -s -H "Authorization: Bearer <daimagのトークン>"     "https://api.github.com/repos/daimag/village-hp-content/collaborators?affiliation=all"     | grep -o '"login": *"[^"]*"\|"push": *[a-z]*'
  # 保留中の招待が残っていないかも確認
  curl -s -H "Authorization: Bearer <daimagのトークン>"     "https://api.github.com/repos/daimag/village-hp-content/invitations"
  ```

---

## 2-2. トラブル対応：/admin にログインできない

### 症状：`Your GitHub user account does not have access to this repo`（画面は「ログインしています…」で停止）

**この症状は yumehoken／ヴィレッジの2案件で発生しています。原因は2つのどちらかです。**

**原因A：ブラウザに残った古いトークン（頻度が高い）**

OAuth認証そのものは成功しており、`localStorage` に残った**権限が無い時期のトークン**が使い回されている状態。
権限を正しく設定した後でも、ブラウザ側が古いままだとこのエラーが出続けます。

対処（上から順に試す）:
1. `/admin` で **ログアウト → 再ログイン**
2. **シークレットウィンドウ**で `/admin` を開く（これで入れれば原因Aで確定）
3. それでも駄目なら DevTools → Application → Local Storage → 対象ドメインの
   `decap-cms-user` / `netlify-cms-user` を削除して再ログイン

**原因B：投稿アカウントに Write 権限が無い**

⑦の招待が未承諾または失効している。上記の確認コマンドで `push: true` を確認する。
**先に原因Aを潰してから権限を疑うこと**（権限は正しいのにブラウザ側が原因、というケースが実際にあった）。

### 切り分けの早見表

| 確認 | 結果 | 判断 |
|---|---|---|
| シークレットウィンドウで入れる | 入れる | 原因A（ブラウザのトークン） |
| 〃 | 入れない | 原因B（権限）→ 確認コマンドへ |
| 確認コマンドで `push: true` | ある | 権限は正常。原因Aを徹底する |
| 〃 | 無い／招待が保留のまま | 招待を再送 → **承諾まで完了させる** |

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
