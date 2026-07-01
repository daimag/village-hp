import { services } from "@/app/lib/company";
import { ServiceIcon } from "./ServiceIcon";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Services" title="事業内容" description="解体から土地活用、住まいの再生まで。ワンストップで対応します。" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 text-sky-600 transition group-hover:from-sky-600 group-hover:to-emerald-500 group-hover:text-white">
                <ServiceIcon icon={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
