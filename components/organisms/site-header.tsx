import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/atoms/brand-mark";
import { LanguageSwitch } from "@/components/molecules/language-switch";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/locales";
import { getLocaleCopy } from "@/content/site-copy";

type SiteHeaderProps = {
  locale: Locale;
  route: string;
};

export function SiteHeader({ locale, route }: SiteHeaderProps) {
  const copy = getLocaleCopy(locale);

  return (
    <header className="sticky top-0 z-40 mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-[30px] border border-[rgba(214,179,126,0.14)] bg-[rgba(22,15,10,0.9)] px-4 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <BrandMark
        href={`/${locale}`}
        eyebrow="Dubbin OS"
        subtitle={copy.landing.kicker}
      />
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <nav className="hidden items-center gap-6 text-sm text-[rgba(241,223,196,0.56)] md:flex">
          {copy.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="transition hover:text-[#fff3df]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-2">
          <LanguageSwitch locale={locale} route={route} />
          <Link href={`/${locale}/login`}>
            <Button variant="ghost" size="sm">
              {copy.common.login}
            </Button>
          </Link>
          <Link href={`/${locale}/demo`}>
            <Button variant="secondary" size="sm">
              {copy.common.requestDemo}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
