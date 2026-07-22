// ビルド時に「コンテンツ専用リポジトリ」から記事(news)とアップロード(uploads)を取り込む。
//
// 環境変数:
//   CONTENT_REPO        例: "daimag/village-hp-content"（未設定ならローカルの content/news を使用）
//   CONTENT_BRANCH      省略時 "main"
//   CONTENT_REPO_TOKEN  プライベートリポジトリの場合のみ必要（read権限のトークン）
//
// 取り込み先:
//   <repo>/news/*.md    -> content/news/*.md
//   <repo>/uploads/*    -> public/uploads/*

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";

const repo = process.env.CONTENT_REPO;
const branch = process.env.CONTENT_BRANCH || "main";
const root = process.cwd();
const newsDest = path.join(root, "content", "news");
const uploadsDest = path.join(root, "public", "uploads");

if (!repo) {
  console.log("[content] CONTENT_REPO 未設定 → ローカルの content/news をそのまま使用します");
  process.exit(0);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "village-content-"));
try {
  const token = process.env.CONTENT_REPO_TOKEN;
  const url = token
    ? `https://x-access-token:${token}@github.com/${repo}.git`
    : `https://github.com/${repo}.git`;
  execSync(`git clone --depth 1 --branch ${branch} ${url} "${tmp}"`, { stdio: "inherit" });

  // 記事：コンテンツリポジトリの内容で完全に置き換え（削除も反映）
  fs.rmSync(newsDest, { recursive: true, force: true });
  copyDir(path.join(tmp, "news"), newsDest);

  // アップロード（画像）
  const uploadsSrc = path.join(tmp, "uploads");
  if (fs.existsSync(uploadsSrc)) {
    fs.rmSync(uploadsDest, { recursive: true, force: true });
    copyDir(uploadsSrc, uploadsDest);
  }

  const count = fs.existsSync(newsDest)
    ? fs.readdirSync(newsDest).filter((f) => f.endsWith(".md")).length
    : 0;
  console.log(`[content] ${repo} から記事 ${count} 件を取り込みました`);
} catch (e) {
  console.error("[content] 取り込みに失敗しました。ローカルの content/news を使用します。", e?.message ?? e);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
