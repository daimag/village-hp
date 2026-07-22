import { type Post } from "@/app/lib/posts";

export function PostArticle({ p }: { p: Post }) {
  const catClass = p.category === "記事" ? "blog" : "news";
  return (
    <article className="post">
      <div className="pmeta">
        <span className="pdate en">{p.dateLabel}</span>
        <span className={`pcat ${catClass}`}>{p.category}</span>
      </div>
      <h1>{p.title}</h1>
      {p.thumbnail && (
        <div
          className="phero ph"
          style={{
            backgroundImage: `url('${p.thumbnail}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {p.hasBody && (
        <div className="pcontent" dangerouslySetInnerHTML={{ __html: p.bodyHtml }} />
      )}
    </article>
  );
}
