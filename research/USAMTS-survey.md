# USAMTS Source Survey

Running log of USAMTS rounds analyzed for puzzle source material.

Source: https://www.usamts.org/contest/past-problems/

## Methodology

For each round, read all 5 problems + solutions. For each problem, record:

- **Theme fit** — does the solution use invariance, parity, coloring, modular
  arithmetic, conservation, monovariants, game value, Nim-like structure, or
  pigeonhole? If yes, what flavor.
- **Translatable to 2D interactive?** — can the surface of the problem be
  rendered as a clickable / draggable 2D thing? Pure-numerical problems
  usually fail this; combinatorial / spatial / configuration problems pass.
- **Verdict** — one of: **★ Gold-star** (use this), **Maybe** (revisit),
  **Skip** (wrong theme or untranslatable).

Hit rate target: ~1 gold-star per round on average. USAMTS has ~111 rounds in
its history (37 years × 3 rounds), so the pool is plenty deep — we only need
~22 final puzzles for a 1-in-5 selectivity.

## Year 37 — Round 1 (2025–2026)

Source: [Problems](https://files.usamts.org/Problems_37_1.pdf),
[Solutions](https://files.usamts.org/Solutions_37_1.pdf)

| # | Title (short) | Theme fit | Translatable | Verdict |
|---|---|---|---|---|
| 1/1/37 | Sum-sudoku with circles | Constraint logic; not invariance | Yes (already visual) | **Skip** — wrong theme |
| 2/1/37 | Decimal arithmetic Diophantine | Number theory (Simon's trick) | No (pure numbers) | **Skip** |
| 3/1/37 | Modify rational pair (a,b) via 4 moves; reach (2025, 1/2025)? | **Pure invariance — perfect** | Yes (with abstraction) | **★ Gold-star** |
| 4/1/37 | Convex hexagon from two triangles | Geometric extremal | Partial (setup visualizable, proof not) | **Skip** for now |
| 5/1/37 | k-good grid coloring | Pigeonhole + Latin-square construction | Yes (colored grid) | **Maybe** — beautiful but advanced |

### 3/1/37 — translation notes

**Original.** Pair of rationals (a, b). Moves: (i) both += 1, (ii) both ↦ 1/x,
(iii) negate a, (iv) negate b. (a) Is (2025, 1/2025) reachable from (0,0)?
(b) Is (2025, 1/2025) reachable from (0,1)?

**Underlying idea.** Define for a pair (a₁/a₂, b₁/b₂) in lowest terms the
quantity |a₁b₂ − a₂b₁|. This value's **parity is invariant** under all four
moves. Start (0,1) gives parity 1; target gives parity 0. Hence unreachable.
Start (0,0) is degenerate; reachable via lemma + construction.

**Why it's a gem.** The surface looks like arithmetic, not invariance. The
four moves are not obviously "preserving" anything. A math-knowledgeable
player wouldn't recognize this as a parity problem — they'd see a novel
construction with a deeply hidden invariant. Solution lands with surprise.

**Translation sketch.** Represent the pair (a, b) as two paired objects in
2D — candidates: two oscillating bars, two coupled pendulums, two pages of
a hinge-bound book where each page has a height and a direction.

- Move i (both += 1) → both bars grow by one tick.
- Move ii (both ↦ reciprocal) → both bars invert (long becomes short, short
  becomes long; a visible "flip" animation).
- Move iii (negate a) → left bar flips direction (above the tideline ↔
  below).
- Move iv (negate b) → right bar flips direction.

The hidden invariant becomes a **visual property the player can learn to
read**: probably the parity of crossings of some visible reference line, or
the parity of a counted feature in the configuration. The player should be
able to "see" the impossibility once they internalize the visual without
ever doing fraction arithmetic.

**Design risks.** (1) Numbers might leak through and feel "math-class." We
need the visual to fully replace the arithmetic — the bars shouldn't have
numerical labels. (2) Reciprocal-via-flip is the trickiest move to make feel
intuitive. Worth prototyping early. (3) The puzzle as stated has two parts
(0,0 reachable, 0,1 not). For our use, we'd probably present a *menu* of
starting configurations and target configurations and let the player tag
each as reachable/unreachable.

**Difficulty tier (provisional).** Hard or Capstone. The invariant is not
obvious; finding it is the whole game.

**Provisional title.** "The Hinge" or "The Pair" — settle later.

---

## Year 37 — Round 2 (2025–2026)

Source: [Problems](https://files.usamts.org/Problems_37_2.pdf),
[Solutions](https://files.usamts.org/Solutions_37_2.pdf)

| # | Title (short) | Theme fit | Translatable | Verdict |
|---|---|---|---|---|
| 1/2/37 | Numbers 1-12 on circle intersections, sum constraints, non-consecutive adjacency | Constraint logic | Yes (already visual) | **Skip** |
| 2/2/37 | "Amazing" n — list of (n-4) 1s + two 2s, always divisible into equal-sum sublists | Number theory + combinatorics; answer hinges on n=6 or 3+ distinct prime factors | Yes (place tiles, partition them) | **Maybe** — heavy number theory under the hood |
| 3/2/37 | Functional equation existence for f,g composed with cyclic permutation of exponents | Number theory / abstract algebra | No | **Skip** |
| 4/2/37 | Heptagon geometry, compute lengths via complex roots of unity | Pure calculation | No | **Skip** |
| 5/2/37 | Round-robin 1000 teams: must have either 10-draw star, 10-cycle, or 10-chain | **Ramsey-style — promising** | Yes (graph theory; small instance interactive) | **★ Gold-star** for graph-flavored puzzle |

### 5/2/37 — translation notes (briefly)
Color a complete graph red/blue (red = draw, blue = decided). Force one of three structures. The pigeonhole argument is gorgeous. Translation: smaller instance (say K₁₀ instead of K₁₀₀₀, look for K₁,₃ red star OR 3-cycle OR 3-chain). Player colors edges and must avoid all three structures — task is *to find an impossibility proof for very small n*. Pyramid candidate for Hard tier.

---

## Year 25 — Round 1 (2013–2014)

Source: [Problems](https://files.usamts.org/Problems_25_1.pdf),
[Solutions](https://files.usamts.org/Solutions_25_1.pdf)

| # | Title (short) | Theme fit | Translatable | Verdict |
|---|---|---|---|---|
| 1/1/25 | Lock with 3-letter code, find min button presses to guarantee opening | **De Bruijn sequence** — combinatorial covering | Yes (button-press sequence on visible lock) | **Maybe** — beautiful but the math is meaty |
| 2/1/25 | 5×6 grid, digits 0-9 (each 3 times), monotonic columns, every 2×2 sums to mult of 3 | **Explicit mod-3 invariant on subgrids** | Yes (constraint grid) | **★ Gold-star** — direct invariance puzzle |
| 3/1/25 | Bounded territorial sequence — \|a_i - a_j\| ≥ 1/j | Real analysis | No | **Skip** |
| 4/1/25 | "Bunny-unfriendly" n — coprime arithmetic progressions | Number theory | Limited | **Skip** for now |
| 5/1/25 | Niki and Kyle play triangle game; optimal play; who wins | **Two-player game with optimal play** | Yes (geometric, but two-player) | **Note** — relevant to CGT/opponent discussion below |

### Observation across the 3 rounds surveyed
- **Hit rate: 3 gold-stars out of 15 problems** = 1-in-5, which matches the projected target.
- **Theme distribution**: parity invariance (1), pair-invariant (1), mod-3 invariant (1), Ramsey-style (1), de Bruijn (1), two-player game (1). The math is varied — good for "every book a different theme."
- **Mod-3 invariance shows up twice already** (3/1/37 and 2/1/25); we should make sure not to over-use this single flavor.

---

## Year 30 — Round 1 (2018–2019)

Source: [Problems](https://files.usamts.org/Problems_30_1.pdf),
[Solutions](https://files.usamts.org/Solutions_30_1.pdf)

| # | Title (short) | Theme fit | Translatable | Verdict |
|---|---|---|---|---|
| 1/1/30 | Place 1-30 in grid; consecutive numbers in same row/col | Constraint logic | Yes (visual sudoku) | **Skip** |
| 2/1/30 | n orangutoads on number line jump toward each other; show some toad eventually can't move | **Monovariant — show process terminates** | Yes (tokens on a line) | **★ Gold-star** |
| 3/1/30 | Pairs (n,d) such that for every S there's a unique non-decreasing sequence with sum S, range d | Number theory | No | **Skip** |
| 4/1/30 | Fly in right triangle moves parallel to legs/altitude; show fly can reach any segment PQ | Geometry; density | Partial | **Maybe** — gorgeous visual but the math is analytic |
| 5/1/30 | Alternating sum of f(n) where f(n)=distance to next "uphill" number | Number-theoretic computation | No | **Skip** |

### 2/1/30 — translation notes
The classic monovariant proof: define a quantity (e.g., "spread" — sum of pairwise distances) that strictly decreases with each move. Termination follows.
**Translation:** Several glowing tokens at integer positions on a line. Each turn the current token jumps one unit toward any other token that's at least 2 units away. The puzzle: *show that no matter how the player chooses, the process must end.* Player gets a "monovariant tool" — drag the cursor across the configuration and see a quantity tick. The puzzle is solved when the player has tagged the *right* quantity (the one that always decreases).
This is the first puzzle introducing **monovariants as a special flavor of invariance** — they don't stay the same, but they only move one way. Pyramid: Medium tier. Important Act 1 late-puzzle for setting up "things that don't change but move one way" — which becomes Act 3's Sprague–Grundy intuition.

---

## Year 20 — Round 3 (2008–2009)

Source: [Problems](https://files.usamts.org/Problems_20_3.pdf),
[Solutions](https://files.usamts.org/Solutions_20_3.pdf)

| # | Title (short) | Theme fit | Translatable | Verdict |
|---|---|---|---|---|
| 1/3/20 | Prob that random pandigital 10-digit number is divisible by 11 | Number theory + counting | Limited | **Maybe** |
| 2/3/20 | **Two-player game**: 2009 stones, take 3/4/7 (or all if 1-2 left), last stone wins. Which player wins? | **★★ Pure CGT — first gold-star CGT find** | Yes (pile of stones, alternating moves) | **★★ Gold-star CGT** |
| 3/3/20 | lcm/gcd Diophantine | Number theory | No | **Skip** |
| 4/3/20 | Locus of A given cyclic quadrilateral with specific bisection | Pure geometry | No | **Skip** |
| 5/3/20 | Beatty-style floor sequence contains infinitely many powers of b | Real analysis | No | **Skip** |

### 2/3/20 — full analysis and translation

**The math.** Compute Sprague–Grundy / P-positions for the subtraction game (3, 4, 7) with bonus rule (take-all if pile size 1 or 2). Standard analysis gives:

> **L-positions** (losing for the player to move) = exactly those n with n ≡ 0, 5, or 6 (mod 11).

2009 mod 11 = 7. Not L. So **the first player wins**. Winning move: 2009 − 7 = 2002 ≡ 0 (mod 11). Take 7.

This is *both* CGT and *invariance*: the L-positions are characterized by a modular condition. **The mod-11 fingerprint is the invariant** that controls the game. This is exactly the bridge Act 3 needs — proving game-values are themselves invariants.

**Translation as a partner-record puzzle (Act 2).** Title placeholder: "The Three-Four-Seven."

- **Visual surface:** a pile of small stones on a polished slate table. The pile diminishes as moves are played. Two named hands — H.M. and P.W. — alternate. Each move pulls 3, 4, or 7 stones from the pile (or all of them if only 1 or 2 remain).
- **What the player gets:** a *partial record*. The pile started at some number; the recorded moves are shown; the record stops mid-game. The player is asked: *who would have won, and what was the winning move from the current position?*
- **Aha:** the player has to find the L-pattern. Tutorial-level CGT puzzles in earlier Act 2 build this skill on smaller piles (15 stones, 30 stones) where the period-11 pattern is small enough to see by exhaustion. By the time the player meets this puzzle (the famous 2009 instance), they can recognize the mod-11 fingerprint.
- **Predecessor + partner artifact:**
  - H.M.'s side, in their hand: *"P. believes she can win this position. She is wrong, but only by one move. The mistake is the loveliest mistake."*
  - P.W.'s side, scrawled diagonally in their hand: *"Two thousand and nine stones. We have been arguing about this all winter. I maintain that you are wrong."*
- **Difficulty:** Hard. This is the puzzle that locks in the bridge between Act 1 invariants and Act 2 game-values.

---

## Running candidate count

After 5 rounds (25 problems): **6 gold-stars + 3 maybes**.

| Theme flavor | Gold-stars |
|---|---|
| Parity invariance | 1 — Tide (P001 base) |
| Modular invariance | 2 — Rational pair (P3 candidate), digit-grid (2/1/25) |
| Pair-invariant (compass-style) | 0 from source — Compass was a translation in-house |
| Pigeonhole / Ramsey | 1 — Round-robin tournament (5/2/37) |
| Monovariant | 1 — Orangutoads (2/1/30) |
| **CGT** | **1** — **2009 stones (2/3/20)** ★★ first CGT candidate |

Healthy distribution. Need: ~2 more CGT, more coloring-flavored invariance, at least one geometric invariant puzzle. Pull 2-3 more rounds in next session focused on those gaps.

---

*(More rounds to follow.)*
