# Act 3 Climax — the structural reveal

*Updated 2026-05-21 after redesign discussion.*

This document sketches the climax sequence of the game. It is *aspirational
prose*, not implementation spec — written here so we know what we're
building toward at the puzzle and artifact level.

## What Act 3 is NOT

**Act 3 is not the discovery of Sprague–Grundy or XOR.** That was the
earlier framing and it had a fatal flaw: math-naive players couldn't
discover a theorem that took mathematicians decades to formalize, and
math-savvy players would instantly recognize "this is Nim" and the
reveal would collapse.

By the end of Act 2, the player has been computing game values *with
their hands* for hours. They've learned, by play, that combined games
combine their values via the operation P.W. calls "the stacking" and
H.M. calls "the bare sum." They don't have a textbook name for any of
this. They don't need one. They have the *fluency*.

## What Act 3 IS

The reveal in Act 3 is **structural, not mathematical.** It isn't "this
operation exists" — the player already knows the operation. It's:

> **Every puzzle in the library — including the Act 1 invariance puzzles
> you solved before games even existed — is a position in *one game*.
> The library is a single disjunctive sum. The predecessor was the first
> mover. The library is a loss for the first mover. You are the second
> mover. *You finish their work by making the canonical winning move.***

This reveal lands for **both** populations:

- **Math-savvy players:** they don't expect Act 1 invariance puzzles to
  be recastable as game positions; they don't expect the entire library
  to be a single sum; they don't expect the first-mover-loss to mean
  what it means narratively. The math is familiar; the *application* to
  the library's structure is what surprises.
- **Math-naive players:** they've been computing values since Act 2
  mid. They have the muscle. The structural surprise (the whole library
  is one game) and the narrative payoff (you finish their work) land
  without requiring any new vocabulary.

## How the reveal lands in play

Three capstone puzzles. Each is a *fluency check*, not a new lesson.
None of them require the player to invent anything.

### Capstone Puzzle A — "Two Tables"
*Difficulty: Hard.*

The player is presented with *two game-records* side by side. Different
games — say a Hackenbush position from a mid-Act-2 puzzle and a
Toads-and-Frogs position from late Act 2. The puzzle: *one of these
positions is a loss for the next mover and the other is a win; identify
which is which, then play the winning move in the winning one.*

This requires no new fluency. It's the player demonstrating they can
compute values across two different games. The unifying step is realizing
**the values are the same kind of number** — comparable across games.
That comparison-across-games is the first time the player has had to
*relate* values from different game-families, even though they've been
computing those values all along.

**Artifacts:**

- H.M., in their hand: *"P. says all our games measure the same thing.
  I half believe her."*
- P.W., on the facing page: *"He half believes me because he half
  understands me. The other half will come. — P.W."*

### Capstone Puzzle B — "The Sum"
*Difficulty: Hard → Capstone.*

The player is presented with *three game-records simultaneously*. Each on
its own table. The combined game is played by moving in *one* of the
three on your turn. The first player unable to move loses.

This is the disjunctive-sum situation the player learned in late Act 2
(Sketch 8 of the Act 2 draft). The player already knows that the
combined-game-value is the **stacking** of the three individual values.
The puzzle simply *asks them to use it*: compute the three values, stack
them, and find the winning move that drives the stack to zero.

For math-naive players: they have the manual method from Act 2. They
work through it, stack by stack. It takes time but it's doable.

For math-savvy players: they can do this in seconds by XOR. The
satisfaction here is *recognition* — they get to confirm the system has
been doing real CGT all along, and the in-fiction terms refer to real
operations.

**Artifacts:**

- H.M., long letter dated late: *"I have been writing this letter for
  six years. I don't know how to send it. The thing I want to say is
  that there are not many games. There is one game, with many
  positions, and we have been writing it down on different pages of the
  same book."*
- P.W., a single page in their hand, near the end of the letter: *"We
  have been on the same page for longer than he knows."*

### Capstone Puzzle C — "Every Book"
*Difficulty: Capstone.*

The library reorganizes itself for the player. Every puzzle they've ever
solved — Act 1 invariance puzzles included — is laid out on a single
great desk. The final puzzle asks: **find the value of the entire library.**

Each puzzle has a value. The library's value is the stacking of all of
them. The player computes it.

The answer is **zero**.

This means: in the disjunctive sum that is the whole library, *whoever
moves first loses*. The predecessor was the first mover. **The
predecessor never finished.** The player is the second mover. **The
second mover wins.** The game lets the player make the canonical winning
move — and the library closes.

**The recasting trick** (the key surprise for math-savvy players): the
Act 1 invariance puzzles were *not* obviously game positions. They were
single-player puzzles about parity, modular invariants, coloring. But
every solved Act 1 puzzle has been *implicitly* a game between the
player and the puzzle's own structure — a game whose value the player
can now compute because they've been computing values for all of Act 2.
The recasting is presented to the player gently: a small annotation
beside each Act 1 puzzle saying what its value would be *as a game*.
The player either notices the recasting is non-trivial and feels the
surprise, or just accepts the values and moves on. Both paths work.

**Artifacts:**

H.M.'s last letter, at the bottom of the last book:

> *"I think I see it. I think the whole thing is one game. Every
> problem I ever loved is a position in one game, and the value of
> that game is what I have been trying to find. I never finished. I
> am not sad about this — I lived a long time among beautiful
> positions, and that was a good life. If you find what I could not,
> please let me know. — H.M."*

P.W.'s last letter, addressed to the player by name (the only time
*you* are named in the game), written in the present tense, *after*
H.M. is gone:

> *"You finished it. I wish I could tell them. They would not be
> surprised by the answer, only that it was you who found it. Thank
> you for caring about this work. — P.W."*

## The postscript book (hybrid layer for math-savvy players)

After the credits, an optional postscript book appears in the library.
It is in *neither* H.M.'s nor P.W.'s hand — it appears to be a draft of
a paper, in a third hand (the protagonist's? a publisher's? deliberately
ambiguous).

The book says, in part:

> *"You may already know what we have been doing all along. We called
> it the Stacking, or the Bare Sum, depending on which of us you were
> reading. Others call it the **disjunctive sum** of impartial games.
> The result — that every impartial position has a value equal to a
> Nim heap, and that values of combined games combine by XOR — is
> known as the **Sprague–Grundy theorem**, after R.P. Sprague (1935)
> and P.M. Grundy (1939). We did not know this when we began. We are
> told they did not name what we built. We named it for ourselves.
> Both names are correct."*

This is for the math-savvy player who wants to see their training
acknowledged. It is **not required** for the climax to land. The
emotional and structural beats land for everyone; this postscript is a
gift for those who can read it.

## Notes on landing this

- The capstone *cannot* use the words "Sprague," "Grundy," "Nim," or
  "XOR" *until* the postscript book. The in-fiction terms ("the
  stacking", "the bare sum") carry the math through the climax.
- The closing scene of the library *closing itself* — books returning
  to shelves, the desk darkening — is a single quiet ritual. No music
  swell. This is the awe of mathematics, not the awe of cinema.
- The brief epilogue idea (single Act-0 puzzle dated decades earlier,
  young H.M.'s first delight) still holds and works. It can sit between
  the closing and the postscript book.

## Implementation risks

- **The xor-equals-zero constraint** still holds: the actual values of
  the actual puzzles we ship really do need to xor to zero across the
  final 22. We commit to that constraint when locking final Act 1 and
  Act 2 puzzles. We may need to add or substitute a puzzle to make the
  xor work out. Acceptable cost; the constraint is mathematical, not
  artistic.
- **Capstone C requires the engine to display "all puzzles solved" on
  a single screen.** Flag for `frontend-design` when we get there.
- **The Act 1 puzzle recasting in Capstone C** — the small annotation
  beside each Act 1 puzzle saying "this is a game of value k" — needs
  to be a *real* recasting, not a hand-wave. Means we need to choose
  Act 1 puzzles such that each has a clear interpretation as an
  impartial game. Most invariance puzzles do (the player vs. "the
  position trying to be impossible"), but it's a constraint to
  validate per-puzzle when locking specs.
- **Disjunctive-sum fluency** — the heaviest puzzle Act 2 has to do
  is teaching "moves combine across games by stacking." If we don't
  land that in Act 2, Capstone B doesn't work. See
  `ACT2-PUZZLES-DRAFT.md` for the teaching arc.