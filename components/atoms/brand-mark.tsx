import Link from "next/link";
import { ShieldCheck } from "lucide-react";

type BrandMarkProps = {
  href: string;
  eyebrow: string;
  subtitle: string;
};

export function BrandMark({ href, eyebrow, subtitle }: BrandMarkProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.15] text-cyan-200 shadow-[0_0_30px_-12px_rgba(34,211,238,0.8)]">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
          {eyebrow}
        </p>
        <p className="text-sm font-medium text-white/70">{subtitle}</p>
      </div>
    </Link>
  );
}
