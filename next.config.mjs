import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.NEXT_PUBLIC_GITHUB_PAGES_REPO ?? "DubbinProject";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : "standalone",
  outputFileTracingRoot: __dirname,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
