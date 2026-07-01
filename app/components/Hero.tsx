import { company } from "@/app/lib/company";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-900">
      {/* 背景グラデーション＆装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-32 sm:px-6">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          北九州市門司区 / 解体・不動産・リフォーム
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.25] tracking-tight text-white sm:text-5xl md:text-6xl">
          {company.catchphrase}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {company.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 transition hover:bg-sky-500"
          >
            無料で相談・お見積り
            <span aria-hidden>→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            事業内容を見る
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div>
            <dt className="text-xs text-slate-400">対応エリア</dt>
            <dd className="mt-1 text-lg font-bold text-white">北九州</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">見積り</dt>
            <dd className="mt-1 text-lg font-bold text-white">無料</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">有資格者</dt>
            <dd className="mt-1 text-lg font-bold text-white">在籍</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
