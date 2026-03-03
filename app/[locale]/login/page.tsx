import { notFound } from "next/navigation";

import { LoginTemplate } from "@/components/templates/login-template";
import { isLocale } from "@/lib/locales";

export default async function LocalizedLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  return <LoginTemplate locale={resolvedParams.locale} />;
}
