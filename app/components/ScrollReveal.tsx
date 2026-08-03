"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * スクロールに合わせて各セクションの要素を順に表示する。
 *
 * 対象は `main` 配下の `.wrap` の直下要素（見出し・リード・カード群など）。
 * 各コンポーネントに手を入れずに全ページへ効かせるため、セレクタで拾う方式にしている。
 *
 * 初期状態を隠すCSSは、layout.tsx のインラインスクリプトが <html> に付ける
 * `.rv` に紐づく。JSが無効なら `.rv` が付かず、すべて表示されたままになる。
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.rvReady = "1";

    // カード群は、ひとかたまりではなく1枚ずつ現れるようにする。
    // 該当する入れ物は自身を即表示にして、子要素を対象へ差し替える。
    const ITEM_CONTAINERS =
      ".cases, .worry, .service .grid, .cg-grid, .cardgrid, .reasons, .trio, .measures .mgrid";

    const targets: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>(".vg main .wrap > *").forEach((block) => {
      const container = block.matches(ITEM_CONTAINERS)
        ? block
        : block.querySelector<HTMLElement>(ITEM_CONTAINERS);
      if (container) {
        if (container !== block) targets.push(block);
        container.dataset.rv = "in";
        targets.push(...(Array.from(container.children) as HTMLElement[]));
        return;
      }
      targets.push(block);
    });
    if (targets.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      targets.forEach((el) => (el.dataset.rv = "in"));
      return;
    }

    // 同じ .wrap 内では上から少しずつ遅らせて、順に現れるようにする
    targets.forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentElement!.children, el);
      el.style.setProperty("--rv-d", `${Math.min(i, 4) * 90}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.rv = "in";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );

    targets.forEach((el) => {
      // 初回表示時点で画面内にあるものは、観測を待たずに表示する
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.dataset.rv = "in";
        return;
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
