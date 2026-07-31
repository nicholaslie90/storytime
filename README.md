# Storytime

A story a day to read aloud to a baby (0–12 months), in English.

**Live:** https://nicholaslie90.github.io/storytime/

- **90 stories**, picked by the day of the year — so a full year comes round to every one of them, four times over.
- **54 of them are retold from the public domain** across 25 sources: Mother Goose rhymes, Aesop's fables, Grimm, Hans Christian Andersen, Beatrix Potter, Edward Lear, Eugene Field, Sarah Josepha Hale, Joseph Jacobs, Asbjørnsen & Moe, the Panchatantra, and English, Russian, Japanese and Indonesian folk tales. Each one shows its source as a credit line.
- Around 90 words per story (up from ~55), in short spoken sentences with lots of sound words and repetition.
- Every story gets an **animated scene** chosen from six presets (`day`, `night`, `rain`, `snow`, `water`, `garden`). The scene decides the sky and hills, what floats past (sparkles, twinkling stars, raindrops, snowflakes, bubbles, blossom), and how the hero moves (bob, swim, hop, shiver). Up to five animated cast members per story, each on its own path. Tap the picture and the hero wiggles and sparkles fly off where you touched.
- Each story also has its own colour, derived from one hue token.
- **Read aloud** button uses the browser's built-in speech synthesis (no account, no API key), and pops each word as it is spoken. Voice quality depends on the browser/OS.
- **Bahasa Indonesia** toggle shows the translation under the story.
- 3–5 vocabulary words per story, highlighted in the text and listed below it.
- All 90 stories are browsable at `#/archive`.
- Light and dark (night) themes follow the system setting; all motion is off under `prefers-reduced-motion`.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — inline CSS and JS, no build step, no dependencies. |
| `stories.js` | The 90 stories: title, scene, illustration emoji, source, English, Indonesian, vocabulary. |
| `test.js` | `node test.js` — checks story count, unique titles, valid scene names, that no single scene covers more than 45% of the stories, matching line counts, word counts, 3–5 illustration emoji, that every scene has CSS and an FX entry and is actually used, that every vocabulary word gets highlighted, that read-aloud word offsets match the spoken text, and that a year of dates reaches every story. |

## Adding a story

Append to `STORIES` in `stories.js`:

- `sc` — one of `day`, `night`, `rain`, `snow`, `water`, `garden`.
- `e` — 3 to 5 emoji, hero first, then friends.
- `src` — optional public-domain credit, shown under the title.
- `en` / `id` — must have the same number of lines (each line becomes a paragraph), 80–260 words.
- `v` — every word must appear inside a *single* line of `en`, or highlighting silently does nothing. Avoid hyphenated phrases; they span two word boundaries.

`node test.js` catches all of it. The daily rotation adapts to the story count automatically.

To add a new scene, add a `.sc-<name>` CSS block **and** an `FX` entry in `index.html`, then use it in a story — the test insists on all three.

## Local preview

Open `index.html` in a browser. No server needed.
