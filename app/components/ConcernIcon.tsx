import type { Concern } from "@/app/lib/company";

const paths: Record<Concern["icon"], React.ReactNode> = {
  akiya: (
    // 空き家（雨戸の閉まった家）
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M10 14h4v6h-4z" />
      <path d="M9 20h6" />
    </>
  ),
  souzoku: (
    // 相続（家と受け渡し）
    <>
      <path d="M3 10l6-5 6 5" />
      <path d="M5 9v11h8V9" />
      <path d="M16 14h5" />
      <path d="M18.5 11.5L21 14l-2.5 2.5" />
    </>
  ),
  ikken: (
    // 一軒だけ（小さな家に印）
    <>
      <path d="M7 12l5-4 5 4" />
      <path d="M8.5 11v8h7v-8" />
      <path d="M3 20h18" />
      <circle cx="12" cy="5" r="1.5" />
    </>
  ),
  cost: (
    // 費用（円と疑問）
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8.5l3 4 3-4" />
      <path d="M12 12.5V17" />
      <path d="M9.5 13.5h5M9.5 15.5h5" />
    </>
  ),
  ihin: (
    // 残置物（積まれた箱）
    <>
      <rect x="3" y="13" width="8" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="7" rx="1" />
      <rect x="8" y="5" width="8" height="7" rx="1" />
      <path d="M12 5v7" />
    </>
  ),
  kinjo: (
    // 近隣（隣り合う家と音）
    <>
      <path d="M2 13l5-4 5 4" />
      <path d="M3.5 12.5V20h7v-7.5" />
      <path d="M13 20V11l4-3 4 3v9" />
      <path d="M16 20v-4h2v4" />
    </>
  ),
};

export function ConcernIcon({
  icon,
  className,
}: {
  icon: Concern["icon"];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      {paths[icon]}
    </svg>
  );
}
