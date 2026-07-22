import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostCategory = "記事" | "お知らせ";

export type Post = {
  slug: string;
  date: string; // YYYY-MM-DD
  dateLabel: string; // YYYY.MM.DD（表示用）
  title: string;
  category: PostCategory;
  thumbnail?: string;
  bodyHtml: string;
  hasBody: boolean;
};

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function toCategory(value: unknown): PostCategory {
  return value === "記事" ? "記事" : "お知らせ";
}

// YAMLは無引用のISO日付(例 2026-07-22)をDate型に変換するため、
// UTCで YYYY-MM-DD の文字列を取り出す（文字列ならそのまま先頭10文字）。
function toDateStr(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "").slice(0, 10);
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const body = content.trim();
  const date = toDateStr(data.date);
  return {
    slug,
    date,
    dateLabel: date.replace(/-/g, "/"),
    title: String(data.title ?? ""),
    category: toCategory(data.category),
    thumbnail: data.thumbnail ? String(data.thumbnail) : undefined,
    bodyHtml: body ? (marked.parse(body, { async: false }) as string) : "",
    hasBody: Boolean(body),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getLatestPosts(n: number): Post[] {
  return getAllPosts().slice(0, n);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** 投稿の詳細ページURL（区分でパスを分ける：記事=/blog、お知らせ=/news） */
export function postHref(p: Post): string {
  return p.category === "記事" ? `/blog/${p.slug}` : `/news/${p.slug}`;
}
