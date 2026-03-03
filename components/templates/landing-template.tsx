import Link from "next/link";

import { SectionLabel } from "@/components/atoms/section-label";
import { MetricTile } from "@/components/molecules/metric-tile";
import { SiteHeader } from "@/components/organisms/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";

type LandingTemplateProps = {
  locale: Locale;
};

export function LandingTemplate({ locale }: LandingTemplateProps) {
  const copy = getLocaleCopy(locale);

  return (
    <main className="px-4 pb-20 pt-5 md:px-8">
      <SiteHeader locale={locale} route="" />

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-8 rounded-[42px] border border-[rgba(214,179,126,0.14)] bg-[linear-gradient(180deg,rgba(23,16,10,0.96),rgba(17,12,8,0.94))] p-8 md:p-10">
            <div>
              <SectionLabel className="mb-6">{copy.landing.kicker}</SectionLabel>
              <h1 className="max-w-4xl font-[var(--font-heading)] text-6xl font-semibold leading-[0.9] text-[#fff3df] md:text-8xl">
                {copy.landing.title}
                <span className="block text-[#d7b07a]">{copy.landing.accent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(241,223,196,0.62)] md:text-xl">
                {copy.landing.body}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/demo`}>
                  <Button size="lg">{copy.common.requestDemo}</Button>
                </Link>
                <Link href={`/${locale}/login`}>
                  <Button variant="secondary" size="lg">
                    {copy.common.login}
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {copy.landing.productPillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(214,179,126,0.16)] bg-[rgba(241,222,192,0.04)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(241,223,196,0.56)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="max-w-xl text-sm leading-7 text-[rgba(241,223,196,0.48)]">
                {copy.landing.trustNote}
              </p>
            </div>
          </div>

          <Card className="rounded-[42px] p-0">
            <CardHeader className="border-b border-[rgba(214,179,126,0.12)] p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <SectionLabel>{copy.common.securePreview}</SectionLabel>
                <span className="rounded-full border border-[rgba(214,179,126,0.16)] bg-[rgba(241,222,192,0.04)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(241,223,196,0.56)]">
                  Invite only
                </span>
              </div>
              <CardTitle className="pt-3 text-4xl md:text-5xl">
                Private command room
              </CardTitle>
              <CardDescription className="max-w-md text-base">
                A calmer, more discreet landing surface for a high-trust product.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-7 md:p-8">
              <div className="rounded-[30px] border border-[rgba(214,179,126,0.12)] bg-[rgba(13,9,6,0.55)] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[rgba(241,223,196,0.44)]">
                      Active matter
                    </p>
                    <p className="mt-2 font-[var(--font-heading)] text-3xl text-[#fff0d7]">
                      Series A note pack
                    </p>
                  </div>
                  <span className="rounded-full border border-[rgba(214,179,126,0.16)] bg-[rgba(214,179,126,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f2d8ae]">
                    review
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {copy.landing.metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-[rgba(214,179,126,0.08)] bg-[rgba(241,222,192,0.03)] p-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[rgba(241,223,196,0.4)]">
                        {item.label}
                      </p>
                      <p className="mt-3 font-[var(--font-heading)] text-4xl text-[#fff1db]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {copy.landing.capabilities.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[rgba(214,179,126,0.1)] bg-[rgba(241,222,192,0.03)] p-5"
                  >
                    <p className="font-[var(--font-heading)] text-3xl text-[#fff0d7]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[rgba(241,223,196,0.54)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {copy.landing.metrics.map((item) => (
            <MetricTile
              key={item.label}
              label={item.label}
              value={item.value}
              helper={item.helper}
            />
          ))}
        </div>
      </section>

      <section
        id="capabilities"
        className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="rounded-[38px] border border-[rgba(214,179,126,0.14)] bg-[linear-gradient(180deg,rgba(24,17,11,0.96),rgba(18,13,9,0.94))] p-7 md:p-8">
          <SectionLabel className="mb-5 w-fit">{copy.landing.capabilitiesTitle}</SectionLabel>
          <h2 className="max-w-xl font-[var(--font-heading)] text-5xl leading-[0.95] text-[#fff3df] md:text-6xl">
            Less noise. Better signal.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[rgba(241,223,196,0.58)]">
            {copy.landing.capabilitiesBody}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.landing.capabilities.map((item) => (
            <Card key={item.title} className="rounded-[32px]">
              <CardHeader>
                <CardTitle className="text-4xl">{item.title}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="markets"
        className="mx-auto mt-8 max-w-7xl"
      >
        <div className="rounded-[38px] border border-[rgba(214,179,126,0.14)] bg-[linear-gradient(180deg,rgba(23,16,10,0.95),rgba(17,12,8,0.92))] p-7 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel className="mb-5 w-fit">{copy.landing.marketTitle}</SectionLabel>
              <h2 className="max-w-2xl font-[var(--font-heading)] text-5xl leading-[0.95] text-[#fff3df] md:text-6xl">
                Built for selective expansion.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(241,223,196,0.56)]">
                {copy.landing.marketBody}
              </p>
            </div>
            <Link href={`/${locale}/request`}>
              <Button variant="secondary" size="lg">
                {copy.common.createRequest}
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {copy.landing.marketGaps.map((item) => (
              <div
                key={item.region}
                className="rounded-[24px] border border-[rgba(214,179,126,0.1)] bg-[rgba(241,222,192,0.03)] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(241,223,196,0.42)]">
                  {item.region}
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(241,223,196,0.56)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="product"
        className="mx-auto mt-8 grid max-w-7xl gap-6 md:grid-cols-3"
      >
        <Link href={`/${locale}/demo`}>
          <Card className="h-full rounded-[32px] transition hover:border-[rgba(214,179,126,0.28)]">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.requestDemo}</SectionLabel>
              <CardTitle className="text-4xl">{copy.demo.title}</CardTitle>
              <CardDescription>{copy.demo.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={`/${locale}/request`}>
          <Card className="h-full rounded-[32px] transition hover:border-[rgba(214,179,126,0.28)]">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.createRequest}</SectionLabel>
              <CardTitle className="text-4xl">{copy.request.title}</CardTitle>
              <CardDescription>{copy.request.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href={`/${locale}/dashboard`}>
          <Card className="h-full rounded-[32px] transition hover:border-[rgba(214,179,126,0.28)]">
            <CardHeader>
              <SectionLabel className="w-fit">{copy.common.dashboard}</SectionLabel>
              <CardTitle className="text-4xl">{copy.dashboard.title}</CardTitle>
              <CardDescription>{copy.dashboard.kicker}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </main>
  );
}
