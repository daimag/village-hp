import Link from "next/link";
import { getLatestPosts } from "@/app/lib/posts";
import { PostCard } from "./PostCard";

export function UpdatesPreview() {
  const posts = getLatestPosts(3);
  if (!posts.length) return null;
  return (
    <section id="news" className="updates">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> NEWS &amp; BLOG
          </p>
          <div className="j">新着情報</div>
        </div>
        <div className="plist">
          {posts.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="more">
          <Link className="btn-ghost" href="/news">
            お知らせ一覧 →
          </Link>
          <Link className="btn-ghost" href="/blog">
            ブログ一覧 →
          </Link>
        </div>
      </div>
    </section>
  );
}
