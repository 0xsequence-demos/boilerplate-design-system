#!/usr/bin/env node

import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import { rimraf } from "rimraf";
async function build() {
  const command =
    "npx tsc --project ./config/tsconfig.esm.json & tsc --project ./config/tsconfig.cjs.json";

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Error running TypeScript compiler:", error.message);
    } else {
      console.log("TypeScript compilation completed.");
    }
  });
}

function copy(file, dest) {
  const relativePath = path.relative(path.join("src", "package"), file);
  const destTarget = path.join(dest, relativePath);
  fs.mkdirSync(path.dirname(destTarget), { recursive: true });
  fs.copyFileSync(file, destTarget);
}

async function copySupportFiles() {
  const srcGlob = path.join(".", "src", "package", "**", "*.css");
  const esmDist = path.join(".", "package", "dist", "esm");
  const cjsDist = path.join(".", "package", "dist", "cjs");

  const files = await glob(srcGlob);

  for (const file of files) {
    copy(file, esmDist);
    copy(file, cjsDist);
  }

  console.log(`Copied ${files.length} support files`);
}

async function clean() {
  rimraf(path.join(".", "package", "dist"));
  console.log("Cleaned up");
}

async function main() {
  try {
    // Clean up old files
    await clean();
    // Build the typescript files
    await build();
    // Copy support files (css)
    await copySupportFiles();
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
