import assert from "node:assert/strict";
import test from "node:test";

import { chunk, reply, topK } from "./chatty.ts";

test("fallback matches keywords and never dead-ends", () => {
  assert.match(reply("How much do you charge?"), /brief to ttalegn29/);
  assert.doesNotMatch(reply("Payment integrations?"), /Coop/);
  assert.match(reply("zzz"), /ttalegn29@gmail.com/);
});

test("chunks split on sections and cap length", () => {
  const md = "# Doc\n\nintro\n\n## A\n\none\n\n## B\n\n" + "x".repeat(900) + "\n\n" + "y".repeat(900);
  const out = chunk("doc.md", md);
  assert.equal(out.length, 4);
  assert.ok(out.every((c) => c.startsWith("[doc.md")));
  assert.ok(out[3].includes("(cont.)") && out[3].includes("y"));
});

test("topK ranks by cosine similarity", () => {
  assert.deepEqual(topK([1, 0], [[0, 1], [2, 0.1], [1, 1]], 2), [1, 2]);
});

test("keywords match whole-word starts only", () => {
  // "integrated" contains "rate" but is not a pricing question.
  assert.match(reply("What payment providers has he integrated?"), /AddisPay/);
});
