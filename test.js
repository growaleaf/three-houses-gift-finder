const CHARACTERS = require("./data.js");

let pass = 0;
let fail = 0;

function assert(cond, msg) {
  if (cond) {
    pass++;
  } else {
    fail++;
    console.error("FAIL: " + msg);
  }
}

function findChar(name) {
  return CHARACTERS.find((c) => c.name === name);
}

assert(CHARACTERS.length === 39, `character count should be 39, got ${CHARACTERS.length}`);

const edelgard = findChar("Edelgard");
assert(!!edelgard, "Edelgard should exist");
assert(edelgard.favorites.includes("Carnation"), "Edelgard favorites include Carnation");
assert(edelgard.dislikes.includes("Goddess Statue"), "Edelgard dislikes include Goddess Statue");

const caspar = findChar("Caspar");
assert(!!caspar, "Caspar should exist");
assert(caspar.favorites.includes("Smoked Meat"), "Caspar favorites include Smoked Meat");

const hubert = findChar("Hubert");
assert(!!hubert, "Hubert should exist (source heading typo'd as Hueburt)");
assert(hubert.favorites.includes("Board Game"), "Hubert favorites include Board Game");
assert(hubert.source_typo === "Hueburt", "Hubert's source typo is disclosed");

assert(!findChar("Hueburt"), "the typo'd name should not appear as its own entry");

for (const c of CHARACTERS) {
  assert(typeof c.name === "string" && c.name.length > 0, `character has a name: ${JSON.stringify(c)}`);
  assert(Array.isArray(c.favorites) && Array.isArray(c.dislikes),
    `character ${c.name} has favorites/dislikes arrays`);
}

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
