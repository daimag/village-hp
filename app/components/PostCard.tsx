import Link from "next/link";
import { type Post, postHref } from "@/app/lib/posts";

export function PostCard({ p }: { p: Post }) {
  const catClass = p.category === "記事" ? "blog" : "news";
  return (
    <Link href={postHref(p)} className="pcard">
      <div
        className={`pthumb ph${p.thumbnail ? "" : " slot"}`}
        style={
          p.thumbnail
            ? {
                backgroundImage: `url('${p.thumbnail}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {!p.thumbnail && <span className="en">VILLAGE</span>}
      </div>
      <div className="pbody">
        <div className="pmeta">
          <span className="pdate en">{p.dateLabel}</span>
          <span className={`pcat ${catClass}`}>{p.category}</span>
        </div>
        <h3>{p.title}</h3>
      </div>
    </Link>
  );
}
