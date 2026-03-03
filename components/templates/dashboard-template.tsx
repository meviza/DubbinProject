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

      <section className="mx-auto mt-8 max-w-7xl space-y-6">
        <header className="glass-panel rounded-[32px] p-6 md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel className="mb-4">{copy.dashboard.kicker}</SectionLabel>
              <h1 className="font-[var(--font-heading)] text-4xl font-semibold text-white md:text-5xl">
                {copy.dashboard.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.6]">
                {copy.dashboard.body}
              </p>
            </div>
            <Link href={`/${locale}/demo`}>
              <Button size="lg">{copy.common.requestDemo}</Button>
            </Link>
          </div>
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

        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[32px] p-0">
            <CardHeader className="border-b border-white/[0.08] p-6">
              <CardTitle className="font-[var(--font-heading)] text-3xl">
                {copy.dashboard.workstreamsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="rounded-[28px] border border-white/[0.08] bg-slate-950/[0.58] p-5">
                <div className="flex flex-wrap gap-2">
                  {copy.dashboard.workstreams.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.52]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-4">
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
                      <p className="mt-3 text-sm leading-7 text-white/[0.54]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="rounded-[32px]">
              <CardHeader>
                <CardTitle className="font-[var(--font-heading)] text-2xl">
                  {copy.dashboard.countriesTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-0">
                {copy.dashboard.countries.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.56]"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[32px]">
              <CardHeader>
                <CardTitle className="font-[var(--font-heading)] text-2xl">
                  Command Surface
                </CardTitle>
                <CardDescription>
                  Quiet by default. High-signal when needed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-[24px] border border-cyan-300/[0.12] bg-cyan-300/[0.06] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/[0.8]">
                    Review state
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    3 matters awaiting partner sign-off.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.44]">
                      Queue
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">14</p>
                  </div>
                  <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/[0.44]">
                      Priority
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">04</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
