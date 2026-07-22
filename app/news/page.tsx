import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/app/lib/posts";
import { SubHeader } from "../components/SubHeader";
import { PostCard } from "../components/PostCard";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社ヴィレッジからのお知らせ・最新情報をご案内します。",
};

export default function NewsListPage() {
  const posts = getPostsByCategory("お知らせ");
  return (
    <div className="vg">
      <SubHeader />
      <main>
        <section className="post-list">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> NEWS
              </p>
              <div className="j">お知らせ</div>
            </div>
            {posts.length ? (
              <div className="plist">
                {posts.map((p) => (
                  <PostCard key={p.slug} p={p} />
                ))}
              </div>
            ) : (
              <p className="lead">現在お知らせはありません。</p>
            )}
            <div className="more">
              <Link className="btn-ghost" href="/blog">
                ブログ記事はこちら →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
