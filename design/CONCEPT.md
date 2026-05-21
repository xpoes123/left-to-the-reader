# Concept — Locked Decisions

Updated 2026-05-21. Anything not on this list is still open.

## Project-level commitment

**This game is a tribute to Owen Maitzen (1997–2021).** Locked 2026-05-21
after watching/reading his *HACKENBUSH* video. The project is also a
tribute to Elwyn Berlekamp, John Conway, and Richard Guy, whose
*Winning Ways for your Mathematical Plays* is the math the game teaches.

What this commitment requires of us:

1. **The math must be correct.** Every puzzle's mathematical structure
   verified, every game-value computed, the Capstone-C library-as-
   disjunctive-sum XOR'ing to zero verified by hand or solver. Sloppy
   math in a tribute to mathematicians disqualifies the tribute.
2. **The writing must have soul.** Functional artifact text isn't
   enough. The marginalia must be prose a literature-trained reader
   would respect. Maitzen's mother Rohan Maitzen is a literature
   professor at Dalhousie; if she ever reads the game, it should not
   embarrass us. That is the bar.
3. **The ending must land.** Act 3's climax is the highest-risk
   creative beat. If it lands, the tribute works. If it doesn't, the
   tribute makes the failure more visible.
4. **The game must be finished.** Indie tribute games that never ship
   honor no one. Scope decisions from here on serve completion, not
   ambition. Better to ship 18 perfect puzzles than 22 mediocre ones.
5. **We contact Rohan Maitzen before final release.** Not now — way
   too early — but with a polished demo and a clear ask. If she
   declines the dedication, we respect that and keep the work without
   the name. Goal: full enthusiastic permission.

## Dedications (planned)

- **Opening screen:** *"For Owen Maitzen (1997–2021), who showed us
  what these games meant."* — formal dedication, requires Rohan
  Maitzen's permission before final release.
- **Postscript book** (after credits, optional math layer): *"For
  Elwyn Berlekamp, John Conway, and Richard Guy, who found them."*
- **In-credits:** acknowledgement of Maitzen's video as primary
  inspiration; acknowledgement of USAMTS, Putnam, and the olympiad
  community for source problems.

## Maitzen reference layers in-fiction (locked 2026-05-21)

We do *not* fictionalize Maitzen as the predecessor character. Instead,
Maitzen appears throughout the game as a *real referenced figure*. This
is normal artistic citation and does not require special permission.
Three layers:

1. **The predecessor admires Maitzen within the fiction.** H.M. is
   fictional. In the fiction, H.M. watched Maitzen's video. Occasional
   marginalia references it explicitly, e.g.: *"O.M. had a way of
   saying these things that I cannot match. I have been re-reading his
   only essay tonight. He died young; I have lived long; he is the
   better mathematician anyway."* This puts Maitzen in the game's
   world as the actual figure he was, while the protagonist remains
   fictional.

2. **The postscript book channels Maitzen as narrator-of-the-math.**
   After the credits, the optional math-layer postscript is written in
   a voice that owes a deliberate debt to Maitzen's pedagogical
   instinct — warm, curious, slightly awed. The postscript cites
   Maitzen explicitly when introducing the formal CGT terminology.

3. **A specific in-game book bears witness to his video.** Late Act 2,
   one book in the library contains a small chapter the predecessor
   wrote *about* watching Maitzen's video. The marginalia in that book
   quotes real Maitzen lines (with citation in the postscript).

Together: Maitzen-as-Maitzen is saturated through the game without
being made a fictional character. The tribute is more direct *because*
he remains himself.

If Rohan Maitzen ultimately declines the formal dedication, the
project survives — the references in layers 1–3 stay (factual
citation), and the dedication line becomes *"in memory of those who
showed us what these games meant,"* without naming him. We aim for
her explicit yes before final release.

## Core pitch

A 2D abstract puzzle game. The player inherits a mathematician's library
(predecessor: father / mentor / teacher — relationship deliberately blurred)
and works through the puzzles they left behind. Each "book" in the library is
one puzzle, with the predecessor's handwritten marginalia attached. Slowly,
across ~22 puzzles in 3 acts, the player comes to understand what their
predecessor was trying to prove — and finishes it for them.

The central mathematical theme is **invariance + combinatorial game theory**,
because game values *are* invariants and the two together give us a 3-act arc
that ends on a real awe moment (Sprague–Grundy: every game is secretly the
same game).

The aesthetic target is **awe / wonder**, in the lineage of *The Witness*,
*Manifold Garden*, *Outer Wilds*. Visual register is minimal/surreal: each
book in the library has its own native visual language, but a unifying typographic
and palette discipline holds the whole thing together.

## Locked decisions

### Paradigm
- **2D abstract direct manipulation.** Mouse/click/drag. No character body,
  no first-person navigation, no tile grid with a walking avatar.
- Vanilla JS + HTML + Canvas/SVG. **No game engine.** Vite for dev.
- Indie release ambition: itch.io web build for free; Tauri wrap for Steam
  later. Both achievable from this stack.

### Theme and arc
- Unifying mathematical idea: **invariance + CGT** (game values *are*
  invariants; the pairing is more elegant than either alone).
- Three acts, mapped to a difficulty pyramid:
  - **Act 1 — Invariance in static systems.** Parity, coloring, modular,
    conservation. ~8 puzzles. Tutorial through medium.
  - **Act 2 — Games as systems with invariants.** Opponent appears; player
    learns that *positions have hidden values*. Nim variants, Hackenbush,
    Domineering, Toads-and-Frogs. ~8 puzzles. Medium through hard.
  - **Act 3 — The unification.** *Not* a math reveal — by Act 3 the player
    has been computing game values for hours. The reveal is *structural*:
    every puzzle in the library, including the Act 1 invariance puzzles,
    turns out to be a position in *one game*. The library is a single
    disjunctive sum. The predecessor was the first mover. You are the
    second mover. **You finish their work by making the canonical winning
    move.** ~6 puzzles. Hard through capstone. See `ACT3-CLIMAX.md` for
    full sketch.

### Difficulty pyramid
- Tutorial (4–5 puzzles): solvable in 1–3 min each. Teach verbs.
- Easy (5–6): apply one mental move creatively. 5–10 min each.
- Medium (6–7): combine two ideas. 15–30 min each.
- Hard (4–5): require a key insight. 30–90 min each.
- Capstone (2–3): "olympiad" level synthesis. The player who finishes earns it.

### Story / framing
- Meta-frame: **library** (each puzzle is a book). Library allows max visual
  variety per puzzle while maintaining tonal coherence.
- **Predecessor:** known and loved by the player-character. Their voice is
  recognized before the page is turned. Reference touchstone: David Auburn's
  play *Proof* (2000). Exact relation (mentor, father, teacher) left loose;
  sharpens via artifact text.
- **Partner** (locked 2026-05-21): The predecessor had a lifelong working
  partner. The two-player game-puzzles in Act 2/3 are *records* of games
  played between predecessor and partner — never live opponents the player
  faces. The partner has their own handwriting, their own voice, their own
  marginalia. The partner-records approach was chosen over (A) drop-CGT-go-
  pure-invariance and (B) solitaire-CGT because it (1) keeps CGT as a
  built-in fluency by end of Act 2 (see Act 3 below), (2) keeps the
  contemplative single-player tone of the library, (3) adds emotional
  texture via a second character, and (4) removes opponent-AI
  implementation burden — every "opponent move" is pre-authored.
- **Partner identity** (locked 2026-05-21): **The Peer.** A colleague of
  equal stature; decades of correspondence. The partnership is conducted
  primarily on paper. Hardy/Littlewood reference: real intellectual
  partnership across distance, mostly through letters and exchanged
  puzzles. Voice register: precise, restrained, occasionally arch, never
  saccharine. Working initials: **P.W.**
- The mystery is **what they were trying to prove together**. The capstone is
  the player *finishing* their joint work.
- **Four narrative layers**, designable independently:
  1. **The puzzles** — pure math, no story content.
  2. **The predecessor's artifacts** — margin notes, dedications, loose
     papers in *the player's familiar hand*.
  3. **The partner's artifacts** — correspondence between them, the partner's
     marginalia on shared work, in *a different hand and voice*.
  4. **The library itself** — meta-frame; reorganizes as understanding deepens.

### Reference touchstones for the partnership
- Hardy and Ramanujan — the asymmetric mentor-prodigy partnership
- Erdős and his many co-authors — the wandering collaborator
- Curie and Curie — the spousal partnership in scientific discovery
- The two characters in *Proof* (Auburn) — daughter and father, math and
  inheritance
- Tunic's manual pages — fragmented messages from past readers
- Pyre's Book of Rites — a text addressed to *you* across time

### Methodology
- **Puzzles are sourced from math archives, not invented.** LLMs (and humans)
  are not reliably good at inventing puzzles with the elegance of USAMTS /
  Putnam / olympiad problems. The creative work is *translation*, not
  invention. Primary sources: USAMTS, Putnam, USAMO/IMO, Conway/Berlekamp/Guy.
- **Each puzzle has its own visual surface.** No two books look alike.
  Different inks, papers, props, fonts. The library variety is structural.
- **The math is hidden.** Math-knowledgeable players see the underlying idea
  in retrospect — they don't recognize "this is Nim" at first glance. The
  surface is novel.

### Scope and pacing
- Target: ~22 puzzles, ~2hr playtime.
- Effort band: 300–500 hours total work over a year-ish at hobby pace.
- v1 ships before v2 expansion is considered.
- Playtesting with real humans is non-negotiable for indie release.

## Title

**Working title (locked 2026-05-21): "Left to the Reader."**

The phrase "left as an exercise to the reader" is one of the most loaded
idioms in mathematical writing — the moment in a textbook where the
author punts the work onto the student. Using it as a title puts that
whole cultural texture in front of the player before they've clicked
anything. The title works on multiple layers:

1. **Literal** — the predecessor's library was literally left to the
   protagonist, the reader of the books.
2. **Mathematical** — H.M.'s unfinished proof is, in the academic sense,
   "left to the reader." The player IS the reader. Completing the Act 3
   capstone is the exercise.
3. **Emotional** — "left" carries the weight of bequeathing, of someone
   gone. Pairs with grief without belaboring it.
4. **Structural** — the entire game is an extended exercise left to the
   reader. Every puzzle is something H.M. couldn't or wouldn't write
   out; the player finishes it.

The title is inside-baseball for the math community in a deliberate way —
math-coded players will immediately recognize it; non-math players will
register it as a quiet literary title. We are not optimizing for mass
discoverability; we are optimizing for the niche audience that will get
the joke.

Previous working title: "The Library." Filenames and the project
directory `/home/david/code/the-library/` were established before this
title was chosen — they do not need to be renamed. The project directory
name is purely internal infrastructure.

## Open decisions (deliberately deferred)
- Exact identity of the predecessor (mentor vs. father vs. teacher)
- Whether P.W. is still alive at game start, or both gone, or only one gone
  (likely: P.W. alive, mourning H.M., possibly the *source* of the library
  reaching the protagonist)
- Whether there's a "chain of readers" before us or we're the first inheritor
- The in-fiction term for XOR / disjunctive sum (currently "the stacking"
  for P.W., "the bare sum" for H.M. — see `ACT2-PUZZLES-DRAFT.md`)
- Visual identity specifics (palette, type, motion) — locked when
  `frontend-design` is invoked on the first puzzle prototype
- The first 5 puzzles' specific source problems (curation in progress)

## What to read next

- `research/USAMTS-survey.md` — running log of source-problem analysis
- `puzzles/` — individual specs as they're locked
- `.claude/skills/puzzle-design.md` — methodology for translating a problem
  into a spec
- `.claude/skills/puzzle-curate.md` — methodology for sourcing and analyzing
  problems
