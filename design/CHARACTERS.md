# Characters

The library has three voices. The player (you), the predecessor, and the
partner. The player rarely speaks — the game is mostly listening to the
other two. This document sketches what we know and what's still open.

## The player (you)

**Locked.** The player-character has *no name, no face, no inner voice*. We
do not write monologue for them. The player exists as a *reader of these
books*, nothing more. We do not give them a backstory because that would
fight the inheritance frame — the player is the inheritor of the library
specifically, but the player's identity *as a person* is left for the
actual player to project into. Reference: the Stranger in *Outer Wilds* (no
backstory, no face, no monologue, you-as-camera).

What we know about the player by inference:
- Knew the predecessor well enough to inherit the library
- Has a working math intuition strong enough to follow the puzzles
- Cared enough about the predecessor to do this work after they're gone

## The predecessor — "H.M." (working initials)

**Mostly locked.**

### What's settled
- The protagonist's *primary* connection. Their voice is the dominant tone
  of the game.
- Has died or vanished before the game starts. The library is what they
  left.
- Worked on a single unifying mathematical question for most of their
  life. Never finished. The protagonist is finishing it.
- Voice register: weary, philosophical, slightly self-critical, occasionally
  wry, occasionally tender. *Talks to themselves on the page*, not to a
  reader.
- Their handwriting is recognizable to the player — used as a typographic
  motif throughout the game.

### What's open
- Exact relationship to protagonist — mentor / father / teacher / aunt /
  grandparent. Touch of all of them. Sharpens via artifact text in later
  acts.
- Cause of disappearance — death (most likely), retirement to seclusion,
  something stranger.
- Whether the protagonist *witnessed* the predecessor's late-life work
  (and is now retracing) or only *inherited* it (and is meeting it cold).
  Affects how H.M.'s voice should read — familiar or just-being-met.

### Sample voice
*From the Tide artifact:* "Some changes are reversible. Some are only nearly
so. Look at what cannot vary, and the rest will tell itself."

*From the Compass artifact:* "The compass remembers in pairs. The north
star will always shadow its other. I lost a year arguing with this."

Notice: the voice never *teaches*. Never names the invariant. Never says
"parity is preserved." It hints, it observes, it confesses. The voice
sometimes *complains*. The voice is occasionally *wrong* on the page in
ways the player can see — they wrote a wrong conjecture and crossed it
out. That makes H.M. human, not oracle.

### H.M.'s in-fiction relationship to Owen Maitzen

H.M. is a fictional character; Owen Maitzen was real. In the fiction,
H.M. watched Maitzen's video and admired him deeply. This is referenced
in occasional marginalia — most prominently in one specific Act 2 book
that the predecessor wrote *about* the video. H.M.'s admiration of
Maitzen is the in-fiction emotional bridge between our fictional
predecessor and the real mathematician our game is dedicated to.

Voice sample for this kind of marginalia:

> *"O.M. had a way of saying these things that I cannot match. I have
> been re-reading his only essay tonight. He died young; I have lived
> long; he is the better mathematician anyway. — H.M."*

See `design/CONCEPT.md` (Maitzen reference layers section) and
`research/maitzen-analysis.md` for full context on how this layer
works.

## The partner — "P.W." — The Peer

**Locked 2026-05-21.**

P.W. is a colleague of H.M.'s, of equal stature. Decades of correspondence.
They lived in different cities; the partnership is conducted *primarily on
paper*. Reference: Hardy and Littlewood (real mathematical partnership
across distance, mostly by mail). The library contains both H.M.'s books
and the letters P.W. sent in response to those books — the partnership IS
the correspondence.

### Voice register

Precise, restrained, occasionally arch. Less philosophical than H.M. More
exacting. Their marginalia tends to *correct or refine* H.M.'s claims
rather than expand on them. They use shorter sentences; they almost never
use the word "I" when the math suffices.

**Voice samples:**

> *"Your conjecture is correct in the cases I can check. Cases I cannot
> check, I do not yet trust. Please do not press me on this. — P.W."*

> *"You are wrong about Domineering being symmetric. The symmetry is a
> property of the empty board, not of the game. — P.W."*

> *"I have not forgotten that I owe you a position in return for the one
> from Tuesday. I will send it when it is worth sending. — P.W."*

### Why The Peer specifically

- The peer-correspondence model fits the *library frame* perfectly: every
  letter from P.W. is a physical artifact tucked into the relevant book.
  The library *is* the conversation.
- Conducting the partnership at distance means the player can encounter
  P.W. entirely through writing — no live appearances necessary, no
  staging required. Pure marginalia.
- Restrained voice contrasts well with H.M.'s more philosophical one:
  the math-savvy reader will pick up that P.W. is the more *technically*
  careful of the two, while H.M. is the more *exploratory* mind.
- "Precise but warm in their precision" is harder to write than "openly
  warm" but produces sharper writing.

### Story-level open questions about P.W.

- Whether P.W. is alive at game-start (likely yes — they may be the *source*
  of the library reaching the protagonist; H.M. is gone, P.W. is the one
  who packed and sent the books)
- Their gender, name, era — left flexible until voice is locked
- Whether the final book in the library is in P.W.'s hand, addressed to the
  protagonist by name (currently planned in `ACT3-CLIMAX.md`)
- How H.M. and P.W. first met (a single early letter, found in Act 2, can
  carry this)

### The XOR-naming convention (from ACT2 redesign 2026-05-21)

P.W. and H.M. have independent names for the operation that turns out to
be XOR (disjunctive sum of Grundy values). The player encounters both
terms in marginalia before realizing they refer to the same operation:

- **P.W. calls it "the stacking"** — because the operation works place by
  place, like stacking values vertically and combining each row.
- **H.M. calls it "the bare sum"** — emphasizing that it is a sum *without
  carries*.

These two terms appearing in two hands, across multiple letters, gradually
converging in the player's understanding, is one of the small pleasures
of Act 2's writing.

## Voice-contrast principle

The two voices should be *immediately distinguishable* by anything more
than a sentence. Even if a player can't articulate the difference, they
should never confuse "who wrote this." Tools for distinguishing them:

- Handwriting (font / typeface in implementation)
- Cadence (long flowing sentences vs. clipped, etc.)
- Vocabulary (technical vs. plain, formal vs. casual)
- Mood (reflective vs. exacting, etc.)
- What they comment on (H.M. comments on the math itself; P.W. might
  comment on H.M.)

When `frontend-design` is invoked to prototype the visual identity, the
handwriting/font distinction between H.M. and P.W. is one of the load-bearing
design decisions.
