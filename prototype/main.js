// main.js — minimal puzzle loader.
//
// Each puzzle is an ES module that default-exports (or named-exports) a
// `puzzle` object conforming to the small interface declared in
// puzzles/p001-the-tide.js. main.js's only job is to fetch the requested
// puzzle module and mount it into the #book-page container.
//
// Loading is keyed on the URL hash (e.g. #p002-…), so the future
// table-of-contents will just be a list of <a href="#…"> links.
// Default is the first puzzle.

const REGISTRY = {
  "p000-foreword":            () => import("./puzzles/p000-foreword.js"),
  "p001-the-tide":            () => import("./puzzles/p001-the-tide.js"),
  "p002-the-three-inkwells":  () => import("./puzzles/p002-the-three-inkwells.js"),
};

/* The flyleaf is the entry point. It orients the player; the puzzles
   begin on Page I after they "turn the page." */
const DEFAULT_PUZZLE = "p000-foreword";

const root = document.getElementById("book-page");
let current = null;

async function load(id) {
  if (current && current.cleanup) {
    try { current.cleanup(); } catch (e) { console.error(e); }
  }
  root.innerHTML = "";

  const loader = REGISTRY[id] || REGISTRY[DEFAULT_PUZZLE];
  const mod = await loader();
  const puzzle = mod.puzzle || mod.default;
  current = puzzle;
  puzzle.init(root);
}

function currentId() {
  const id = (location.hash || "").replace(/^#/, "");
  return REGISTRY[id] ? id : DEFAULT_PUZZLE;
}

window.addEventListener("hashchange", () => load(currentId()));
load(currentId());
