import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // デザイン比較用の静的プレビュー（public/designs/*.html）をきれいなURLで配信
  async rewrites() {
    return [
      { source: "/1", destination: "/designs/plan1.html" },
      { source: "/2", destination: "/designs/plan2.html" },
      { source: "/3", destination: "/designs/plan3.html" },
    ];
  },
};

export default nextConfig;
