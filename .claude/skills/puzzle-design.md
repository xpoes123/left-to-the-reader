---
name: puzzle-design
description: How to translate a sourced competition-math problem into a fully-spec'd interactive puzzle for The Library. Use after [[puzzle-curate]] has identified a gold-star candidate, when writing a new puzzle spec to puzzles/, or when reviewing an existing spec for completeness.
---

# puzzle-design — methodology for translating problems into puzzle specs

## Why this exists

Curation (see [[puzzle-curate]]) gets us a problem with the right mathematical
structure. Translation is what turns it into a *playable puzzle in The
Library's frame* — with the math hidden under a novel visual surface, an
artifact that carries the story layer, and a clean win-condition the player
can encounter without notation.

This skill describes the puzzle-spec format every puzzle uses, the
translation principles that govern how we go from problem to spec, and the
review checklist before a puzzle is locked.

## The puzzle-spec format

Every puzzle lives in `puzzles/pNNN-slug.md` with the following structure.
Use exactly these section names — they're load-bearing for cross-puzzle
searches.

```markdown
# Puzzle NNN — "Title"

- **Source:** original problem (with citation), or "original construction"
- **Underlying idea:** the invariant / monovariant / game-value structure
  (hidden from the player; tracked here for our design integrity)
- **Visual surface:** what's on screen; the "book's" native visual register
- **Verbs:** what the player can do; one bullet per verb
- **Starting state:** explicit
- **Goal state:** explicit; for impossibility puzzles, multiple targets some
  reachable and some not
- **The aha:** the insight that cracks it, in plain English
- **Predecessor artifact:** margin note / dedication / loose paper text; one
  short paragraph in their voice
- **Partner artifact** (Act 2+): the partner's hand on the same page or in
  correspondence; voice contrasts with predecessor
- **Difficulty tier:** Tutorial / Easy / Medium / Hard / Capstone
- **Act:** 1 / 2 / 3
- **Notes:** implementation, gotchas, variations, intended sequel puzzles
```

## Translation principles

### 1. Hide the math under a novel surface

The surface should not read as the source problem to a math-knowledgeable
player. If the original is about coins or grids, the translation should
*usually* be about something else: pebbles, ink, stones, lanterns, flowers,
threads, stars, gears. Reframing is the single most important translation
move. See `research/USAMTS-survey.md` for examples (e.g., the rational-pair
problem becoming "The Hinge" with paired oscillating bars).

### 2. One aha per puzzle

A puzzle should have exactly one key insight. If there are two, split into
two puzzles or pair them as consecutive puzzles in the difficulty pyramid.
Multi-insight puzzles tend to feel like "and another thing" rather than
landing the satisfying *click*.

### 3. The verbs should reveal the structure when used

The player should be able to discover the invariant *by playing*, not by
reading a hint. The verb set should make the conserved quantity tactile —
e.g., if parity is conserved, every verb should visibly change two things at
once. The mathematics is taught by the hand.

### 4. Failure should be meaningful

If a target is unreachable, the player should be *able to see why* once they
understand the invariant — not just notice it doesn't work. The "stamp this
as impossible" mechanic (introduced in Act 1 mid-act) requires the player to
identify *which* invariant blocks it; correctness depends on the right
identification, not on guessing.

### 5. Difficulty tier dictates the help level
- **Tutorial:** the invariant lands almost by itself; the verb makes the
  conservation tactile within 1-2 moves.
- **Easy:** one mental move away from feeling the invariant.
- **Medium:** the invariant is real but the verb set doesn't immediately
  expose it. Player has to look.
- **Hard:** the invariant is genuinely non-obvious; finding it is the puzzle.
- **Capstone:** synthesis — multiple invariants compose, or the meta-shape
  of the puzzle is the lesson.

## The predecessor artifact

The predecessor's marginalia is *every puzzle's* story element. It should:

- Be in *their* voice (slightly weary, philosophical, self-critical,
  occasionally wry, occasionally tender). Voice continuity across puzzles is
  important; one specific person should be writing all of them.
- Comment on the underlying idea *obliquely*, not directly. Never name the
  invariant. Never write "parity is preserved." Instead: "Some changes are
  reversible. Some are only nearly so."
- Sometimes reveal their own struggle with the puzzle. "I lost a year
  arguing with this." This is one of the strongest emotional notes available.
- Occasionally address the player as "you" but only obliquely — they didn't
  know who would read these. Letters home, not lectures.

## The partner artifact (Act 2+)

The partner enters in Act 2 via *correspondence* — letters tucked into the
book, marginalia in a *different hand* on shared pages, notes addressed to
the predecessor by name. The partner's voice should:

- Be distinctly different from the predecessor (cadence, vocabulary, mood)
- Reference the game-records explicitly — *they played this game with the
  predecessor*; the puzzle is a record of their match
- Make the partnership feel real — affection, frustration, disagreement,
  long history. Not always agreeing. Sometimes correcting each other.

See [[partner-records]] (TODO) for the partner-character design once locked.

## Review checklist before locking a puzzle

- [ ] Source problem cited with link / page reference
- [ ] Underlying idea named (in our private design notes, not in-game)
- [ ] Visual surface described with enough specificity that frontend-design
      can prototype it
- [ ] Verbs are tactile and unambiguous
- [ ] Aha is a single sentence in plain English
- [ ] Predecessor artifact is in their established voice
- [ ] Partner artifact present if Act 2+
- [ ] Difficulty tier honestly assessed (resist tier inflation)
- [ ] No two consecutive puzzles share the same invariant flavor
- [ ] Math-knowledgeable playtester wouldn't recognize the source problem at
      a glance

## Anti-patterns

- **Verbatim translation.** Don't just render the source problem with prettier
  graphics. The surface should be *different*; what's preserved is the
  underlying mental move.
- **Tutorial walls of text.** The predecessor's voice can hint; it shouldn't
  explain. The puzzle teaches via the verbs.
- **Inflating difficulty tier.** Be honest. If a puzzle solves in 3 minutes
  for a smart player, it's Easy, not Medium. Difficulty pyramid only works
  if tiers are calibrated.
- **Story-puzzle conflict.** If the artifact's emotional beat fights the
  puzzle's mathematical beat, the puzzle wins. Story serves the math.
