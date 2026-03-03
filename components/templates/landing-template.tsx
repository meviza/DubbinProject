import Link from "next/link";

import { SectionLabel } from "@/components/atoms/section-label";
import { MetricTile } from "@/components/molecules/metric-tile";
import { SiteHeader } from "@/components/organisms/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";

type LandingTemplateProps = {
  locale: Locale;
};

export function LandingTemplate({ locale }: LandingTemplateProps) {
  const copy = getLocaleCopy(locale);
  const regionChips = copy.landing.marketGaps.map((item) => item.region);

  return (
    <main className="px-4 pb-16 pt-5 md:px-8">
      <SiteHeader locale={locale} route="" />

      <section className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel relative overflow-hidden rounded-[36px] p-7 md:p-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <SectionLabel className="mb-5">{copy.landing.kicker}</SectionLabel>
          <div className="space-y-6">
            <h1 className="max-w-4xl font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              {copy.landing.title}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                {" "}
                {copy.landing.accent}
              </span>
            </h1>
            <p className="max-w-3xl text-balance text-lg leading-8 text-white/[0.68] md:text-xl">
              {copy.landing.body}
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${locale}/dashboard`}>
              <Button size="lg">{copy.landing.primaryCta}</Button>
            </Link>
            <Link href={`/${locale}/login`}>
              <Button variant="secondary" size="lg">
                {copy.landing.secondaryCta}
              </Button>
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/[0.52]">
            {copy.landing.trustNote}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {copy.landing.productPillars.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/[0.56]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.landing.metrics.map((item) => (
              <MetricTile
                key={item.label}
                label={item.label}
                value={item.value}
                helper={item.helper}
              />
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-[36px] p-0">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/[0.12] blur-3xl" />
          <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-fuchsia-300/10 blur-3xl" />
          <CardHeader className="space-y-4 border-b border-white/[0.08] p-7">
            <SectionLabel>{copy.common.securePreview}</SectionLabel>
            <CardTitle className="pt-2 font-[var(--font-heading)] text-2xl">
              {copy.landing.productTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 p-7">
            <div className="rounded-[28px] border border-white/[0.08] bg-slate-950/[0.58] p-5">
              <div className="flex flex-wrap gap-2">
                {copy.landing.productPillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.52]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-[24px] border border-cyan-300/[0.12] bg-cyan-300/[0.06] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/[0.8]">
                  Live review
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Clause asymmetry detected in termination rights.
                </p>
                <p className="mt-2 text-sm leading-7 text-white/[0.58]">
                  Source-linked remediation and escalation ready.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.landing.capabilities.slice(0, 2).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/[0.52]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section
        id="markets"
        className="mx-auto mt-8 max-w-7xl"
      >
        <div className="glass-panel rounded-[32px] p-5 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionLabel className="mb-3 w-fit">{copy.landing.marketTitle}</SectionLabel>
              <p className="text-sm text-white/[0.52]">{copy.landing.marketBody}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {regionChips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.58]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto mt-8 max-w-7xl"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <SectionLabel className="mb-3 w-fit">{copy.landing.capabilitiesTitle}</SectionLabel>
            <h2 className="font-[var(--font-heading)] text-4xl font-semibold text-white">
              {copy.landing.capabilitiesTitle}
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.landing.capabilities.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="font-[var(--font-heading)] text-2xl">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="product"
        className="mx-auto mt-8 grid max-w-7xl gap-6 md:grid-cols-3"
      >
        <Link href={`/${locale}/demo`}>
          <Card className="h-full rounded-[32px] transition hover:border-cyan-300/30">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.requestDemo}</SectionLabel>
              <CardTitle className="font-[var(--font-heading)] text-3xl">
                {copy.demo.title}
              </CardTitle>
              <CardDescription>{copy.demo.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={`/${locale}/request`}>
          <Card className="h-full rounded-[32px] transition hover:border-cyan-300/30">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.createRequest}</SectionLabel>
              <CardTitle className="font-[var(--font-heading)] text-3xl">
                {copy.request.title}
              </CardTitle>
              <CardDescription>{copy.request.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={`/${locale}/login`}>
          <Card className="h-full rounded-[32px] transition hover:border-cyan-300/30">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.login}</SectionLabel>
              <CardTitle className="font-[var(--font-heading)] text-3xl">
                {copy.login.title}
              </CardTitle>
              <CardDescription>{copy.login.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </main>
  );
}
