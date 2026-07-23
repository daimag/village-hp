import { serviceArea } from "@/app/lib/company";

export function Area() {
  return (
    <section id="area" className="areasec">
      <div className="wrap">
        <div className="kick">
          <p className="t en">
            <span className="sl">/</span> AREA
          </p>
          <div className="j">対応エリア</div>
        </div>
        <p className="lead">{serviceArea}</p>
      </div>
    </section>
  );
}
