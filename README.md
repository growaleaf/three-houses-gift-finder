# Fire Emblem: Three Houses Gift Finder

Static page. Search an item to see which students favorite or dislike it. Or pick a student to see their full gift list.

## Data

Parsed from `../source_thegamer.html` (thegamer.com, "Fire Emblem: Three Houses - Character Gift Guide", published 2021-04-25, modified 2023-03-22, fetched 2026-11-24) via `../parse.py` into `../parsed.json`, then embedded in `data.js`.

39 students/characters covered by the source, all 39 parsed cleanly (none skipped). The source heads one table "Hueburt" (a typo); the data corrects it to "Hubert" and discloses the correction via the `source_typo` field, shown on the page when that student is selected. Nothing is invented to fill gaps; characters or items not in the source are simply not listed.

## Files

- `index.html` — the page
- `data.js` — the 39 characters' gift data (also usable from Node via `module.exports`)
- `test.js` — known-answer tests, run with `node test.js`

## Caveat

Single source. Community gift guides can disagree with each other and with in-game behavior. Verify in-game.
