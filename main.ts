const fs = require("fs");
const path = require("path");

const story = "Medal arrived; the soldier never did.";

// Runtime guard: the entry must be exactly six words and 1-60 chars.
const words = story.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error("entry must be exactly six words, got " + words.length);
}
if (story.length < 1 || story.length > 60) {
  throw new Error("entry must be 1-60 characters, got " + story.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), story, "utf8");
