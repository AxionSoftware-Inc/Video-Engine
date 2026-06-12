import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: [
    "@methodslab/methods-engine",
    "@methodslab/scene-dsl",
    "@methodslab/video-engine",
    "@methodslab/visual-engine",
  ],
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;
