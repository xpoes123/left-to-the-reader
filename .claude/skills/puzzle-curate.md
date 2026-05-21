---
name: puzzle-curate
description: How to source and evaluate competition-math problems as raw material for The Library's puzzle layer. Use when surveying USAMTS/Putnam/USAMO/IMO/Conway-Berlekamp archives, evaluating a specific problem for theme fit and translatability, or appending findings to research/<source>.md.
---

# puzzle-curate — methodology for sourcing problems

## Why this exists

The Library's puzzles are *translated from real competition math problems*,
not invented from scratch. LLMs and humans both struggle to invent puzzles
with the elegance and non-obviousness of canonical olympiad problems.
What we *can* do well is curate: read source problems, identify the
underlying structure (invariance, parity, modular, coloring, game-value,
pigeonhole), and select the ones that translate cleanly into interactive
2D form. The creative work is the *translation* (covered in
[[puzzle-design]]), not the invention.

## What we're looking for

### Theme — must hit at least one
- **Invariance** — a quantity preserved by all allowed moves (parity, mod-k,
  coloring sums, conservation under transformation)
- **Monovariant** — a quantity that only ever increases or decreases (used
  for impossibility / termination arguments)
- **Pigeonhole / counting** — must-exist-by-counting arguments
- **Combinatorial game theory** — Nim-like, two-player optimal-play positions;
  these become partner-record puzzles (see [[partner-records]])
- **Coloring / parity** — checkerboard, mod-k coloring, parity of position

### Format — must be visually translatable
- Yes if the surface is: a grid, a graph, a row of objects, a collection of
  pieces, a small geometric configuration, a sequence of operations on a
  finite state.
- No if it requires: real analysis, abstract algebra, calculus, infinite
  constructions, or pure number theory without finite visual structure.
- Maybe if it's a number-theory problem whose *underlying combinatorial
  structure* could be exposed visually (e.g., divisor lattices, residue
  graphs).

### Difficulty
- Tutorial-tier source: USAMTS Round 1 problems 1–2 (the "puzzle" problems)
- Easy/Medium: USAMTS Rounds 1–2 problems 2–4
- Hard: USAMTS Round 3, easier USAMO, easier Putnam
- Capstone: USAMO, IMO, harder Putnam, or specifically chosen CGT
  positions from Berlekamp/Conway/Guy

## Process for a single round

1. **Pull problems + solutions** for one round.
2. **Read each problem and its solution.** The *solution* tells you the
   underlying idea — don't skip it.
3. **Per-problem verdict** in a table row:
   ```
   | # | Title (short) | Theme fit | Translatable | Verdict |
   ```
   Verdicts:
   - **★ Gold-star** — use this, write a translation sketch now
   - **Maybe** — strong but has a caveat (too advanced, weak visual, etc.);
     revisit when needed
   - **Skip** — wrong theme or untranslatable
4. **Translation sketch for gold-stars** — see [[puzzle-design]] for the
   target format. Even a paragraph is fine at the survey stage; we don't
   need the full puzzle-spec until we're locking the puzzle in.
5. **Append to `research/<source>.md`** following the file's existing format.
   Date the round entry.

## Hit-rate target

Expect ~1 gold-star per 5-problem USAMTS round. We need ~22 final puzzles,
so target ~30 gold-stars before final selection (allows for cuts during
playtesting). That means ~30 rounds surveyed, which is doable across
USAMTS, Putnam, and selected IMO problems.

## Sources

### Primary (in priority order)
- **USAMTS** — usamts.org. 37 years × 3 rounds = ~111 rounds. Round 1
  problems 1-2 are the "puzzle" tier; Round 3 problems 4-5 are olympiad-tier.
  Best ratio of "translatable to interactive" content of any source.
- **Putnam** — Kedlaya's archive at kskedlaya.org/putnam-archive/. Collegiate;
  often has cleaner CGT and combinatorial-game problems than USAMTS.
- **USAMO / IMO** — imo-official.org and AOPS. Harder. Pick specifically;
  these tend to be more famous so be careful about the "novel surface"
  requirement.
- **Berlekamp / Conway / Guy** — *Winning Ways for Your Mathematical Plays*
  (4 volumes). The bible for CGT. Source for Act 2/3 partner-record game
  positions specifically.
- **Conway** — *On Numbers and Games*. Surreal numbers, deeper CGT theory.

### Secondary
- AOPS forum threads — discussion of specific problems, helpful for finding
  the *cleanest* idea behind a problem
- Engel's *Problem-Solving Strategies* — organized by technique; the
  invariance and coloring chapters are gold
- Larson's *Problem-Solving Through Problems* — older but comprehensive
- HMMT and Putnam archives — for breadth

## Anti-patterns to avoid

- **Don't pick canonical problems.** If a math person would immediately
  recognize "this is Nim" or "this is mutilated chessboard," skip it. We
  want the surface to be novel. (See `design/CONCEPT.md` methodology section.)
- **Don't over-rely on one technique.** If we already have 3 mod-3
  invariant puzzles in the candidate pool, mark new mod-3 finds as Maybe.
  Pyramidal difficulty requires variety in technique flavor.
- **Don't translate before locking the theme fit.** A clever translation of
  a wrong-theme problem still drifts us off-target.
- **Don't write the puzzle-spec until the round-survey verdict is in writing.**
  The dossier prevents drift across sessions.
