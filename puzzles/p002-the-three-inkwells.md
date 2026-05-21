# Puzzle 002 — "The Three Inkwells"

- **Source:** Family of classic combinatorial-pouring problems in the
  USAMTS / olympiad tradition. Translated to remove all explicit arithmetic.
- **Underlying idea:** Modular invariance. The pairwise differences between
  the three inkwells, taken modulo 3, never change. The player slowly feels
  that "not every combination is reachable — there's a fingerprint."
- **Visual surface:** Three small glass inkwells arranged on a wooden desk,
  each filled to a different level with dark blue ink. Each well has small
  etched gradations on its side; the ink level rises and falls in discrete
  increments. The desk is the right corner of a much larger illuminated
  page — the puzzle is sitting in the margin of something bigger.
- **Verbs:**
  - Click any inkwell → it loses 2 units of ink; *both other wells gain 1
    unit each.* (Smooth pouring animation; faint dripping sound; visible
    siphon.)
- **Starting state:** (5, 3, 1)
- **Goal state:** (4, 2, 3)
- **The aha:** The player tries a few moves and notices the total never
  changes (sum invariant), but also realizes that some natural-seeming
  targets — like (3, 3, 3) — are mysteriously unreachable. They don't need
  to articulate "the differences are preserved mod 3" — they just learn to
  *feel* which final shapes look right.
- **Predecessor artifact** (slip of paper folded into the book):
  > *"Ink is patient. The well doesn't care which well you call it — only
  > which one is asked to give. The pattern of giving is what stays. — H.M."*
- **Partner artifact:** none (Act 1).
- **Difficulty tier:** Tutorial. Solvable in ~5 min with experimentation.
- **Act:** 1
- **Notes:**
  - In the difficulty pyramid, this puzzle's "harder cousin" later in Act 1
    will be: same three inkwells, but the player must identify which of
    four candidate targets are reachable and stamp the unreachable ones.
    That's the puzzle where the mod-3 invariant becomes explicit. For now,
    in tutorial, we give them one solvable target and let the feel develop.
  - H.M.'s marginalia tone here: gentle, philosophical, slightly weary.
    They wrote this note for themselves, not for us.
