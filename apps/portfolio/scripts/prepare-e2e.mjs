import { rm } from "node:fs/promises";

const E2E_BUILD_DIRECTORY = ".next-e2e";

await rm(E2E_BUILD_DIRECTORY, { force: true, recursive: true });
