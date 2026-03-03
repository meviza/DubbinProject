import Link from "next/link";

import { supportedLocales, type Locale } from "@/lib/locales";
import { getLocaleCopy } from "@/content/site-copy";

type LanguageSwitchProps = {
  locale: Locale;
  route: string;
};

export function LanguageSwitch({ locale, route }: LanguageSwitchProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1">
      {supportedLocales.map((targetLocale) => {
        const href = targetLocale === "en" ? `/en${route}` : `/tr${route}`;
        const isActive = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={href}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
              isActive
                ? "bg-cyan-300 text-slate-950"
                : "text-white/[0.58] hover:text-white"
            }`}
          >
            {getLocaleCopy(targetLocale).languageName}
          </Link>
        );
      })}
    </div>
  );
}
