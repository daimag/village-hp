import type { MetadataRoute } from "next";
import { services } from "@/app/lib/company";
import { getAllPosts, postHref } from "@/app/lib/posts";

const BASE = "https://village2024.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/service", "/works", "/ihin-seiri", "/company", "/blog", "/news"];
  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/service/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE}${postHref(p)}`,
    lastModified: p.date,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
