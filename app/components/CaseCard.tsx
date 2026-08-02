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
        <figure className="after">
          <div className="img ph" style={cover(c.after)} />
          <figcaption>AFTER</figcaption>
        </figure>
        <div className="pivot" aria-hidden>
          →
        </div>
      </div>
      <div className="cbody">
        {c.area && <p className="where">{c.area}</p>}
        <h3>{c.title}</h3>
        <dl className="spec">
          {c.size && (
            <div>
              <dt>坪数</dt>
              <dd>{c.size}</dd>
            </div>
          )}
          <div>
            <dt>構造</dt>
            <dd>{c.structure}</dd>
          </div>
          {c.days && (
            <div>
              <dt>工事日数</dt>
              <dd>{c.days}</dd>
            </div>
          )}
        </dl>
        <div className="price">
          <span>工事金</span>
          <b>{c.price}</b>
        </div>
        {c.comment && <p>{c.comment}</p>}
      </div>
    </article>
  );
}
