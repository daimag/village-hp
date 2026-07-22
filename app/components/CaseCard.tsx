import type { DemolitionCase } from "@/app/lib/company";

const cover = (url: string) => ({
  backgroundImage: `url('${url}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export function CaseCard({ c }: { c: DemolitionCase }) {
  return (
    <article className="case">
      <div className="ba">
        <figure className="before">
          <div className="img ph" style={cover(c.before)} />
          <figcaption>BEFORE</figcaption>
        </figure>
        <div className="arrow" aria-hidden>
          →
        </div>
        <figure className="after">
          <div className="img ph" style={cover(c.after)} />
          <figcaption>AFTER</figcaption>
        </figure>
      </div>
      <div className="cbody">
        <h3>{c.title}</h3>
        <div className="meta">
          {c.structure}
          {c.area ? ` ／ ${c.area}` : ""}
        </div>
        <div className="price">
          <span>費用の目安</span>
          <b>{c.price}</b>
        </div>
        {c.comment && <p>{c.comment}</p>}
      </div>
    </article>
  );
}
