type Key = "sort" | "haul" | "clean" | "demolish";

const paths: Record<Key, React.ReactNode> = {
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
