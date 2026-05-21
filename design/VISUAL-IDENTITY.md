# The Library — Visual Identity (v2)

This document is the design language established by Puzzle 001 (*The
Tide*) after the v2 pivot from "illustrated children's-book pebble"
to "figure plate in a mathematician's notebook." Every subsequent
puzzle in the library must read as the same hand made it.

## Tone, in one sentence

A working notebook on a cold reading-room desk. The figures are cold
ink on bone paper; warmth lives only in the typography and in H.M.'s
marginalia.

## What changed from v1 (and why)

| Was                                | Now                                 |
|------------------------------------|-------------------------------------|
| Warm cream paper (`#ebe0c9`)       | Cool bone (`#e8e3d4`)               |
| Warm blue-black ink (`#1d2334`)    | Cooler ink (`#161825`)              |
| EB Garamond                        | **Spectral**                        |
| Caveat                             | **Reenie Beanie**                   |
| Shaded sand-pebble illustrations   | Inked-blob diagrams: outline ↔ fill |
| Tideline as ink mark + damp band   | Single hand-wavy dashed line        |
| Cast shadows on pebbles            | None — diagrams don't cast shadows  |
| Speckle texture, sheen, glints     | None — no fills, no shading anywhere |
| Marginalia absolute-positioned     | Marginalia in flow, right column    |

The rule that produced these changes: **diagrams, not illustrations.**
References are Conway's *On Numbers and Games*, Berlekamp/Conway/Guy's
*Winning Ways*, Tufte. Not children's books.

## Palette

Anything outside this list needs an argument.

### Paper
| Token            | Hex       | Use                                          |
|------------------|-----------|----------------------------------------------|
| `--paper`        | `#e8e3d4` | Page surface. Cool bone.                     |
| `--paper-edge`   | `#cdc5b1` | Darkened bone near deckle / edge.            |
| `--paper-fold`   | `rgba(40,36,26,0.18)` | Spine vignette ink (left only).  |
| `--paper-shadow` | `#0c0d10` | The dark room outside the book.              |

### Ink
| Token         | Hex       | Use                                            |
|---------------|-----------|------------------------------------------------|
| `--ink`       | `#161825` | Primary diagram ink, primary type.             |
| `--ink-soft`  | `#242838` | Secondary type, figure caption.                |
| `--ink-faded` | `#6c6e7a` | Numerals, signatures, very-light marks.        |
| `--ink-pencil`| `#2f3346` | Pencil weight, used for the marginalia hand.   |

### Tide
| Token      | Hex        | Use                                            |
|------------|------------|------------------------------------------------|
| `--tide`   | `#5e7a8a`  | Faint horizon-blue, the dashed tideline only.  |

**Forbidden:** warm browns of any kind, sand-ochre, anything in the
red/orange/yellow gamut, anything that "warms up" the figure. The figure
is cold. If a color feels comfortable, it is wrong here.

The single permitted hint of color outside ink is the faint horizon
blue of the tideline. No other puzzle should introduce a third color
unless its math genuinely demands one — and even then, hold the line.

## Typography

Two faces. No third face until P.W.'s hand arrives in Act 2.

### Serif — body, titles, figure captions, page numerals
**Spectral** (Production Type, 2017), weights 300 / 400 / 500, italic
variants.

Spectral is a modernist scholarly serif designed for serious reading
on screen. It carries the gravitas of an academic press without
looking like a literary novel set in Garamond. The italic is a true
italic — it's what we want for "The Tide" and for the figure caption.

Page numerals (Roman, italic) use heavy letter-spacing (~0.36em) so
they read as **stamped**, not typed. Figure captions sit at 13–14px
italic, `--ink-soft`, centered under the figure with a generous
top-gap from the diagram.

### Hand — H.M.'s marginalia
**Reenie Beanie**.

Reenie Beanie is spidery, lightly slanted, pencil-thin, and less
identifiable than Caveat (which v1 used and v2 dropped — Caveat is
too instantly recognizable, too "default Google Fonts marker"). It
reads as a real person thinking on paper in pencil, not posing.

It contrasts well with anything blockier (good candidates for P.W.'s
future hand: **Architects Daughter**, **Special Elite**, or
**Shadows Into Light Two**). H.M. and P.W. must be visibly different
hands at a glance.

### Fallbacks
* Serif → `"Cardo", "Iowan Old Style", "Sitka Text", Georgia, serif`.
  Times Roman is banned. EB Garamond is no longer welcome here.
* Hand   → `"Bradley Hand", "Comic Sans MS", cursive`. Yes, really —
  a defaulting browser must still mark H.M.'s voice as obviously
  handwritten, even if ugly.

## Illustration vocabulary — the diagram

This is the central change. Every figure in the library follows these
rules.

1. **Hand-drawn organic paths**, procedurally jittered (the v1
   `pebbleOutline` generator is kept verbatim — what made v1 wrong was
   what we drew *on top* of those paths, not the paths themselves).
2. **Two visual states, both pure ink.**
   * Dry → stroke only, no fill. Stroke is `--ink`, ~1.5px,
     `stroke-linejoin: round`.
   * Wet → SAME outline + a solid `--ink` fill inside. Opacity
     crossfade between the two.
3. **No fills, no gradients, no textures, no speckles, no shading,
   no cast shadows, no SVG ink-jitter filter.** The wavering quality
   comes from the jittered path *shape*, not from texture or filter
   work post-hoc.
4. **Numerals beneath each figure element**, small italic serif at
   12px, `--ink-faded`. (`1 2 3 4 5 6 7` for *The Tide*.) Future
   puzzles label whatever they need labelled — vertices, cards,
   inkwells. Always Arabic numerals, never Roman, except for the
   page numeral itself.
5. **Tidelines / axes / connectors are hand-wavy dashed lines**,
   `--tide` colour where the puzzle is the tide, otherwise `--ink`
   at low opacity. `stroke-dasharray` short (~3–5 / 4–6).

### The figure caption

Each puzzle has a single short italic caption beneath its figure,
written in the style of a real plate:

> *Fig. I.  The shore at low tide. Seven stones, two wet.*

The caption *describes the diagram concretely*, never the gameplay
("seven stones, two wet" — not "click adjacent pairs to win"). The
caption is part of the figure, not a tutorial.

## Hover & selection

When the player hovers a valid pair-zone, two reinforcing signals
arm:

1. **A −2px vertical lift** on both pebbles in the pair (CSS transform
   on the inner `.pebble-lift` group — only the lift; never on the
   outer group that carries the placement transform).
2. **A pair-bracket** beneath the pair: a small `|__|` glyph drawn in
   ink at 1.1px stroke, ~0.62 opacity. The bracket is *mathematical
   notation*, not a button highlight — it says "this pair," in the
   visual language of `{p_i, p_{i+1}}`.

Click commits.

## Audio (unchanged from v1)

* **Plip** — sine envelope ~250ms, pitch lower for wet outcomes (~360→200 Hz),
  higher for dry (~520→380 Hz). Mixed with a bandpass-filtered noise
  burst (~40ms). Gain capped at 0.10.
* **Settle** — three sine notes (A3 / C♯4 / E4) spaced ~420ms apart,
  each with a long exponential decay. Gain capped at 0.045. An exhale.

Web Audio API only; no audio files.

## Motion

Old things move slowly. Same tokens, same curves as v1:

| Token         | Duration | Curve                            | Use                          |
|---------------|----------|----------------------------------|------------------------------|
| `--t-flip`    | 420ms    | `cubic-bezier(.32,.04,.32,1)`    | Wet-fill opacity crossfade   |
| `--t-arm`     | 220ms    | `cubic-bezier(.4,0,.2,1)`        | Lift + bracket fade-in       |
| `--t-settle`  | 2200ms   | `cubic-bezier(.4,0,.2,1)`        | Solved-page brightness drop  |

Banned: spring physics, bounces, overshoot, fades on hover, anything
flashy. Respect `prefers-reduced-motion` — transitions go to 0ms.

## Layout — the page

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                       I . (page numeral, italic)                │
│                                                                 │
│                   The Tide   (Spectral italic, ~54px)           │
│                                                                 │
│                                                                 │
│ ┌────────────────────────────────────┐ ┌─────────────────────┐  │
│ │                                    │ │                     │  │
│ │                                    │ │  Some changes are   │  │
│ │      ○  ●  ○  ○  ○  ●  ○           │ │  reversible. Some   │  │
│ │      ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴       │ │  are only nearly    │  │
│ │      1  2  3  4  5  6  7           │ │  so. Look at what   │  │
│ │                                    │ │  cannot vary, and   │  │
│ │  Fig. I.  The shore at low tide.   │ │  the rest will tell │  │
│ │  Seven stones, two wet.            │ │  itself.            │  │
│ │                                    │ │             — H. M. │  │
│ └────────────────────────────────────┘ │  (solved note here) │  │
│                                        └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

* The page uses `display: grid` with two columns: a flexible figure
  column and a fixed-width margin column (`clamp(180px, 22%, 230px)`).
* Marginalia lives **in flow** in the margin column — not absolutely
  positioned. The v1 overlap-with-illustration bug is structurally
  impossible.
* Below 760px the grid collapses to a single column. The marginalia
  stacks below the figure.
* Marginalia is rotated −1.4° (H.M.'s base note). Solved notes rotate
  the other way (+2.6°) to read as accreted, not authored-at-once.
* Spine-side ink vignette is always on the **left** — this is the
  right-hand page of an open book. A `.page--left` variant will
  be needed if a future puzzle wants to sit on the left side of a
  spread.

## Solved gesture (per-puzzle)

Each puzzle picks **one** solved gesture. Stacking is forbidden.

For *The Tide*: a second marginalia line fades in beneath H.M.'s
note — a crossed-out phrase ("I never could.") followed by a single
new word ("Good.") in their hand. The page also drops imperceptibly
in brightness over ~2.2s; this is sub-threshold support, not the
gesture. The note is the gesture.

Other puzzles may use a slow page-corner curl, a single quiet word
in the margin, an ink-bleed, a number quietly written next to the
figure — but only one of them, ever.

## What this document is not

This is the **visual** language. It says nothing about the math of
puzzles, the library frame, the table of contents, Act-2 game
records, or the Act-3 unification. Those documents live elsewhere.

---

## Inkwell diagram vocabulary (Puzzle 002 addition)

How the locked v2 vocabulary applies to vessel-with-fill figures.
These rules extend, never override, the diagram vocabulary above.

* **Vessel outline** — same generator pattern as the pebble path: a
  closed hand-jittered bezier silhouette, drawn in `--ink` at 1.5px.
  No glass transparency illusion, no highlight. The shape is squat
  with a small neck and lip. Each well gets its own seed so the three
  read as the same hand drawing three slightly different vessels.
* **Fill is the "state" half of the two-state diagram principle** —
  the well's outline plays the role that v1 called "outline only"
  (dry); the solid ink fill inside plays the role v1 called
  "outline + ink fill" (wet). New here: the fill rises and falls
  *continuously by units* rather than crossfading binary on/off.
  The fill shape has a slightly wavy top edge (the meniscus); its
  body extends well below the vessel and is masked by the outline's
  clip-path. The clip-path and the level transform MUST be on
  different elements — share them and the ink escapes the vessel.
* **Target marker** — a single faint dashed horizontal line drawn
  across each vessel at the goal level, in `--tide` (the same
  horizon-blue as the Tide's water line). This re-uses an existing
  token rather than introducing a new accent. When the player hits
  the goal, the ink top coincides with the dashed line and reads as
  "absorbed."
* **Unit ticks** — short horizontal marks on the **outside-right**
  of each vessel, at integer unit intervals, in `--ink` at ~0.4
  opacity. They function like the gradations on a measuring vessel.
  Always visible; never obscured by ink. Putting ticks inside the
  vessel was tried first and didn't work — same color as the fill
  means they merge into the ink and become invisible.
* **Hover annotation** — when a well is armed, a small italic serif
  number appears above the lip: `−2` on the giver, `+1` on each
  receiver. Spectral italic at 14px, `--ink-soft`, fading in over
  `--t-arm`. Notation, not button language. The giver also lifts
  −3px (receivers do not — they are being acted upon, not chosen).
* **Pour transition** — the level transform uses a slower curve than
  the pebble flip (`720ms cubic-bezier(.32,.02,.30,1)` vs the
  pebble's 420ms). Ink takes longer to settle than a stone takes to
  wet. The audio reflects this: a single low sine that drops in
  pitch over ~300ms, plus two faint higher-pitched ticks at +150ms
  and +230ms — one per receiver gaining its unit.

