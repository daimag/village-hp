import { company } from "@/app/lib/company";
import { ContactForm } from "./ContactForm";

export function Contact() {
  // 会社名を含めると別施設に誤マッチするため、郵便番号＋住所のみで地図を連動
  const mapQuery = encodeURIComponent(`〒${company.postalCode} ${company.address}`);
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> CONTACT
          </p>
          <div className="j">お問い合わせ</div>
        </div>
        <p className="lead">
          お見積り・現地調査は無料です。フォーム・お電話・LINEよりお気軽にご相談ください。
        </p>
        <div className="grid">
          <ContactForm />
          <div>
            <div className="direct">
              <a className="row" href={`tel:${company.tel.replace(/-/g, "")}`}>
                <span className="cih">
                  <svg className="ico" viewBox="0 0 24 24">
                    <path d="M4 5c0 9 6 15 15 15l0-4-4-1-2 2c-3-1.5-5-3.5-6.5-6.5l2-2-1-4z" />
                  </svg>
                </span>
                <span>
                  <span className="k">お電話（{company.businessHours}）</span>
                  <span className="v">{company.tel}</span>
                </span>
              </a>
              <a className="row" href={`mailto:${company.email}`}>
                <span className="cih">
                  <svg className="ico" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </span>
                <span>
                  <span className="k">メール</span>
                  <span className="v sm">{company.email}</span>
                </span>
              </a>
            </div>
            <div className="mapbox">
              <iframe
                title={`${company.name} 所在地`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
