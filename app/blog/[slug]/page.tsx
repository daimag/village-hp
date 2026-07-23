import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByCategory } from "@/app/lib/posts";
import { SubHeader } from "../../components/SubHeader";
import { PostArticle } from "../../components/PostArticle";
import { Footer } from "../../components/Footer";

export function generateStaticParams() {
  return getPostsByCategory("記事").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  return p ? { title: p.title, description: p.title } : {};
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  if (!p) notFound();

  return (
    <div className="vg">
      <SubHeader back="/blog" backLabel="← ブログ一覧へ" />
      <main>
        <section className="post-page">
          <div className="wrap narrow">
            <PostArticle p={p} />
            <div className="more">
              <Link className="btn-ghost" href="/blog">
                ブログ一覧へ
              </Link>
              <Link className="btn-fill" href="/contact">
                お問い合わせ →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
