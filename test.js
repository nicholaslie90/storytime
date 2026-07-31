// node test.js — fails if a story is malformed or a vocab word can't be highlighted.
const assert = require('assert');
const fs = require('fs');
// `const` inside eval stays in the eval scope, so hand it back explicitly.
const STORIES = eval(fs.readFileSync(__dirname + '/stories.js', 'utf8') + ';STORIES');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');

assert.strictEqual(STORIES.length, 90, 'need 90 stories');

// The scenes the CSS and the FX table actually know about.
const SCENES = ['day', 'night', 'rain', 'snow', 'water', 'garden'];
for (const sc of SCENES) {
  assert.ok(html.includes('.sc-' + sc) || sc === 'day', `index.html has no CSS for scene "${sc}"`);
  assert.ok(new RegExp('\\b' + sc + ':\\s*\\{').test(html), `index.html FX table has no entry for scene "${sc}"`);
}

// A typo in an animation name fails silently in CSS, so pin both directions.
const kfDefined = new Set([...html.matchAll(/@keyframes\s+([\w-]+)/g)].map(m => m[1]));
const kfUsed = new Set([...html.matchAll(/animation:\s*([\w-]+)/g)].map(m => m[1]).filter(n => n !== 'none' && !n.startsWith('var')));
for (const [, n] of html.matchAll(/a:\s*'([\w-]+)\s/g)) kfUsed.add(n);   // the FX table's shorthand
for (const n of kfUsed) assert.ok(kfDefined.has(n), `animation "${n}" has no @keyframes block`);
for (const n of kfDefined) assert.ok(kfUsed.has(n), `@keyframes "${n}" is never used`);

const titles = new Set();
for (const [i, s] of STORIES.entries()) {
  const where = `story ${i + 1} (${s.t})`;
  for (const k of ['t', 'en', 'id']) assert.ok(s[k] && s[k].trim(), `${where}: missing ${k}`);
  assert.ok(!titles.has(s.t), `${where}: duplicate title`);
  titles.add(s.t);
  assert.ok(SCENES.includes(s.sc), `${where}: sc "${s.sc}" is not one of ${SCENES.join(', ')}`);
  assert.ok(s.v.length >= 3, `${where}: needs 3+ vocab words`);
  assert.ok(Array.isArray(s.e) && s.e.length >= 3 && s.e.length <= 5 && s.e.every(Boolean),
    `${where}: e needs 3-5 emoji [hero, then friends]`);
  assert.ok(s.src === undefined || (typeof s.src === 'string' && s.src.trim()), `${where}: src must be a non-empty string`);
  assert.strictEqual(s.en.split('\n').length, s.id.split('\n').length, `${where}: line counts differ between en and id`);

  const words = s.en.trim().split(/\s+/).length;
  assert.ok(words >= 80 && words <= 260, `${where}: ${words} words, want 80-260`);

  // Highlighting matches line by line, so a vocab phrase must sit inside one line.
  for (const [w] of s.v) {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    assert.ok(s.en.split('\n').some(l => re.test(l)), `${where}: vocab "${w}" not found in one line of the English text`);
  }
}

// At least half the stories credit a public-domain source.
const sourced = STORIES.filter(s => s.src).length;
assert.ok(sourced >= STORIES.length / 2, `only ${sourced} of ${STORIES.length} stories credit a source, want half`);

// Every scene is actually used, or the CSS for it is dead weight.
for (const sc of SCENES) assert.ok(STORIES.some(s => s.sc === sc), `no story uses scene "${sc}"`);
// And no scene carries the whole app: a rotation of one backdrop is not variety.
for (const sc of SCENES) {
  const n = STORIES.filter(s => s.sc === sc).length;
  assert.ok(n <= STORIES.length * 0.45, `scene "${sc}" is used by ${n} of ${STORIES.length} stories, too many`);
}

// Rotation: day of the year picks the story, and a year reaches every one of them.
const dayOfYear = d => Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 1)) / 864e5) + 1;
assert.strictEqual(dayOfYear(new Date(2026, 0, 1)), 1, '1 January should be day 1');
assert.strictEqual(dayOfYear(new Date(2026, 11, 31)), 365, '31 December 2026 should be day 365');
assert.strictEqual(dayOfYear(new Date(2024, 11, 31)), 366, '31 December 2024 (leap) should be day 366');
const seen = new Set();
for (let d = 1; d <= 366; d++) {
  const idx = (d - 1) % STORIES.length;
  assert.ok(STORIES[idx], `day ${d} has no story`);
  seen.add(idx);
}
assert.strictEqual(seen.size, STORIES.length, 'a year should reach every story');

// Read-aloud highlights by character offset, so every word's data-i must be that
// word's real position in the spoken string (newlines spoken as single spaces).
const build = eval('(' + html.match(/^function build\([\s\S]*?\n}/m)[0] + ')');
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const rx = w => new RegExp('\\b(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'i');
for (const s of STORIES) {
  const spoken = s.en.replace(/\n/g, ' ');
  for (const [, i, word] of build(s.en, s.v).matchAll(/data-i="(\d+)">([^<]+)</g)) {
    assert.strictEqual(spoken.slice(+i, +i + word.length), word.replace(/&amp;|&lt;|&gt;/g, m => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>' }[m])),
      `${s.t}: word "${word}" is not at offset ${i} of the spoken text`);
  }
  // Every vocab entry must actually get marked, one span per word in the phrase.
  const want = s.v.reduce((n, [w]) => n + w.split(/\s+/).length, 0);
  const got = (build(s.en, s.v).match(/class="w v"/g) || []).length;
  assert.strictEqual(got, want, `${s.t}: marked ${got} vocab word spans, expected ${want}`);
}

console.log('ok — ' + STORIES.length + ' stories (' + sourced + ' from the public domain), scenes, vocab, rotation and read-aloud offsets check out');
