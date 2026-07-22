import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, company } from "@/app/lib/company";
import { ServiceIcon } from "../../components/ServiceIcon";
import { Footer } from "../../components/Footer";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.description };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== slug);

  return (
    <div className="vg">
      <header className="subhd">
        <div className="in">
          <Link className="brand" href="/" aria-label={company.name}>
            <span className="vmark">V</span>
            <span className="bt">
              VILLAGE
              <small>{company.name}</small>
            </span>
          </Link>
          <Link className="back" href="/#service">
            ← 事業内容へ戻る
          </Link>
        </div>
      </header>

      <main>
        <section className="svc-detail">
          <div className="wrap">
            <div className="kick">
              <p className="t en">
                <span className="sl">/</span> SERVICE
              </p>
              <div className="j">事業内容</div>
            </div>

            <div className="svc-hero">
              <div
                className="svc-img ph"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="svc-body">
                <span className="svc-ic">
                  <ServiceIcon icon={s.icon} className="ico" />
                </span>
                <h1>{s.title}</h1>
                <p>{s.description}</p>
                <ul className="svc-points">
                  {s.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <Link className="btn-fill" href="/#contact">
                  このサービスを相談する →
                </Link>
              </div>
            </div>

            <div className="svc-others">
              <h2>その他の事業</h2>
              <div className="oth">
                {others.map((o) => (
                  <Link key={o.slug} className="othc" href={`/service/${o.slug}`}>
                    <span className="othic">
                      <ServiceIcon icon={o.icon} className="ico" />
                    </span>
                    <span>{o.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
