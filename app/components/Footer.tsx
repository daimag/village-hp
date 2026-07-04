import { company, nav } from "@/app/lib/company";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="brand">
              <span className="vmark">V</span>
              <span className="bt">
                VILLAGE
                <small>{company.name}</small>
              </span>
            </div>
            <p className="addr">
              〒{company.postalCode} {company.address}
              <br />
              TEL {company.tel} / {company.businessHours}
            </p>
          </div>
          <nav className="fnav">
            <div>
              {nav.slice(0, 3).map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </div>
            <div>
              {nav.slice(3).map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
              <a href="#contact">CONTACT</a>
            </div>
          </nav>
        </div>
        <div className="cr en">© 2024 VILLAGE INC. All rights reserved.</div>
      </div>
    </footer>
  );
}
