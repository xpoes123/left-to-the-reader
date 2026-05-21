# Puzzle 001 — "The Tide"

- **Source:** Classic adjacent-flip parity puzzle, in the family of USAMTS /
  olympiad coin-flipping problems. Reframed visually to remove any reading as
  "the coin problem."
- **Underlying idea:** Parity invariance. The count of "wet" pebbles only
  ever changes by 0 or ±2 per move, so its parity is conserved across all
  moves.
- **Visual surface:** A row of seven pebbles on a shore. Each pebble is
  either dry (light, sand-toned) or wet (dark, shimmering). A faint tideline
  runs across the middle of the row. Minimal soundscape: a low surf, a wet
  *plip* when the tide flips.
- **Verbs:**
  - Click any two adjacent pebbles → both flip their state simultaneously
    (dry↔wet)
- **Starting state:** D – W – D – W – D – D – W *(5 dry, 2 wet — parity
  even, so all-dry is reachable)*
- **Goal state:** all seven pebbles dry.
- **The aha:** the player feels the rhythm of "I can only change wets in
  pairs" — not as a stated rule, just as something their hand learns. The
  invariant is *experienced* before it's articulated.
- **Predecessor artifact** (margin note in the corner of the book, in the
  predecessor's hand):
  > *"Some changes are reversible. Some are only nearly so. Look at what
  > cannot vary, and the rest will tell itself. — H.M."*
- **Partner artifact:** none (Act 1, partner not yet introduced).
- **Difficulty tier:** Tutorial. Solvable in 1-3 min.
- **Act:** 1
- **Notes:**
  - This is the first puzzle in the game. It carries the heaviest tutorial
    burden: teaches the click-pair verb, introduces "look for what doesn't
    change" as the player's mental move, sets the H.M. voice, sets the
    library page format.
  - A later Act 1 puzzle revisits The Tide with an *unsolvable*
    configuration. Player has muscle memory by then; the margin note on
    that one reads: *"This one I never finished. — H.M."* Second-order aha:
    the predecessor wrote that note because *they* recognized impossibility.
    Joining them in that recognition is the first emotional beat in the
    game.
  - "H.M." is a placeholder for the predecessor's initials. Their handwriting
    becomes a recurring presence — design as a specific font / hand when
    `frontend-design` is invoked.
  - Implementation: trivial. 7 toggleable elements, click handler that flips
    two adjacent on each click, win-check.
