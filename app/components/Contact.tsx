import { company } from "@/app/lib/company";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 py-24 sm:py-28">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          解体・不動産のご相談は<br className="sm:hidden" />お気軽に
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
          お見積り・現地調査は無料です。まずはお電話またはメールにてお問い合わせください。
        </p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={`tel:${company.tel.replace(/-/g, "")}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition hover:border-sky-400/50 hover:bg-white/10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">お電話</span>
            <span className="mt-2 block text-2xl font-bold text-white">{company.tel}</span>
            <span className="mt-1 block text-xs text-slate-400">{company.businessHours}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition hover:border-emerald-400/50 hover:bg-white/10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">メール</span>
            <span className="mt-2 block break-all text-xl font-bold text-white">{company.email}</span>
            <span className="mt-1 block text-xs text-slate-400">24時間受付・翌営業日までにご返信</span>
          </a>
        </div>

        <p className="mt-10 text-sm text-slate-400">
          〒{company.postalCode}　{company.address}
        </p>
      </div>
    </section>
  );
}
