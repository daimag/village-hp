import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByCategory } from "@/app/lib/posts";
import { SubHeader } from "../components/SubHeader";
import { PostCard } from "../components/PostCard";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "ブログ",
  description:
    "解体・空き家・遺品整理に関するお役立ち情報や、日々の活動をお届けします。北九州市門司区の株式会社ヴィレッジ。",
};

export default function BlogListPage() {
  const posts = getPostsByCategory("記事");
  return (
    <div className="vg">
      <SubHeader />
      <main>
        <section className="post-list">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> BLOG
              </p>
              <div className="j">ブログ</div>
            </div>
            {posts.length ? (
              <div className="plist">
                {posts.map((p) => (
                  <PostCard key={p.slug} p={p} />
                ))}
              </div>
            ) : (
              <p className="lead">現在記事はありません。</p>
            )}
            <div className="more">
              <Link className="btn-ghost" href="/news">
                お知らせはこちら →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
