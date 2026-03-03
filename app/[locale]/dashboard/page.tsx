import { notFound } from "next/navigation";

import { DashboardTemplate } from "@/components/templates/dashboard-template";
import { isLocale } from "@/lib/locales";

export default async function LocalizedDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  return <DashboardTemplate locale={resolvedParams.locale} />;
}
