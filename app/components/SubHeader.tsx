import Link from "next/link";
import { company } from "@/app/lib/company";

export function SubHeader({
  back = "/",
  backLabel = "← トップへ戻る",
}: {
  back?: string;
  backLabel?: string;
}) {
  return (
    <header className="subhd">
      <div className="in">
        <Link className="brand" href="/" aria-label={company.name}>
          <span className="vmark">V</span>
          <span className="bt">
            VILLAGE
            <small>{company.name}</small>
          </span>
        </Link>
        <Link className="back" href={back}>
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
