export const siteConfig = {
  name: "Dubbin OS",
  tagLine: "Cross-border legal intelligence, built for premium operators.",
  defaultLocale: "en",
  demoRequestUrl:
    process.env.NEXT_PUBLIC_DEMO_REQUEST_URL ?? "https://tally.so/r/XxevPj",
  generalRequestUrl:
    process.env.NEXT_PUBLIC_GENERAL_REQUEST_URL ?? "https://tally.so/r/obAaLe",
  hasExternalDemoFlow: Boolean(
    process.env.NEXT_PUBLIC_DEMO_REQUEST_URL ?? "https://tally.so/r/XxevPj",
  ),
  hasExternalRequestFlow: Boolean(
    process.env.NEXT_PUBLIC_GENERAL_REQUEST_URL ?? "https://tally.so/r/obAaLe",
  ),
};

export function hasConfiguredEndpoint(value: string) {
  return value.trim().length > 0;
}
