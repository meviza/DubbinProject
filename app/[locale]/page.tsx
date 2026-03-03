import { LandingTemplate } from "@/components/templates/landing-template";
import { isLocale } from "@/lib/locales";
import { notFound } from "next/navigation";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  return <LandingTemplate locale={resolvedParams.locale} />;
}
