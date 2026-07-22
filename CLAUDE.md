@AGENTS.md

# 株式会社ヴィレッジ HP制作

プロジェクト概要・環境・構成・TODO は `docs/PROJECT.md` を参照。
日々の作業ログは `docs/作業記録.md`。

要点:
- Next.js 16 + TypeScript + Tailwind CSS v4。会社情報は `app/lib/company.ts` に一元管理。
- パッケージマネージャは **pnpm**。表示確認は `pnpm dev`（http://localhost:3000）。
- 客先ヒアリングシート: `docs/ヴィレッジHP_ヒアリングシート.xlsx`（生成: `docs/generate_hearing_xlsx.py`、1シート構成）。
- リモート: https://github.com/daimag/village-hp.git（main）。名刺スキャン `_reference/` は非公開。
