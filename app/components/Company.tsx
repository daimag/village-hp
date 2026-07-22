import Link from "next/link";
import { greeting } from "@/app/lib/company";
import { CompanyTable } from "./CompanyTable";

export function Company() {
  return (
    <section id="company" className="company">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> COMPANY
          </p>
          <div className="j">会社概要</div>
        </div>

        {/* 代表あいさつ（抜粋） */}
        <div className="greet">
          <div className="greet-figure">
            <div
              className="greet-img ph"
              style={{
                backgroundImage: `url('${greeting.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
              role="img"
              aria-label={`${greeting.title} ${greeting.name}`}
            />
            <div className="sign">
              <span className="role">{greeting.title}</span>
              <span className="nm">{greeting.name}</span>
            </div>
          </div>
          <div className="greet-body">
            <div className="gh en">MESSAGE</div>
            <h3>{greeting.lead}</h3>
            <p>{greeting.body[0]}</p>
            <p>{greeting.body[1]}</p>
            <Link className="btn-ghost" href="/company">
              代表あいさつ・会社案内を見る →
            </Link>
          </div>
        </div>

        <CompanyTable />
      </div>
    </section>
  );
}
