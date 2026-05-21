# Act 2 — Partner-Record Puzzles + Teaching Arc

*Updated 2026-05-21 after Act 3 redesign.*

## What Act 2 is actually doing

Act 2 carries far more weight than the earlier draft suggested. **Its job
is to teach the player to compute game values — by hand — through play,
without ever using the words "Sprague-Grundy" or "XOR".** By the end of
Act 2, the player can take a moderately complex position and compute its
value. They can take two positions and combine them. They have a method.

This redesign comes from the Act 3 critique: if Act 3 tries to *introduce*
Sprague–Grundy, math-naive players hit a wall and math-savvy players are
spoiled. So Act 3 *applies* what Act 2 *teaches*. Act 2 has to teach it
well enough that Act 3 is fluency, not discovery.

## The skill arc — what the player learns when

Each Act 2 puzzle adds one skill to a growing toolkit. The skills compound;
no skill is dropped after introduction.

| # | Skill introduced | Carried forward as |
|---|---|---|
| 1 | Positions can be *won* or *lost* for the next mover. P-positions and N-positions, in feel. | "Some configurations are dead. Some are alive." |
| 2 | Equality between two heaps is the simplest dead configuration. | Symmetry-as-loss. |
| 3 | Positions have *numbers* attached. Some positions you "feel" are loss; the loss has a name (zero, or the bare sum). | Position-value. |
| 4 | These numbers can be computed by exhaustion on small examples. | Calculation by hand. |
| 5 | Different game families produce the same kind of value. | Value-transfer. |
| 6 | Some values are not integers — *half-moves* exist. | Fractional values (gestures at surreals; no formalism). |
| 7 | Modular patterns in values exist. The 2009-stones bridge. | The Act 1 invariants control Act 2 values. |
| 8 | When two games are combined, values combine via **the stacking / the bare sum.** | Disjunctive-sum fluency — the Capstone B prerequisite. |

## The in-fiction terminology

The mathematicians invented their own names. Both appear in marginalia
throughout Act 2. The player gradually realizes both refer to the same
operation.

- **P.W. calls XOR "the stacking."** Because the operation works place by
  place, like stacking values vertically and combining each row.
- **H.M. calls XOR "the bare sum."** Emphasizing it is a sum *without
  carries*.

At no point in Act 2 is the term "XOR" or "Sprague–Grundy" used. The
in-fiction names carry through to the climax of Act 3. Only the optional
postscript book reveals the standard names.

---

## The 8 puzzle sketches, sequenced as a teaching arc

### Sketch 1 — "First Light" *(Easy; introduces P/N positions)*

- **Source:** Trivial one-heap game with restricted moves.
- **Underlying idea:** P-position vs. N-position. The most basic CGT
  distinction. Verb: take 1 or 2 markers per turn; last marker wins.
- **Visual surface:** Seven small candle-flames on a long iron
  candleholder. Each move snuffs out 1 or 2 candles. Two named hands
  record snuffs.
- **What the player does:** plays the recorded game forward. They have to
  pick H.M.'s recorded move (right or wrong). Then evaluate whether H.M.
  was *correct* or *wrong*. The puzzle has the player *mark which
  positions in the record were P-positions (losing for the mover) and
  which were N-positions (winning)*.
- **Skill landed:** "some positions are dead." The player can identify a
  dead position when they see one, even without a name for it yet.
- **Predecessor artifact:** *"P. is teaching me a game tonight. I am
  losing on purpose to learn it. — H.M."*
- **Partner artifact:** *"He is losing on purpose. He thinks I don't
  notice. — P.W."*

### Sketch 2 — "Two Heaps" *(Easy; symmetry as loss)*

- **Source:** Classic two-heap Nim.
- **Underlying idea:** P-positions are *exactly* configurations where
  both heaps are equal. Whoever moves equality at their opponent loses
  by being mirrored.
- **Visual surface:** Two stone cairns on opposite sides of a table.
  Each move removes any positive number of stones from *one* cairn.
- **Skill landed:** the player learns *symmetry can be weaponized*.
  Whoever can leave equal cairns wins.
- **Predecessor artifact:** *"Equality is the trap. The one who gives
  equality, takes the game. — H.M."*
- **Partner artifact:** *"The trap closes only if you do not have a
  mirror. Most of the time you have a mirror. — P.W."*

### Sketch 3 — "The Mirrored Hand" *(Easy-Medium; values exist)*

- **Source:** Three-heap Nim (still the canonical example, but presented
  as a "stranger version of two-heaps").
- **Underlying idea:** Three heaps. P-positions are those where the
  *bare sum* (= XOR) of heap sizes is zero. Player encounters by
  experimentation, never by formula.
- **Visual surface:** Three cairns of different heights.
- **Skill landed:** *positions have numbers*. The player can't always
  *see* the value but they can *feel* it. P.W.'s marginalia introduces
  "the stacking" as P.W.'s name for the operation she uses to verify
  values. H.M. uses a different name in his own marginalia.
- **Predecessor artifact:** *"P. claims there is a hidden number for
  each position. She has begun to call her method 'the stacking.' Tonight
  she said it without naming it; I named it for myself: the bare sum,
  the sum that does not carry. We disagree about which name is better.
  This is the only thing we have disagreed about all month. — H.M."*
- **Partner artifact:** *"There IS a hidden number. He just won't ask
  what it is. He thinks if he calls it something different he can claim
  to have invented it. — P.W."*
- **Note:** First time the terms "stacking" and "bare sum" appear in
  the same puzzle. The player can ignore them at this stage; they'll
  recur until they have to be confronted.

### Sketch 4 — "Calculations" *(Medium; computing values by hand)*

- **Source:** Small Nim variants and Wythoff-flavored constructions.
- **Underlying idea:** Computing the value of a position by exhaustively
  analyzing what positions it can move to.
- **Visual surface:** A worksheet on a desk. The player is given a
  position with three heaps; they have a column of "what this position
  can become in one move" written by H.M. Each move-result has a value
  written next to it. The current position's value is the smallest
  non-negative integer *not* appearing in the moves-to column (the
  player discovers this by example — "mex" by feel).
- **Skill landed:** **explicit value computation by hand.** The
  worksheet idiom is reused for the next several puzzles.
- **Predecessor artifact:** *"The trick: if a position can become any
  of {0, 1, 3, 5}, then the position itself has value 2. The position
  has value of the smallest absence. — H.M."*
- **Partner artifact:** *"He has finally written down the rule. I have
  been computing this since November. — P.W."*

### Sketch 5 — "Green Hackenbush" *(Medium; values transfer)*

- **Source:** Berlekamp/Conway/Guy. Green Hackenbush on small trees.
- **Underlying idea:** Hackenbush trees reduce to single Nim-heap values
  via the *Colon Principle*. Each branch's value depends only on the
  branch's structure.
- **Visual surface:** Small branching twigs drawn in ink. Each move cuts
  one edge; anything no longer connected to the ground falls away.
- **Skill landed:** **values are the same kind of number across game
  families.** A Hackenbush tree's value is *comparable to* a Nim heap's
  value. The player learns to translate.
- **Predecessor artifact:** *"We pruned the apple tree this morning.
  Then came inside and pruned this one. P. is in a mood. — H.M."*
- **Partner artifact:** *"He thinks I am in a mood because of the
  pruning. I am in a mood because his last conjecture was wrong by half
  a position. — P.W."*

### Sketch 6 — "The Trail" *(Medium; fractional values)*

- **Source:** Toads-and-Frogs variant (Conway).
- **Underlying idea:** Some values aren't integers. Game values can be
  fractions — half-moves, quarter-moves. Gestures at surreal numbers;
  no formal definition required.
- **Visual surface:** A horizontal row of footprints in soft earth.
  Some point left, some right. Each move steps one print one space
  toward its facing.
- **Skill landed:** value isn't always a whole number. There exist
  values *between* the integers the player has seen so far.
- **Predecessor artifact:** *"P. will not stop calling them fractional.
  They are not fractions, they are... half-moves. I do not know what
  they are. — H.M."*
- **Partner artifact:** *"They are fractions. He is sulking. — P.W."*
- **Note:** A small Conway surreal-number gesture. We do not formalize.
  The math-savvy player will recognize where this goes; the math-naive
  player just experiences "the values are weirder here." Both fine.

### Sketch 7 — "The Bridge" *(Hard; modular fingerprint in CGT)*

- **Source:** USAMTS 2/3/20 (2009 stones, subtract 3/4/7). See
  `research/USAMTS-survey.md` for full analysis.
- **Underlying idea:** L-positions = n mod 11 ∈ {0, 5, 6}. **A modular
  invariant from Act 1 controls a CGT game.** This is the most important
  puzzle in Act 2 because it *bridges* the two acts explicitly.
- **Visual surface:** Single pile of stones; alternating moves take 3, 4,
  or 7 (or take-all when ≤ 2).
- **Skill landed:** the player explicitly sees that the Act 1 mental
  move (find the modular invariant) is the same as the Act 2 mental move
  (compute the position's value). The two acts have been doing one thing.
- **Predecessor artifact:** *"Eleven. I cannot say why eleven. It is the
  number the game wants. — H.M."*
- **Partner artifact:** *"You can say why eleven. You're being lazy. The
  reason is the bare sum modulo eleven; it has been the reason since
  August. — P.W."*

### Sketch 8 — "The Stacking" *(Hard; disjunctive sum and combined-game value)*

- **Source:** Disjunctive sums of impartial games (Berlekamp/Conway/Guy,
  Sprague–Grundy).
- **Underlying idea:** **When two games are placed side by side and the
  player can move in either, the combined game's value is the bare sum
  (= XOR) of the individual values.** This is the load-bearing skill for
  the entire Act 3 climax. If we don't land it here, the climax fails.
- **Visual surface:** Two recorded games on a single library page side by
  side — one a Hackenbush tree, the other a Nim-with-3-heaps. Both have
  been partially played; now it's the player's turn to move in *either*.
- **What the player does:** Compute each individual game's value (skill
  from Sketches 3-7). Then learn — through the puzzle's own scaffolding
  and via P.W.'s explicit marginalia about "the stacking" — that the
  combined value is the stacking of the two values. Find the winning
  move that drives the stacked value to zero.
- **Predecessor artifact:** *"P. has invented something new. We are
  playing two games at once. She moves in either; I move in either.
  The first to be unable to move loses. The combined position has a
  value. Of course it does. The value is the bare sum of the parts.
  Of course it is. I am late to my own conclusions tonight. — H.M."*
- **Partner artifact:** *"He keeps saying I invented this. I did not.
  The games invented this. The games were always going to do this. The
  stacking is in the games; we are only the first to write it down. —
  P.W."*

---

## Bridging Act 1 → Act 2 narratively

The transition from Act 1 (lone H.M. marginalia) to Act 2 (correspondence
with P.W. appears) still needs a specific moment.

The last Act 1 puzzle is a particularly hard invariance puzzle in H.M.'s
hand. When the player solves it, a *folded letter falls out of the book*.
The letter is in a different hand:

> *"H— : I solved your puzzle. The trick was the count of red, mod two.
> I assume you knew this when you sent it to me. I am attaching the
> puzzle I promised. You will not find the trick in an evening. — P.W."*

The "puzzle she promised" is Sketch 1 above — "First Light." The player
now knows H.M. was not alone.

---

## Bridging Act 2 → Act 3 narratively

Late in Act 2, after Sketch 8, the marginalia changes register. H.M.'s
voice becomes more uncertain; P.W.'s remains precise but the letters
between them get shorter and more sparse. The final book of Act 2
contains a single brief letter from P.W. to H.M., undated:

> *"I have been thinking about all of these games for so long that I
> no longer know which book I am writing in. They keep blurring
> together. Tell me that is not happening to you too. — P.W."*

H.M.'s response is on the facing page but it is *incomplete* — there
are crossings-out and a single legible phrase: *"There is only one
game."*

Act 3 begins here. The player walks into Act 3 having *also* started to
feel that all of the puzzles blur together. The climactic recasting is
what crystallizes the feeling.

---

## Things still open

- Whether to merge Sketches 4 and 5 (computing values + values transfer).
  Currently they're separate; could be one slightly longer puzzle.
- Whether to add a Domineering puzzle (partizan game) somewhere in Act 2.
  Currently dropped from the sequence because partizan games introduce
  L/R asymmetry that complicates the "single value" intuition. May be
  worth adding as an *optional* book for math-savvy players.
- Whether one Act 2 puzzle is the *only* incomplete game-record — a
  position where one of the recorded moves was *never made*, because
  H.M. died first. This was floated earlier; still a strong option for
  emotional weight, possibly between Sketches 7 and 8.

---

## Things to look up later (CGT-specific sources)

- Conway, *On Numbers and Games* (1976) — surreal numbers, the
  foundation
- Berlekamp, Conway, Guy, *Winning Ways*, Vol. 1-4 (1982; 2nd ed.
  2001-2004)
- Aaron Siegel, *Combinatorial Game Theory* (2013) — modern textbook
- David Wolfe's papers on Go endgame CGT — for real-world flavor
- Albert/Nowakowski/Wolfe, *Lessons in Play* (2007) — friendly intro