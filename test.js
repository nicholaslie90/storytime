// node test.js — fails if a story is malformed or a vocab word can't be highlighted.
const assert = require('assert');
const fs = require('fs');
// `const` inside eval stays in the eval scope, so hand it back explicitly.
const STORIES = eval(fs.readFileSync(__dirname + '/stories.js', 'utf8') + ';STORIES');

assert.strictEqual(STORIES.length, 30, 'need 30 stories for date rotation');

for (const [i, s] of STORIES.entries()) {
  const where = `story ${i + 1} (${s.t})`;
  for (const k of ['t', 'en', 'id']) assert.ok(s[k] && s[k].trim(), `${where}: missing ${k}`);
  assert.ok(s.v.length >= 3, `${where}: needs 3+ vocab words`);
  assert.strictEqual(s.en.split('\n').length, s.id.split('\n').length, `${where}: line counts differ between en and id`);

  const words = s.en.trim().split(/\s+/).length;
  assert.ok(words >= 30 && words <= 120, `${where}: ${words} words, want 30-120 for 0-12 months`);

  // Highlighting only works if the word is really in the text.
  for (const [w] of s.v) {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    assert.ok(re.test(s.en), `${where}: vocab "${w}" not found in the English text`);
  }
}

// Rotation: every day of the month maps to a real story, and day 31 wraps to the first.
for (let d = 1; d <= 31; d++) {
  const idx = (d - 1) % STORIES.length;
  assert.ok(STORIES[idx], `day ${d} has no story`);
}
assert.strictEqual((31 - 1) % STORIES.length, 0, 'day 31 should wrap to story 1');

console.log('ok — 30 stories, vocab and rotation check out');
