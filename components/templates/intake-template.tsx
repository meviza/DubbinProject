import { SectionLabel } from "@/components/atoms/section-label";
import { LeadCaptureForm } from "@/components/organisms/lead-capture-form";
import { SiteHeader } from "@/components/organisms/site-header";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";

type IntakeTemplateProps = {
  locale: Locale;
  mode: "demo" | "request";
};

export function IntakeTemplate({ locale, mode }: IntakeTemplateProps) {
  const copy = getLocaleCopy(locale);
  const content = mode === "demo" ? copy.demo : copy.request;
  const route = mode === "demo" ? "/demo" : "/request";

  return (
    <main className="px-4 pb-16 pt-5 md:px-8">
      <SiteHeader locale={locale} route={route} />

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[36px] p-7 md:p-9">
          <SectionLabel className="mb-5">{content.kicker}</SectionLabel>
          <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white">
            {content.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-white/[0.62]">
            {content.body}
          </p>
          <div className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.05] p-5 text-sm leading-7 text-white/[0.58]">
            The public page collects the lead. Sensitive handling stays off this repository.
          </div>
        </div>

        <LeadCaptureForm
          locale={locale}
          mode={mode}
          title={content.title}
          description={content.body}
          ctaLabel={content.cta}
        />
      </section>
    </main>
  );
}
