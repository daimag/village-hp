import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByCategory } from "@/app/lib/posts";
import { SubHeader } from "../../components/SubHeader";
import { PostArticle } from "../../components/PostArticle";
import { Footer } from "../../components/Footer";

export function generateStaticParams() {
  return getPostsByCategory("お知らせ").map((p) => ({ slug: p.slug }));
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPostBySlug(slug);
  if (!p) notFound();

  return (
    <div className="vg">
      <SubHeader back="/news" backLabel="← お知らせ一覧へ" />
      <main>
        <section className="post-page">
          <div className="wrap narrow">
            <PostArticle p={p} />
            <div className="more">
              <Link className="btn-ghost" href="/news">
                お知らせ一覧へ
              </Link>
              <Link className="btn-fill" href="/#contact">
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
