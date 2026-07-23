type Key =
  | "sort"
  | "haul"
  | "clean"
  | "demolish"
  | "living"
  | "house"
  | "money"
  | "soul";

const paths: Record<Key, React.ReactNode> = {
  living: (
    // 生前整理（人）
    <>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 20v-1a6.5 6.5 0 0113 0v1" />
    </>
  ),
  house: (
    // 空き家の片付け（家）
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  money: (
    // 高価買取（¥）
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 8l3 4 3-4" />
      <path d="M12 12v5M9.6 13.2h4.8M9.6 15.4h4.8" />
    </>
  ),
  soul: (
    // 供養・お焚き上げ（灯）
    <>
      <path d="M12 3c2.5 2.5 3.5 4.5 3.5 6.8a3.5 3.5 0 01-7 0c0-1.4.6-2.4 1.5-3.3.2 1.6 2 1.6 2 0 0-1.2 0-2.3 0-3.5z" />
      <path d="M6 20h12M8 20v-2h8v2" />
    </>
  ),
  sort: (
    // 仕分け（分別）
    <>
      <path d="M12 3v5" />
      <path d="M12 8l-5 5" />
      <path d="M12 8l5 5" />
      <rect x="3" y="13" width="8" height="7" rx="1" />
      <rect x="13" y="13" width="8" height="7" rx="1" />
    </>
  ),
  haul: (
    // 搬出（トラック）
    <>
      <path d="M2 6h12v10H2z" />
      <path d="M14 9h4l3 3v4h-7z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  clean: (
    // 清掃（キラキラ）
    <>
      <path d="M11 3l1.6 4.4L17 9l-4.4 1.6L11 15l-1.6-4.4L5 9l4.4-1.6z" />
      <path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z" />
    </>
  ),
  demolish: (
    // 解体（重機）
    <>
      <path d="M3 21h18" />
      <path d="M5 21v-6l4-2 3 4" />
      <path d="M12 13l6-8 3 2-4 7" />
      <circle cx="7" cy="18" r="1.5" />
    </>
  ),
};

export function EstateIcon({ icon, className = "" }: { icon: Key; className?: string }) {
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
