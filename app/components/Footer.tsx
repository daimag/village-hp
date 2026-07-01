import { company } from "@/app/lib/company";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="[&_span.text-slate-900]:!text-white [&_span.text-slate-400]:!text-slate-500">
              <Logo />
            </span>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              〒{company.postalCode}　{company.address}
            </p>
          </div>
          <div className="text-sm text-slate-400">
            <p>
              TEL：
              <a href={`tel:${company.tel.replace(/-/g, "")}`} className="text-slate-200 hover:underline">
                {company.tel}
              </a>
            </p>
            <p className="mt-1">
              MAIL：
              <a href={`mailto:${company.email}`} className="text-slate-200 hover:underline">
                {company.email}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
