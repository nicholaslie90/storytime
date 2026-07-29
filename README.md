# Storytime

A story a day to read aloud to a baby (0–12 months), in English.

**Live:** https://nicholaslie90.github.io/storytime/

- 30 short stories, picked by the day of the month — day 1 is story 1, day 31 wraps back to story 1.
- **Read aloud** button uses the browser's built-in speech synthesis (no account, no API key). Voice quality depends on the browser/OS.
- **Bahasa Indonesia** toggle shows the translation under the story.
- 3–5 vocabulary words per story, highlighted in the text and listed below it.
- All 30 stories are browsable at `#/archive`.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app — inline CSS and JS, no build step, no dependencies. |
| `stories.js` | The 30 stories: title, English, Indonesian, vocabulary. |
| `test.js` | `node test.js` — checks story count, matching line counts, word counts, that every vocabulary word actually appears in its story, and that the date rotation covers all 31 days. |

## Adding a story

Append to `STORIES` in `stories.js`. `en` and `id` must have the same number of lines (each line becomes a paragraph), and every word in `v` must appear in `en` or highlighting silently does nothing — `node test.js` catches both.

Note: the day-of-month rotation assumes exactly 30 stories. Adding more makes the archive longer but the daily pick still only reaches the first 30 unless you change how `todayIdx()` works.

## Local preview

Open `index.html` in a browser. No server needed.
