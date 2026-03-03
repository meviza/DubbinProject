"use client";

import { useState } from "react";

import { hasConfiguredEndpoint, siteConfig } from "@/config/site";
import { getLocaleCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locales";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/molecules/form-field";

type LeadCaptureFormProps = {
  locale: Locale;
  mode: "demo" | "request";
  title: string;
  description: string;
  ctaLabel: string;
};

export function LeadCaptureForm({
  locale,
  mode,
  title,
  description,
  ctaLabel,
}: LeadCaptureFormProps) {
  const copy = getLocaleCopy(locale);
  const endpoint =
    mode === "demo" ? siteConfig.demoRequestUrl : siteConfig.generalRequestUrl;
  const [feedback, setFeedback] = useState("");

  function handleSubmit(formData: FormData) {
    const payload = {
      mode,
      submittedAt: new Date().toISOString(),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      jurisdiction: String(formData.get("jurisdiction") ?? ""),
      need: String(formData.get("need") ?? ""),
    };

    if (typeof window !== "undefined") {
      window.localStorage.setItem(`dubbin:${mode}:draft`, JSON.stringify(payload));

      if (hasConfiguredEndpoint(endpoint)) {
        window.open(endpoint, "_blank", "noopener,noreferrer");
        setFeedback(copy.intake.successWithEndpoint);
        return;
      }
    }

    setFeedback(copy.intake.successLocalOnly);
  }

  return (
    <Card className="rounded-[36px]">
      <CardHeader className="border-b border-white/[0.08] pb-6">
        <CardTitle className="font-[var(--font-heading)] text-3xl">{title}</CardTitle>
        <CardDescription className="max-w-2xl text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <form
          action={handleSubmit}
          className="grid gap-5 lg:grid-cols-2"
        >
          <FormField
            label={copy.intake.nameLabel}
            name="name"
            placeholder={copy.intake.nameLabel}
          />
          <FormField
            label={copy.intake.emailLabel}
            name="email"
            placeholder="name@company.com"
          />
          <FormField
            label={copy.intake.companyLabel}
            name="company"
            placeholder={copy.intake.companyLabel}
          />
          <FormField
            label={copy.intake.jurisdictionLabel}
            name="jurisdiction"
            placeholder={copy.intake.jurisdictionLabel}
          />
          <div className="lg:col-span-2">
            <FormField
              label={copy.intake.needLabel}
              name="need"
              placeholder={copy.intake.needLabel}
              textarea
            />
          </div>
          <div className="space-y-3 lg:col-span-2">
            <p className="text-sm leading-7 text-white/[0.58]">
              {copy.intake.privacyHint}
            </p>
            <p className="text-sm leading-7 text-white/[0.58]">
              {hasConfiguredEndpoint(endpoint)
                ? copy.intake.endpointHint
                : copy.intake.localDraftHint}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg">
                {ctaLabel}
              </Button>
              <span className="text-sm text-white/[0.52]">
                {siteConfig.tagLine}
              </span>
            </div>
            {feedback ? (
              <div className="rounded-3xl border border-emerald-300/[0.18] bg-emerald-300/[0.08] px-4 py-3 text-sm text-emerald-100">
                {feedback}
              </div>
            ) : null}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
