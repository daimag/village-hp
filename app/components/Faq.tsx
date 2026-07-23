import { kaitaiFaq } from "@/app/lib/company";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kaitaiFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" className="faqsec">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> FAQ
          </p>
          <div className="j">よくあるご質問</div>
        </div>
        <div className="faq">
          {kaitaiFaq.map((f, i) => (
            <div className="qa" key={i}>
              <div className="q">
                <span className="mk en">Q</span>
                {f.q}
              </div>
              <div className="a">
                <span className="mk en">A</span>
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
