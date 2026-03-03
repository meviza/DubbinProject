import { SectionLabel } from "@/components/atoms/section-label";
import { SiteHeader } from "@/components/organisms/site-header";
import { LoginPreviewForm } from "@/components/organisms/login-preview-form";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";

type LoginTemplateProps = {
  locale: Locale;
};

export function LoginTemplate({ locale }: LoginTemplateProps) {
  const copy = getLocaleCopy(locale);

  return (
    <main className="px-4 pb-16 pt-5 md:px-8">
      <SiteHeader locale={locale} route="/login" />

      <section className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[36px] p-7 md:p-9">
          <SectionLabel className="mb-5">{copy.login.kicker}</SectionLabel>
          <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-[0.95] text-white">
            {copy.login.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-white/[0.62]">
            {copy.login.body}
          </p>
          <div className="mt-8 space-y-3">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-5 text-sm leading-7 text-white/[0.62]">
              Public surface for investor, client, and member confidence.
            </div>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.05] p-5 text-sm leading-7 text-white/[0.62]">
              Real authentication should live only in the private repository and deployment stack.
            </div>
          </div>
        </div>

        <LoginPreviewForm locale={locale} />
      </section>
    </main>
  );
}
