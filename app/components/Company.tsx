import { company } from "@/app/lib/company";
import { SectionHeading } from "./SectionHeading";

export function Company() {
  const rows: [string, React.ReactNode][] = [
    ["会社名", company.name],
    ["代表者", `${company.representativeTitle}　${company.representative}（${company.license}）`],
    ["所在地", `〒${company.postalCode}　${company.address}`],
    [
      "電話番号",
      <a key="tel" href={`tel:${company.tel.replace(/-/g, "")}`} className="text-sky-600 hover:underline">
        {company.tel}
      </a>,
    ],
    [
      "メール",
      <a key="mail" href={`mailto:${company.email}`} className="text-sky-600 hover:underline">
        {company.email}
      </a>,
    ],
    ["営業時間", company.businessHours],
    [
      "事業内容",
      "建物解体工事 / 解体業コンサルタント / 土地開発 / 不動産売買 / リフォーム事業 / リノベーション事業",
    ],
  ];

  return (
    <section id="company" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Company" title="会社概要" />

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <dl className="divide-y divide-slate-100">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-8">
                <dt className="text-sm font-semibold text-slate-500">{label}</dt>
                <dd className="text-sm leading-relaxed text-slate-800">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
