import { notFound } from "next/navigation";

import { IntakeTemplate } from "@/components/templates/intake-template";
import { isLocale } from "@/lib/locales";

export default async function LocalizedDemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  return <IntakeTemplate locale={resolvedParams.locale} mode="demo" />;
}
