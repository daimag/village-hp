import { strengths } from "@/app/lib/company";
import { SectionHeading } from "./SectionHeading";

export function Strengths() {
  return (
    <section id="strengths" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Village"
          title="選ばれる理由"
          description="ヴィレッジが地域のお客様に信頼いただける、3つの強みです。"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.number} className="relative">
              <span className="block bg-gradient-to-br from-sky-500 to-emerald-500 bg-clip-text text-5xl font-black text-transparent">
                {item.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <span className="mt-5 block h-px w-16 bg-gradient-to-r from-sky-500 to-emerald-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
