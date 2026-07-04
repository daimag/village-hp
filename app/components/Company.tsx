import { company } from "@/app/lib/company";

export function Company() {
  const rows: [string, React.ReactNode][] = [
    ["会社名", company.name],
    ["代表者", `${company.representativeTitle}　${company.representative}（${company.license}）`],
    ["所在地", `〒${company.postalCode}　${company.address}`],
    ["電話番号", company.tel],
    ["営業時間", company.businessHours],
    ["設立", company.established],
    [
      "事業内容",
      "建物解体工事 / 解体業コンサルタント / 土地開発 / リフォーム事業 / リノベーション事業",
    ],
    [
      "許可・登録",
      <>
        {company.demolitionLicense}
        <br />
        {company.asbestosLicense}
      </>,
    ],
  ];

  return (
    <section id="company" className="company">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> COMPANY
          </p>
          <div className="j">会社概要</div>
        </div>
        <div className="box">
          <dl style={{ margin: 0 }}>
            {rows.map(([label, value]) => (
              <div className="row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
