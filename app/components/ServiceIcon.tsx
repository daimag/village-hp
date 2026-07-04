import type { Service } from "@/app/lib/company";

const paths: Record<Service["icon"], React.ReactNode> = {
  demolition: (
    // 解体（重機・アーム）
    <>
      <path d="M3 21h18" />
      <path d="M5 21v-6l4-2 3 4" />
      <path d="M12 13l6-8 3 2-4 7" />
      <circle cx="7" cy="18" r="1.5" />
    </>
  ),
  consulting: (
    // コンサル（書類・チェック）
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
      <path d="M15.5 15.5l1.5 1.5 2.5-2.5" />
    </>
  ),
  land: (
    // 土地開発（区画）
    <>
      <path d="M3 20h18" />
      <path d="M6 20V9l6-4 6 4v11" />
      <path d="M6 13h12M12 5v15" />
    </>
  ),
  reform: (
    // リフォーム（工具）
    <>
      <path d="M14.5 5.5a3 3 0 00-4 4l-6 6 2 2 6-6a3 3 0 004-4l-2 2-2-2 2-2z" />
      <path d="M15 15l4 4" />
    </>
  ),
  renovation: (
    // リノベ（家＋刷新）
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M9 20v-4h6v4" />
      <path d="M12 2v2M20 6l1-1M3 5l1 1" />
    </>
  ),
};

export function ServiceIcon({ icon, className = "" }: { icon: Service["icon"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
