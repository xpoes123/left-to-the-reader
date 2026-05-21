# Wake-up brief

David — read this first. Written ~01:30 local on 2026-05-21 after you
went to bed. Spent the session on infrastructure + research + creative
work in roughly equal portions.

## What changed since you went to bed

**Project structure exists.** `~/code/the-library/` now contains:

```
the-library/
├── README.md                          ← top-level overview
├── WAKE-UP-BRIEF.md                   ← this file
├── design/
│   ├── CONCEPT.md                     ← what's locked, what's open
│   ├── CHARACTERS.md                  ← H.M. (predecessor) + P.W. (partner)
│   ├── ACT3-CLIMAX.md                 ← Sprague–Grundy reveal arc
│   └── ACT2-PUZZLES-DRAFT.md          ← 8 sketches for Act 2
├── research/
│   └── USAMTS-survey.md               ← 5 rounds analyzed, 6 gold-stars found
├── puzzles/
│   ├── p001-the-tide.md
│   ├── p002-the-three-inkwells.md
│   └── p003-the-cartographers-compass.md
└── .claude/skills/
    ├── puzzle-curate.md               ← how to source problems
    └── puzzle-design.md               ← how to translate them
```

## The three things I most want you to react to over coffee

These three are doing the *creative* heavy lifting. Everything else is
infrastructure.

### 1. `design/ACT3-CLIMAX.md` — the Sprague–Grundy reveal

The climax of the game is sketched as three capstone puzzles ("Two
Tables", "The Sum", "Every Book") that *make the player do the
unification themselves*. The final puzzle is the player computing the
XOR-value of the entire library — and the answer is *zero*, which
means the second mover (the player) wins, which means **the predecessor
was the first mover and they never finished, and you are completing
their game by making the canonical winning play**.

H.M.'s last letter is in the doc. I'm proud of it. Tell me if it
lands or if it's overwritten.

### 2. `design/CHARACTERS.md` — the partner candidates

P.W. now exists as a character. The doc has 4 candidate identities
(Peer, Student-Become-Equal, Spouse, Rival) with voice samples for
each. My recommendation in writing is **Spouse + touch of productive
disagreement** — reasons stated there. Read those, tell me if any of
the others pull you instead.

### 3. `design/ACT2-PUZZLES-DRAFT.md` — 8 sketches

Eight candidate puzzles for Act 2, including the *real* one: the
2009-stones bridge puzzle (Sketch 4) which is one of the most beautiful
finds of the survey because **it's a CGT problem whose L-positions are
characterized by a mod-11 invariant** — i.e., it's literally both a
game-theory problem and an invariance problem. That's the bridge
between Acts 1 and 2 in a single problem.

Also note the proposed Act-1-to-Act-2 transition moment at the bottom
of that doc: a *folded letter falls out of the last Act-1 book*, in
the partner's hand, addressed to H.M. That's where the partnership
enters the story.

## What the research turned up

5 USAMTS rounds analyzed, 25 problems read. **6 gold-stars found**
(rate matches projection of 1-in-5):

| Theme | Problem | Status |
|---|---|---|
| Parity invariance | 3/1/37 — rational pair "Hinge" | Translation sketched |
| Mod-3 invariance | 2/1/25 — digit grid | Translation pending |
| Pigeonhole / Ramsey | 5/2/37 — tournament | Translation pending |
| Monovariant | 2/1/30 — orangutoads | Translation sketched |
| **CGT** | **2/3/20 — 2009 stones** | **Full translation done** ⭐ |

Plus our 3 in-house translations: Tide (parity), Inkwells (mod-3),
Compass (paired). So **9 puzzle candidates so far** out of ~22 we need.
On track.

## What's still open (in priority order)

1. **You react to the climax doc and partner candidates.** That's
   downstream-blocking — I can't lock the partner character without
   your input, and a lot of artifact-text writing depends on the
   partner's voice.
2. **Survey 2-3 more USAMTS rounds** focused on:
   - More CGT (we have 1, want 2-3 more)
   - Coloring-flavored invariance (we have only mod-3, want
     checkerboard-style)
   - Geometric invariants (we have zero)
3. **Survey 1-2 Putnam rounds** for adult-flavored CGT material —
   Putnam tends to have more "two-player game with optimal play"
   problems than USAMTS.
4. **Survey *Winning Ways* (Berlekamp/Conway/Guy)** for Act 2/3
   game-mechanic source material specifically — Domineering, Toads-
   and-Frogs, Hackenbush all originate there.
5. **Lock the partner identity.** Then the artifact texts in P001-P003
   stay the same but Act 2 puzzles' artifacts can be drafted.
6. **Invoke `frontend-design`** on Puzzle 001 ("The Tide") to get the
   visual identity prototyped. This is the next major creative
   milestone after partner-identity lock.

## Things I deliberately did NOT do during the session

- Write any actual game code. We're still in design.
- Lock the predecessor's exact identity (still mentor/father/teacher).
- Make implementation decisions about engine architecture.
- Pull from Putnam or Berlekamp (would have spread the dossier too
  thin — wanted to go deeper on USAMTS first).
- Write all 22 puzzle specs. Only P001-P003 are locked; the rest are
  sketches.

## Notes to self for next session

- The "value of the entire library" climax requires that the actual
  XOR of all puzzle game-values equals zero. We commit to that
  constraint when curating final Act 1 and Act 2 puzzles — may need
  to add or substitute a puzzle to make the XOR work out. (Noted in
  `ACT3-CLIMAX.md` already.)
- The two skill files (`puzzle-curate`, `puzzle-design`) are written
  but untested. First time we go through a real survey-and-spec loop,
  they may need to be refined.
- The "stamp this position as a loss" mechanic for impossibility
  puzzles needs an actual interaction design. Currently hand-waved.
  Worth a focused design session.

## How to start the next conversation

When you sit down with this, I'd suggest:

```
read /home/david/code/the-library/WAKE-UP-BRIEF.md
```

Then react to the three creative docs (CLIMAX, CHARACTERS, ACT2
sketches). Pick a partner identity, react to the climax, give a
thumbs-up or pushback on the Act 2 sketches. From there we can either
keep curating (more USAMTS, then Putnam), lock the partner and write
artifact texts, or jump to `frontend-design` for the visual prototype.

Sleep well. The library will be here in the morning.
