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
          <div className="mt-12 grid gap-4 md:grid-cols-3">
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

        <Card className="relative overflow-hidden rounded-[36px]">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/[0.12] blur-3xl" />
          <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-fuchsia-300/10 blur-3xl" />
          <CardHeader className="space-y-4 border-b border-white/[0.08]">
            <SectionLabel>{copy.common.securePreview}</SectionLabel>
            <CardTitle className="pt-2 font-[var(--font-heading)] text-3xl">
              {copy.landing.productTitle}
            </CardTitle>
            <CardDescription className="text-base">
              {copy.landing.productBody}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {copy.landing.productPillars.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/[0.08] bg-white/[0.05] p-5"
              >
                <p className="text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section
        id="capabilities"
        className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <Card className="rounded-[36px]">
          <CardHeader>
            <SectionLabel className="w-fit">{copy.landing.capabilitiesTitle}</SectionLabel>
            <CardTitle className="font-[var(--font-heading)] text-4xl">
              {copy.landing.capabilitiesTitle}
            </CardTitle>
            <CardDescription className="max-w-2xl text-base">
              {copy.landing.capabilitiesBody}
            </CardDescription>
          </CardHeader>
        </Card>
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
        id="markets"
        className="mx-auto mt-8 grid max-w-7xl gap-6 xl:grid-cols-[0.95fr_1.05fr]"
      >
        <Card className="rounded-[36px]">
          <CardHeader>
            <SectionLabel className="w-fit">{copy.landing.marketTitle}</SectionLabel>
            <CardTitle className="font-[var(--font-heading)] text-4xl">
              {copy.landing.marketTitle}
            </CardTitle>
            <CardDescription className="max-w-2xl text-base">
              {copy.landing.marketBody}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          {copy.landing.marketGaps.map((item) => (
            <Card key={item.region}>
              <CardHeader>
                <SectionLabel className="w-fit">{item.region}</SectionLabel>
                <CardTitle className="font-[var(--font-heading)] text-2xl">
                  {item.region}
                </CardTitle>
                <CardDescription>{item.gap}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-7 text-white/[0.62]">
                {item.value}
              </CardContent>
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
              <CardDescription>{copy.demo.body}</CardDescription>
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
              <CardDescription>{copy.request.body}</CardDescription>
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
              <CardDescription>{copy.login.body}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </main>
  );
}
