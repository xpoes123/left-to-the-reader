# Left to the Reader

*(Working title locked 2026-05-21 — the math joke that names the game.
Previously: "The Library." See `design/CONCEPT.md` for the rationale.)*

A 2D abstract puzzle game in which the player inherits a mathematician's library
and works through the puzzles, marginalia, and unfinished proofs they left
behind. The mathematics is real (sourced from USAMTS / Putnam / olympiad
archives and combinatorial game theory) but stays hidden under novel visual
surfaces; math knowledge is not required to play, but is rewarded.

## What this directory is

This is the design + research workspace for the game. **It does not contain
implementation code yet.** Implementation begins after enough puzzles are
specced that we know what the engine actually has to support.

```
the-library/
├── README.md            ← you are here
├── design/              ← what the game IS (concept, story, tone, mechanics)
├── research/            ← problem-source surveys and analyses
├── puzzles/             ← individual puzzle specs (one md per puzzle)
└── .claude/skills/      ← skills that codify our working methodology
```

## Where the design conversation lives

Design discussion happens in chat. Decisions get written down here so they
survive. The most load-bearing doc is `design/CONCEPT.md` — that's the
checkpoint of what's been locked in.

## How to use this workspace

- Adding a new puzzle: write `puzzles/pNNN-slug.md` following the format in
  `.claude/skills/puzzle-design.md`.
- Surveying a new problem source: append to `research/<source>.md` following
  the format in `.claude/skills/puzzle-curate.md`.
- Locking a design decision: edit `design/CONCEPT.md` and note the decision
  inline so future sessions can pick up cleanly.
