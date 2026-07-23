import type { MetadataRoute } from "next";

// ⚠️ 公開前：全クローラーをブロック（検索結果に出さない）。
// 正式公開時に allow: "/" ＋ sitemap 参照へ戻すこと（下のコメント参照）。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
  // 公開時はこちらに戻す：
  // return {
  //   rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
  //   sitemap: "https://village2024.jp/sitemap.xml",
  //   host: "https://village2024.jp",
  // };
}
