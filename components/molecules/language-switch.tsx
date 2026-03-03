import Link from "next/link";

import { supportedLocales, type Locale } from "@/lib/locales";
import { getLocaleCopy } from "@/content/site-copy";

type LanguageSwitchProps = {
  locale: Locale;
  route: string;
};

export function LanguageSwitch({ locale, route }: LanguageSwitchProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[rgba(214,179,126,0.16)] bg-[rgba(241,222,192,0.04)] p-1">
      {supportedLocales.map((targetLocale) => {
        const href = targetLocale === "en" ? `/en${route}` : `/tr${route}`;
        const isActive = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={href}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
              isActive
                ? "bg-[#d6b37e] text-[#1a110b]"
                : "text-[rgba(241,223,196,0.58)] hover:text-[#fff4e1]"
            }`}
          >
            {getLocaleCopy(targetLocale).languageName}
          </Link>
        );
      })}
    </div>
  );
}
