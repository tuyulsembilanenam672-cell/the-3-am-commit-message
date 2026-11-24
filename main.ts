import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: reverted the 3 AM deploy — the tests passed because they were asleep too, and so was I";

const MAX_CODE_POINTS = 200;

function codePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const count = codePoints(LINE);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`entry is ${count} code points, must be 1-${MAX_CODE_POINTS}`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${count} code point(s) to /output/entry.txt`);
}

main();
