import Link from "next/link";

import { SectionLabel } from "@/components/atoms/section-label";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supportedLocales } from "@/lib/locales";
import { getLocaleCopy } from "@/content/site-copy";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center px-4 py-8 md:px-8">
      <section className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel rounded-[36px] p-7 md:p-10">
          <SectionLabel className="mb-5">Dubbin OS</SectionLabel>
          <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Choose the public
            <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              {" "}
              language surface
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.65]">
            This root page acts as the static entry point for GitHub Pages. Language-specific routes handle the premium landing page, login preview, request flows, and dashboard preview.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/en">
              <Button size="lg">Open English Site</Button>
            </Link>
            <Link href="/tr">
              <Button variant="secondary" size="lg">
                Turkce Siteyi Ac
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          {supportedLocales.map((locale) => {
            const copy = getLocaleCopy(locale);

            return (
              <Link key={locale} href={`/${locale}`}>
                <Card className="rounded-[32px] transition hover:border-cyan-300/30">
                  <CardHeader>
                    <SectionLabel className="w-fit">{copy.languageName}</SectionLabel>
                    <CardTitle className="font-[var(--font-heading)] text-3xl">
                      {copy.landing.kicker}
                    </CardTitle>
                    <CardDescription>{copy.landing.body}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
