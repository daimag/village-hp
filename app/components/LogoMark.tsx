// 名刺ロゴ（V マーク）を忠実に再現したSVG。緑＋青のシェブロン＋黒スウッシュ。
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="4 4 106 92"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="株式会社ヴィレッジ ロゴ"
    >
      {/* 緑：左シェブロン（上下2枚） */}
      <polygon points="24,8 44,8 51,45 32.8,45" fill="#5aa63c" />
      <polygon points="34.5,52 52.4,52 60,92 44,92" fill="#5aa63c" />
      {/* 青：右シェブロン（上下2枚） */}
      <polygon points="76,8 96,8 87.2,45 68.97,45" fill="#3b87b7" />
      <polygon points="67.6,52 85.5,52 76,92 60,92" fill="#3b87b7" />
      {/* 黒スウッシュ */}
      <path d="M10,62 C10,40 44,30 104,12 C60,34 30,44 18,54 L12,58 Z" fill="#1a1a1a" />
    </svg>
  );
}
