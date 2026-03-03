import Link from "next/link";

import { SectionLabel } from "@/components/atoms/section-label";
import { MetricTile } from "@/components/molecules/metric-tile";
import { SiteHeader } from "@/components/organisms/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";

type DashboardTemplateProps = {
  locale: Locale;
};

export function DashboardTemplate({ locale }: DashboardTemplateProps) {
  const copy = getLocaleCopy(locale);

  return (
    <main className="px-4 pb-16 pt-5 md:px-8">
      <SiteHeader locale={locale} route="/dashboard" />

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="glass-panel rounded-[32px] p-5">
          <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5">
            <SectionLabel className="mb-4">{copy.dashboard.kicker}</SectionLabel>
            <p className="text-lg font-semibold text-white">{copy.dashboard.title}</p>
            <p className="mt-3 text-sm leading-7 text-white/[0.58]">
              {copy.dashboard.body}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {copy.dashboard.workstreams.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/[0.72]"
              >
                {item}
              </div>
            ))}
          </div>

          <Link href={`/${locale}/demo`} className="mt-6 block">
            <Button className="w-full">{copy.common.requestDemo}</Button>
          </Link>
        </aside>

        <section className="space-y-6">
          <header className="glass-panel rounded-[32px] p-6">
            <SectionLabel className="mb-4">{copy.dashboard.kicker}</SectionLabel>
            <h1 className="font-[var(--font-heading)] text-4xl font-semibold text-white md:text-5xl">
              {copy.dashboard.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/[0.62]">
              {copy.dashboard.body}
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-3">
            {copy.dashboard.metrics.map((item) => (
              <MetricTile
                key={item.label}
                label={item.label}
                value={item.value}
                helper={item.helper}
              />
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-[32px]">
              <CardHeader className="border-b border-white/[0.08]">
                <CardTitle className="font-[var(--font-heading)] text-3xl">
                  {copy.dashboard.workstreamsTitle}
                </CardTitle>
                <CardDescription>
                  Productized workflows that make the platform feel deeper than a generic AI assistant.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {copy.dashboard.modules.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <span className="rounded-full border border-cyan-300/[0.15] bg-cyan-300/[0.1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/[0.58]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[32px]">
              <CardHeader className="border-b border-white/[0.08]">
                <CardTitle className="font-[var(--font-heading)] text-3xl">
                  {copy.dashboard.countriesTitle}
                </CardTitle>
                <CardDescription>
                  Market-first expansion framing for the premium public narrative.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {copy.dashboard.countries.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] px-4 py-4 text-sm font-medium text-white/[0.78]"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </main>
  );
}
