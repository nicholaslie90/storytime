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
  assert.ok(Array.isArray(s.e) && s.e.length === 3 && s.e.every(Boolean), `${where}: e needs 3 emoji [hero, friend, friend]`);
  assert.strictEqual(s.en.split('\n').length, s.id.split('\n').length, `${where}: line counts differ between en and id`);

  const words = s.en.trim().split(/\s+/).length;
  assert.ok(words >= 30 && words <= 120, `${where}: ${words} words, want 30-120 for 0-12 months`);

  // Highlighting matches line by line, so a vocab phrase must sit inside one line.
  for (const [w] of s.v) {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    assert.ok(s.en.split('\n').some(l => re.test(l)), `${where}: vocab "${w}" not found in one line of the English text`);
  }
}

// Rotation: every day of the month maps to a real story, and day 31 wraps to the first.
for (let d = 1; d <= 31; d++) {
  const idx = (d - 1) % STORIES.length;
  assert.ok(STORIES[idx], `day ${d} has no story`);
}
assert.strictEqual((31 - 1) % STORIES.length, 0, 'day 31 should wrap to story 1');

// Read-aloud highlights by character offset, so every word's data-i must be that
// word's real position in the spoken string (newlines spoken as single spaces).
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const build = eval('(' + html.match(/^function build\([\s\S]*?\n}/m)[0] + ')');
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const rx = w => new RegExp('\\b(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'i');
for (const s of STORIES) {
  const spoken = s.en.replace(/\n/g, ' ');
  for (const [, i, word] of build(s.en, s.v).matchAll(/data-i="(\d+)">([^<]+)</g)) {
    assert.strictEqual(spoken.slice(+i, +i + word.length), word.replace(/&amp;|&lt;|&gt;/g, m => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>' }[m])),
      `${s.t}: word "${word}" is not at offset ${i} of the spoken text`);
  }
}
const marked = build(STORIES[0].en, STORIES[0].v).match(/class="w v"/g);
assert.strictEqual(marked.length, 4, 'story 1 should mark 4 word spans (3 vocab, one of them 2 words)');

console.log('ok — 30 stories, vocab, rotation and read-aloud offsets check out');
