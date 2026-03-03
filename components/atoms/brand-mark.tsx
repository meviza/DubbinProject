import Link from "next/link";

type BrandMarkProps = {
  href: string;
  eyebrow: string;
  subtitle: string;
};

export function BrandMark({ href, eyebrow, subtitle }: BrandMarkProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(214,179,126,0.24)] bg-[rgba(214,179,126,0.08)] font-[var(--font-heading)] text-2xl font-semibold text-[#f0d2a0]">
        D
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(230,195,143,0.8)]">
          {eyebrow}
        </p>
        <p className="text-sm font-medium text-[rgba(241,223,196,0.68)]">{subtitle}</p>
      </div>
    </Link>
  );
}
