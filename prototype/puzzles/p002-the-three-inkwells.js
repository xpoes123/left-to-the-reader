/* ─────────────────────────────────────────────────────────────────────
   puzzles/p002-the-three-inkwells.js

   Three glass inkwells on a desk. Click a well: it loses two units of
   ink, the other two gain one each. (Sum conserved.) The aha is that
   not every arrangement of nine units is reachable — pairwise
   differences mod 3 are invariant. The marked target (4, 2, 3) IS
   reachable; the obvious "balance them" target (3, 3, 3) is not.

   This is the second puzzle module. It exists primarily to prove the
   v2 visual identity generalizes. Almost every visual decision is
   inherited from p001-the-tide.js. The new contributions are:
     · A vessel-with-fill diagram shape (glass outline + clipped ink)
     · A faint dashed target marker (drawn in --tide — the same
       horizon-blue used for the Tide's water line in p001; this puzzle
       re-uses it as "the line ink should reach")
     · A pour animation (ink levels slide to new values over ~700ms)
     · Hover-armed mathematical annotation (−2 / +1) above each well
     · A new solved gesture: a single word ("Held.") in H.M.'s hand,
       echoing the marginalia line "the pattern of giving is what stays"

   Module interface is identical to p001:
     puzzle.id, puzzle.title, puzzle.init(el), puzzle.isSolved(),
     puzzle.cleanup()
   ──────────────────────────────────────────────────────────────────── */

const INITIAL = [5, 3, 1];
const GOAL    = [4, 2, 3];
const N = 3;

/* SVG geometry. */
const VB_W = 480;
const VB_H = 280;
const WELL_CENTERS_X = [80, 240, 400];
const WELL_TOP_Y = 60;
const WELL_HEIGHT = 120;
const WELL_BOTTOM_Y = WELL_TOP_Y + WELL_HEIGHT;

/* Inside the well: ink at level 0 sits at INK_BOTTOM_LOCAL; each unit
   of ink is UNIT_HEIGHT tall. Coords are well-local (origin = top of
   well, y increasing downward). */
const INK_BOTTOM_LOCAL = 116;
const UNIT_HEIGHT = 13;

/* Half-widths for the well silhouette (lip, neck, belly). */
const W_LIP  = 17;
const W_NECK = 14;
const W_BODY = 29;

const SVG_NS = "http://www.w3.org/2000/svg";

/* ── small deterministic PRNG ───────────────────────────────────── */
function mulberry32(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Hand-tuned bezier outline of an inkwell — squat, slightly bellied,
   small neck and lip. The bezier control points are parametric in
   (W_LIP, W_NECK, W_BODY, WELL_HEIGHT). Each point gets a small
   deterministic jitter from `seed` so the three wells aren't
   identical. */
function inkwellPath(seed) {
  const rng = mulberry32(seed);
  const j = (m) => (rng() - 0.5) * m;
  const Wl = W_LIP, Wn = W_NECK, Wb = W_BODY, H = WELL_HEIGHT;

  /* Path is closed, clockwise, starting at top-left of the lip. All
     coords in well-local space. */
  return [
    `M ${(-Wl + j(0.5)).toFixed(2)} ${(0 + j(0.4)).toFixed(2)}`,
    `L ${( Wl + j(0.5)).toFixed(2)} ${(0 + j(0.4)).toFixed(2)}`,
    `L ${( Wl + j(0.5)).toFixed(2)} ${(5 + j(0.3)).toFixed(2)}`,
    `C ${( Wl + j(0.4)).toFixed(2)} ${(7 + j(0.3)).toFixed(2)},`
      + ` ${( Wn + j(0.4)).toFixed(2)} ${(9 + j(0.3)).toFixed(2)},`
      + ` ${( Wn + j(0.4)).toFixed(2)} ${(12 + j(0.4)).toFixed(2)}`,
    `L ${( Wn + j(0.4)).toFixed(2)} ${(22 + j(0.6)).toFixed(2)}`,
    `C ${( Wn + j(0.5)).toFixed(2)} ${(28 + j(0.7)).toFixed(2)},`
      + ` ${( Wb * 0.85 + j(0.6)).toFixed(2)} ${(36 + j(0.8)).toFixed(2)},`
      + ` ${( Wb + j(0.5)).toFixed(2)} ${(56 + j(1.0)).toFixed(2)}`,
    `C ${( Wb + j(0.4)).toFixed(2)} ${(72 + j(1.0)).toFixed(2)},`
      + ` ${( Wb * 0.92 + j(0.6)).toFixed(2)} ${(92 + j(1.0)).toFixed(2)},`
      + ` ${( Wb * 0.6 + j(0.5)).toFixed(2)} ${(110 + j(0.8)).toFixed(2)}`,
    `C ${( Wb * 0.35 + j(0.5)).toFixed(2)} ${(116 + j(0.6)).toFixed(2)},`
      + ` ${( Wb * 0.15 + j(0.4)).toFixed(2)} ${(119 + j(0.4)).toFixed(2)},`
      + ` ${(0 + j(0.4)).toFixed(2)} ${(H + j(0.3)).toFixed(2)}`,
    `C ${(-Wb * 0.15 + j(0.4)).toFixed(2)} ${(119 + j(0.4)).toFixed(2)},`
      + ` ${(-Wb * 0.35 + j(0.5)).toFixed(2)} ${(116 + j(0.6)).toFixed(2)},`
      + ` ${(-Wb * 0.6 + j(0.5)).toFixed(2)} ${(110 + j(0.8)).toFixed(2)}`,
    `C ${(-Wb * 0.92 + j(0.6)).toFixed(2)} ${(92 + j(1.0)).toFixed(2)},`
      + ` ${(-Wb + j(0.4)).toFixed(2)} ${(72 + j(1.0)).toFixed(2)},`
      + ` ${(-Wb + j(0.5)).toFixed(2)} ${(56 + j(1.0)).toFixed(2)}`,
    `C ${(-Wb * 0.85 + j(0.6)).toFixed(2)} ${(36 + j(0.8)).toFixed(2)},`
      + ` ${(-Wn + j(0.5)).toFixed(2)} ${(28 + j(0.7)).toFixed(2)},`
      + ` ${(-Wn + j(0.4)).toFixed(2)} ${(22 + j(0.6)).toFixed(2)}`,
    `L ${(-Wn + j(0.4)).toFixed(2)} ${(12 + j(0.4)).toFixed(2)}`,
    `C ${(-Wn + j(0.4)).toFixed(2)} ${(9 + j(0.3)).toFixed(2)},`
      + ` ${(-Wl + j(0.4)).toFixed(2)} ${(7 + j(0.3)).toFixed(2)},`
      + ` ${(-Wl + j(0.5)).toFixed(2)} ${(5 + j(0.3)).toFixed(2)}`,
    `Z`,
  ].join(' ');
}

/* The ink-fill shape. A wide rectangle with a slightly wavy top edge,
   extending far below the well (the clip will trim the visible part).
   Translated up/down by the well's `set` routine to set the ink level. */
function inkFillPath(seed) {
  const rng = mulberry32(seed + 991);
  const j = (m) => (rng() - 0.5) * m;
  const W = 36;
  const H_BIG = 240;
  return [
    `M ${(-W).toFixed(2)} ${(0 + j(0.4)).toFixed(2)}`,
    `Q ${(-W / 2).toFixed(2)} ${(-0.6 + j(0.6)).toFixed(2)} 0 ${(0.3 + j(0.4)).toFixed(2)}`,
    `Q ${( W / 2).toFixed(2)} ${(-0.5 + j(0.6)).toFixed(2)} ${W.toFixed(2)} ${(0.1 + j(0.4)).toFixed(2)}`,
    `L ${W.toFixed(2)} ${H_BIG.toFixed(2)}`,
    `L ${(-W).toFixed(2)} ${H_BIG.toFixed(2)}`,
    `Z`,
  ].join(' ');
}

/* Translate level → well-local y position of the ink top. */
function inkTopY(level) {
  return INK_BOTTOM_LOCAL - level * UNIT_HEIGHT;
}

/* el() — SVG element builder. */
function el(name, attrs = {}, parent) {
  const e = document.createElementNS(SVG_NS, name);
  for (const k in attrs) {
    if (attrs[k] === false || attrs[k] === null || attrs[k] === undefined) continue;
    e.setAttribute(k, attrs[k]);
  }
  if (parent) parent.appendChild(e);
  return e;
}

/* ── audio: pour + settle ──────────────────────────────────────── */
function makeAudio() {
  let ctx = null;
  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) {} }
    return ctx;
  }
  /* The pour: a single low sine that drops in pitch, plus two faint
     higher-pitched ticks 150ms and 230ms in — each receiving well
     getting its unit. Conceptually: a glug, then two quiet meniscus
     ticks. */
  function pour() {
    const c = ensure(); if (!c) return;
    const now = c.currentTime;

    /* Primary pour. */
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(280, now);
    o.frequency.exponentialRampToValueAtTime(160, now + 0.30);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.090, now + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    o.connect(g).connect(c.destination);
    o.start(now);
    o.stop(now + 0.5);

    /* Two short ticks. */
    [0.15, 0.23].forEach((dt, i) => {
      const t = now + dt;
      const o2 = c.createOscillator();
      const g2 = c.createGain();
      o2.type = "sine";
      o2.frequency.value = 620 - i * 60;
      g2.gain.setValueAtTime(0.0001, t);
      g2.gain.exponentialRampToValueAtTime(0.045, t + 0.005);
      g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o2.connect(g2).connect(c.destination);
      o2.start(t);
      o2.stop(t + 0.2);
    });

    /* A small noise burst on the source — the splash of pour
       breaking the surface. */
    const dur = 0.05;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const ns = c.createBufferSource();
    ns.buffer = buf;
    const ng = c.createGain();
    ng.gain.value = 0.03;
    const nf = c.createBiquadFilter();
    nf.type = "bandpass";
    nf.frequency.value = 700;
    nf.Q.value = 0.7;
    ns.connect(nf).connect(ng).connect(c.destination);
    ns.start(now);
    ns.stop(now + dur);
  }
  /* Settle — unchanged from p001. */
  function settle() {
    const c = ensure(); if (!c) return;
    const now = c.currentTime;
    [220.0, 277.18, 329.63].forEach((f, i) => {
      const t = now + i * 0.42;
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.045, t + 0.08);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
      o.connect(g).connect(c.destination);
      o.start(t);
      o.stop(t + 2.0);
    });
  }
  return { pour, settle };
}

/* ── module state ────────────────────────────────────────────────── */
let _root = null;
let _state = null;
let _solved = false;
let _animating = false;
let _audio = null;
let _wells = [];     /* { gEl, lift, inkFillEl, markerEl, idx } */
let _armed = -1;
let _illustrationEl = null;
let _pageEl = null;

/* ── DOM construction ────────────────────────────────────────────── */

function build() {
  _pageEl = _root;
  _pageEl.classList.remove("is-solved");

  /* header */
  const header = document.createElement("header");
  header.className = "page-header";
  const numeral = document.createElement("span");
  numeral.className = "page-numeral";
  numeral.textContent = "II.";
  header.appendChild(numeral);
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = "The Three Inkwells";
  header.appendChild(h1);
  _root.appendChild(header);

  /* plate grid */
  const plate = document.createElement("div");
  plate.className = "plate";

  const fig = document.createElement("figure");
  fig.className = "illustration";
  fig.setAttribute("aria-label", "A diagram of three inkwells of differing ink levels.");
  _illustrationEl = fig;

  const svg = el("svg", {
    viewBox: `0 0 ${VB_W} ${VB_H}`,
    xmlns: SVG_NS,
    role: "img",
  });
  fig.appendChild(svg);

  buildDefs(svg);
  buildDeskLine(svg);
  buildInkwells(svg);

  const caption = document.createElement("figcaption");
  caption.className = "figure-caption";
  caption.textContent = "Fig. II.  Three inkwells of a Mr. Calderón. Reach four, two, three.";
  fig.appendChild(caption);

  plate.appendChild(fig);

  /* marginalia (in flow inside the right column) */
  const aside = document.createElement("aside");
  aside.className = "marginalia";
  aside.innerHTML = `
    <p class="hm-note">
      Ink is patient. The well
      doesn't care which well
      you call it — only which
      one is asked to give.
      The pattern of giving
      is what stays.
      <span class="hm-sig">— H. M.</span>
    </p>
    <p class="hm-note hm-note--solved hm-note--solo" aria-hidden="true">
      Held.
    </p>
  `;
  plate.appendChild(aside);

  _root.appendChild(plate);
}

/* clipPaths for each well — same path as outline. */
function buildDefs(svg) {
  const defs = el("defs", {}, svg);
  for (let i = 0; i < N; i++) {
    const seed = 31 + i * 127;
    const d = inkwellPath(seed);
    const cp = el("clipPath", { id: `ink-clip-${i}` }, defs);
    el("path", { d }, cp);
    /* Cache the outline path string on the well later. */
    _wells[i] = { _path: d, _fillPath: inkFillPath(seed), _seed: seed };
  }
}

/* A single hand-wavy ink line beneath the wells — the "desk."
   Diagrammatic, like the tideline in p001. */
function buildDeskLine(svg) {
  const y = WELL_BOTTOM_Y + 4;
  el("path", {
    d:
      `M 32 ${y} ` +
      `C 130 ${y - 1.0}, 220 ${y + 0.8}, 300 ${y - 0.6} ` +
      `S 420 ${y + 1.4}, ${VB_W - 32} ${y - 0.8}`,
    stroke: "var(--ink)",
    "stroke-width": 0.9,
    "stroke-linecap": "round",
    "stroke-dasharray": "3.4 4.8",
    fill: "none",
    opacity: 0.42,
  }, svg);
}

function buildInkwells(svg) {
  for (let i = 0; i < N; i++) {
    const cached = _wells[i];
    const wellSeed = cached._seed;
    const outlinePath = cached._path;
    const fillPath = cached._fillPath;
    const cx = WELL_CENTERS_X[i];

    /* Outer group: positioned via SVG `transform` attribute. */
    const g = el("g", {
      class: "inkwell",
      "data-idx": i,
      transform: `translate(${cx} ${WELL_TOP_Y})`,
    }, svg);

    /* Inner lift group: CSS transform handles hover lift. */
    const lift = el("g", { class: "inkwell-lift" }, g);

    /* Ink fill — clipped to well outline; transform-translateY sets
       the level. The clip and the translate MUST be on different
       elements: if they share, the clip region travels with the
       transform and the fill escapes the well. */
    const clipWrapper = el("g", {
      "clip-path": `url(#ink-clip-${i})`,
    }, lift);
    const fillG = el("g", {
      class: "ink-fill",
      transform: `translate(0 ${inkTopY(_state[i])})`,
    }, clipWrapper);
    el("path", {
      d: fillPath,
      fill: "var(--ink)",
    }, fillG);

    /* The well outline. Drawn after fill so it sits on top. */
    el("path", {
      class: "well-outline",
      d: outlinePath,
      fill: "none",
      stroke: "var(--ink)",
      "stroke-width": 1.5,
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
    }, lift);

    /* Target marker: a faint dashed horizontal line across the well
       interior at the goal level. Drawn in --tide — the same
       horizon-blue that marks the Tide's water line in p001. Here it
       reads as "the line ink should rise to." */
    const targetY = inkTopY(GOAL[i]);
    el("line", {
      class: "well-target",
      x1: -(W_BODY + 4),
      y1: targetY,
      x2:  (W_BODY + 4),
      y2: targetY,
      stroke: "var(--tide)",
      "stroke-width": 0.9,
      "stroke-linecap": "round",
      "stroke-dasharray": "2.6 3.4",
      opacity: 0.68,
    }, lift);

    /* Unit tick marks on the right OUTSIDE the well — graduated
       like a measuring vessel. Always visible, never obscured by
       ink. */
    const ticksG = el("g", { class: "well-ticks" }, lift);
    const TICK_X = W_BODY + 4;
    const TICK_LEN = 4;
    /* Show 7 ticks (capacity-ish). The state never exceeds 7 in
       reachable play given conservation rules and the starting sum. */
    for (let k = 1; k <= 7; k++) {
      const ty = inkTopY(k);
      el("line", {
        x1: TICK_X,
        y1: ty,
        x2: TICK_X + TICK_LEN,
        y2: ty,
        stroke: "var(--ink)",
        "stroke-width": 0.7,
        "stroke-linecap": "round",
        opacity: 0.40,
      }, ticksG);
    }

    /* Hover annotation, placed just above the lip. Empty by default;
       text content is set during arm(). */
    const markerEl = el("text", {
      class: "well-marker",
      x: 0,
      y: -10,
      "text-anchor": "middle",
      "font-family": "Spectral, Georgia, serif",
      "font-style": "italic",
      "font-size": "14",
      "font-weight": "400",
      fill: "var(--ink-soft)",
    }, lift);
    markerEl.textContent = "";

    /* Numeral below the well, in the figure's SVG coords (NOT in the
       lift group — it stays put when the well lifts on hover). */
    el("text", {
      class: "inkwell-numeral",
      x: cx,
      y: WELL_BOTTOM_Y + 24,
      "text-anchor": "middle",
      "font-family": "Spectral, Georgia, serif",
      "font-style": "italic",
      "font-size": "12",
      "font-weight": "400",
      fill: "var(--ink-faded)",
    }, svg).textContent = String(i + 1);

    /* Hit region: a rect covering the well group. Slightly larger
       than the well so the player doesn't need to thread the needle. */
    const zone = el("rect", {
      class: "inkwell-zone",
      x: -(W_BODY + 10),
      y: -16,
      width: (W_BODY + 10) * 2,
      height: WELL_HEIGHT + 24,
      "data-idx": i,
    }, lift);
    zone.addEventListener("pointerenter", () => arm(i));
    zone.addEventListener("pointermove",  () => arm(i));
    zone.addEventListener("pointerleave", () => {
      requestAnimationFrame(() => { if (_armed === i) arm(-1); });
    });
    zone.addEventListener("click", () => commit(i));

    Object.assign(cached, {
      gEl: g,
      lift,
      fillG,
      markerEl,
      cx,
      idx: i,
    });
  }
}

/* ── interaction ─────────────────────────────────────────────────── */

function arm(idx) {
  if (_solved || _animating) {
    if (idx !== -1) return;
  }
  /* Invalid — well has fewer than 2 ink units, can't give. */
  if (idx !== -1 && _state[idx] < 2) {
    /* Silently disarm. */
    if (_armed !== -1) {
      clearArm();
      _illustrationEl.classList.remove("is-armed");
      _armed = -1;
    }
    return;
  }
  if (idx === _armed) return;
  clearArm();
  _armed = idx;
  if (idx === -1) {
    _illustrationEl.classList.remove("is-armed");
    return;
  }
  _illustrationEl.classList.add("is-armed");
  _wells[idx].gEl.classList.add("is-armed", "is-giver");
  _wells[idx].markerEl.textContent = "\u22122";   /* "−2" (true minus) */
  for (let j = 0; j < N; j++) {
    if (j === idx) continue;
    _wells[j].gEl.classList.add("is-armed");
    _wells[j].markerEl.textContent = "+1";
  }
}

function clearArm() {
  for (const w of _wells) {
    w.gEl.classList.remove("is-armed", "is-giver");
    w.markerEl.textContent = "";
  }
}

function commit(idx) {
  if (_solved || _animating) return;
  if (_state[idx] < 2) return;
  pour(idx);
}

function pour(idx) {
  _animating = true;
  _audio.pour();
  /* Hide the hover annotation immediately — we're committing it. */
  _wells[idx].markerEl.textContent = "";
  for (let j = 0; j < N; j++) {
    if (j !== idx) _wells[j].markerEl.textContent = "";
  }
  _illustrationEl.classList.remove("is-armed");
  for (const w of _wells) {
    w.gEl.classList.remove("is-armed", "is-giver");
  }
  _armed = -1;

  /* Update state and animate fill heights. The CSS transition on
     `transform` carries the visual. */
  _state[idx] -= 2;
  for (let j = 0; j < N; j++) {
    if (j !== idx) _state[j] += 1;
    _wells[j].fillG.setAttribute("transform", `translate(0 ${inkTopY(_state[j])})`);
  }

  /* Animation completes; re-allow interaction. */
  setTimeout(() => {
    _animating = false;
    if (puzzle.isSolved()) onSolved();
  }, 760);
}

function onSolved() {
  _solved = true;
  arm(-1);
  setTimeout(() => {
    _pageEl.classList.add("is-solved");
    _audio.settle();
  }, 360);
}

/* ── public interface ────────────────────────────────────────────── */

export const puzzle = {
  id: "p002-the-three-inkwells",
  title: "The Three Inkwells",

  init(root) {
    _root = root;
    _state = INITIAL.slice();
    _solved = false;
    _animating = false;
    _armed = -1;
    _wells = [];
    _audio = makeAudio();
    build();
  },

  isSolved() {
    if (!_state) return false;
    for (let i = 0; i < N; i++) if (_state[i] !== GOAL[i]) return false;
    return true;
  },

  cleanup() {
    _root = null;
    _state = null;
    _wells = [];
    _armed = -1;
    _solved = false;
    _animating = false;
    _audio = null;
    _illustrationEl = null;
    _pageEl = null;
  },
};
