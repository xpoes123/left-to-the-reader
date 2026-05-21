/* ─────────────────────────────────────────────────────────────────────
   puzzles/p000-foreword.js

   The book's flyleaf — a short note H.M. left in the front of the book,
   read before the player encounters any puzzle. Its job is to orient
   the player to three things without using tutorial language:

     1. The premise — these are H.M.'s notebooks, left to the player.
     2. The interaction — figures on the pages can be touched.
     3. The goal source — what each page is "trying to become" is
        written beneath the figure.

   This is also a puzzle module (same `init / isSolved / cleanup`
   interface as p001/p002), but it has no game state. It just renders
   text and a small page-link to Page I.
   ──────────────────────────────────────────────────────────────────── */

let _root = null;

function build() {
  const wrap = document.createElement("div");
  wrap.className = "foreword";

  /* No page numeral — this is a flyleaf, not Page I. A small italic
     title sits where the page header normally would. */
  const header = document.createElement("header");
  header.className = "page-header foreword-header";
  const title = document.createElement("h1");
  title.className = "foreword-title";
  title.textContent = "A note in the front of this book.";
  header.appendChild(title);
  wrap.appendChild(header);

  /* The letter itself, set in italic Spectral so it reads as a
     thought, not a heading. Three short paragraphs do the work. */
  const body = document.createElement("div");
  body.className = "foreword-body";
  body.innerHTML = `
    <p>If you are reading this, the rest is yours.</p>
    <p>Each page contains a figure I was trying to understand.
       The figure can be touched — touch what it shows you,
       and it changes. Beneath each figure I have written what
       the page was trying to become. When the page has become
       it, it settles.</p>
    <p>I have written in the margins. The notes are for me.
       You are welcome to them.</p>
    <p class="foreword-signature">— H. M.</p>
  `;
  wrap.appendChild(body);

  /* The "I." link — visually a page numeral, functionally a link.
     Clicking it advances to Page I (The Tide). */
  const link = document.createElement("a");
  link.className = "page-link";
  link.href = "#p001-the-tide";
  link.textContent = "I.";
  link.setAttribute("aria-label", "Turn to Page I — The Tide");
  wrap.appendChild(link);

  _root.appendChild(wrap);
}

export const puzzle = {
  id: "p000-foreword",
  title: "Foreword",

  init(root) {
    _root = root;
    build();
  },

  /* A flyleaf has no goal — it is never "solved." */
  isSolved() {
    return false;
  },

  cleanup() {
    _root = null;
  },
};
