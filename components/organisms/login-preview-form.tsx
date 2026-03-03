"use client";

import { useState } from "react";

import type { Locale } from "@/lib/locales";
import { getLocaleCopy } from "@/content/site-copy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LoginPreviewFormProps = {
  locale: Locale;
};

export function LoginPreviewForm({ locale }: LoginPreviewFormProps) {
  const copy = getLocaleCopy(locale);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  function handleContinue() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "dubbin:login:preview",
        JSON.stringify({
          email,
          role,
          locale,
          timestamp: new Date().toISOString(),
        }),
      );
      window.location.assign(`/${locale}/dashboard`);
    }
  }

  return (
    <Card className="rounded-[36px]">
      <CardHeader className="border-b border-white/[0.08] pb-6">
        <CardTitle className="font-[var(--font-heading)] text-3xl">
          {copy.login.title}
        </CardTitle>
        <CardDescription className="max-w-2xl text-base">
          {copy.login.body}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-6">
        <label className="block space-y-3">
          <span className="text-sm font-medium text-white/[0.78]">
            {copy.login.emailLabel}
          </span>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@company.com"
          />
        </label>
        <label className="block space-y-3">
          <span className="text-sm font-medium text-white/[0.78]">
            {copy.login.roleLabel}
          </span>
          <Input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder={copy.login.rolePlaceholder}
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" onClick={handleContinue}>
            {copy.login.cta}
          </Button>
          <span className="text-sm text-white/[0.52]">{copy.login.helper}</span>
        </div>
      </CardContent>
    </Card>
  );
}
