export function Logo({ className = "", withText = true }: { className?: string; withText?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* V字ロゴ：青×緑のシェブロン */}
        <path d="M6 8h11l7 16-6 8L6 8z" fill="#2f9fd6" />
        <path d="M42 8H31l-7 16 6 8 12-24z" fill="#5cbb5c" />
        <path
          d="M6 8h11l7 16 7-16h11L27 40h-6L6 8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
        />
      </svg>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-slate-900">株式会社ヴィレッジ</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">Village Inc.</span>
        </span>
      )}
    </span>
  );
}
