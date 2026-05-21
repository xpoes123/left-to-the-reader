/* ─────────────────────────────────────────────────────────────────────
   puzzles/p001-the-tide.js — v2: ink diagram

   Same puzzle. Same math. Same module interface. The visual was rebuilt
   from "hand-drawn pebble illustration" to "figure plate in a
   mathematician's notebook." The page metaphor and the marginalia voice
   carry the warmth; the figure itself is cold ink on bone paper.

   Module interface (load-bearing for the other 21 puzzles):
     puzzle.id, puzzle.title, puzzle.init(el), puzzle.isSolved(),
     puzzle.cleanup()

   Conventions worth keeping verbatim in future puzzles:
     · DOM built with element APIs (no innerHTML) so listeners stick.
     · Module state lives on module locals — `_state`, `_pebbles`, etc.
     · The settle gesture is triggered by toggling a single CSS class
       on `.page`.
     · Marginalia is always in <aside.marginalia>, always in flow.
   ──────────────────────────────────────────────────────────────────── */

const STATE_DRY = 0;
const STATE_WET = 1;

/* Starting position. Brief's intent: "5 dry, 2 wet — solvable because
   parity is even." Two wets at indices 1 and 5; minimum 4 moves. */
const INITIAL = [STATE_DRY, STATE_WET, STATE_DRY, STATE_DRY, STATE_DRY, STATE_WET, STATE_DRY];
const N = INITIAL.length;

/* Diagram geometry. */
const VB_W = 580;
const VB_H = 220;
const ROW_Y = 110;
const PEBBLE_DX = 76;
const PEBBLE_X0 = (VB_W - PEBBLE_DX * (N - 1)) / 2;

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

/* Procedurally jittered organic blob. The wavering line quality
   comes from these jittered points — not from any SVG filter. */
function pebbleOutline(seed, baseW, baseH) {
  const rng = mulberry32(seed);
  const w = baseW * (0.92 + rng() * 0.18);
  const h = baseH * (0.86 + rng() * 0.26);
  const tilt = (rng() - 0.5) * 0.30;
  const n = 16;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const jr = 0.84 + rng() * 0.28;
    const x = Math.cos(a) * (w / 2) * jr;
    const y = Math.sin(a) * (h / 2) * jr;
    const xr = x * Math.cos(tilt) - y * Math.sin(tilt);
    const yr = x * Math.sin(tilt) + y * Math.cos(tilt);
    pts.push([xr, yr]);
  }
  return { points: pts, w, h };
}

/* Catmull-Rom -> cubic Bézier, closed loop. */
function pathFromPoints(pts) {
  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d +=
      ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}` +
      ` ${c2x.toFixed(2)} ${c2y.toFixed(2)}` +
      ` ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return d + " Z";
}

/* Convert a Roman-numeral index 1..7 to a small lowercase italic
   numeral string. Kept as Arabic numerals — academic figure plates
   number their elements 1, 2, 3, not i, ii, iii. */
function indexLabel(i) {
  return String(i + 1);
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

/* ── audio: plip + settle (unchanged from v1, this is right) ────── */
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
  function plip(targetWet) {
    const c = ensure(); if (!c) return;
    const now = c.currentTime;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "sine";
    const f0 = targetWet ? 360 : 520;
    const f1 = targetWet ? 200 : 380;
    o.frequency.setValueAtTime(f0, now);
    o.frequency.exponentialRampToValueAtTime(f1, now + (targetWet ? 0.22 : 0.14));
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(targetWet ? 0.10 : 0.08, now + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, now + (targetWet ? 0.34 : 0.22));
    o.connect(g).connect(c.destination);
    o.start(now);
    o.stop(now + 0.40);

    const dur = 0.04;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const ns = c.createBufferSource();
    ns.buffer = buf;
    const ng = c.createGain();
    ng.gain.value = targetWet ? 0.04 : 0.025;
    const nf = c.createBiquadFilter();
    nf.type = "bandpass";
    nf.frequency.value = targetWet ? 900 : 2200;
    nf.Q.value = 0.6;
    ns.connect(nf).connect(ng).connect(c.destination);
    ns.start(now);
    ns.stop(now + dur);
  }
  function settle() {
    const c = ensure(); if (!c) return;
    const now = c.currentTime;
    const notes = [220.0, 277.18, 329.63];
    notes.forEach((f, i) => {
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
  return { plip, settle };
}

/* ── module state ────────────────────────────────────────────────── */
let _root = null;
let _state = null;
let _solved = false;
let _audio = null;
let _pebbles = [];     /* { gEl, lift, x, y, w, h }                  */
let _brackets = [];    /* pair underbrace marks                       */
let _zones = [];
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
  numeral.textContent = "I.";
  header.appendChild(numeral);
  const h1 = document.createElement("h1");
  h1.className = "page-title";
  h1.textContent = "The Tide";
  header.appendChild(h1);
  _root.appendChild(header);

  /* plate grid: illustration on the left, marginalia in the right
     column. Marginalia is in normal flow now — no overlap possible. */
  const plate = document.createElement("div");
  plate.className = "plate";

  const fig = document.createElement("figure");
  fig.className = "illustration";
  fig.setAttribute("aria-label", "A diagram of seven stones along a tideline.");
  _illustrationEl = fig;

  const svg = el("svg", {
    viewBox: `0 0 ${VB_W} ${VB_H}`,
    xmlns: SVG_NS,
    role: "img",
  });
  fig.appendChild(svg);

  buildTideline(svg);
  buildPebbles(svg);
  buildPairZones(svg);

  const caption = document.createElement("figcaption");
  caption.className = "figure-caption";
  caption.textContent = "Fig. I.  Seven stones at the tide. Bring them all dry.";
  fig.appendChild(caption);

  plate.appendChild(fig);

  /* marginalia (in flow inside the right column) */
  const aside = document.createElement("aside");
  aside.className = "marginalia";
  aside.innerHTML = `
    <p class="hm-note">
      Some changes are reversible.
      Some are only nearly so.
      Look at what cannot vary,
      and the rest will tell itself.
      <span class="hm-sig">— H. M.</span>
    </p>
    <p class="hm-note hm-note--solved" aria-hidden="true">
      <span class="crossed">I never could.</span><br>
      Good.
    </p>
  `;
  plate.appendChild(aside);

  _root.appendChild(plate);
}

/* The tideline: a single hand-wavy DASHED line through the row.
   Dashes are short; no secondary marks; deliberately diagrammatic. */
function buildTideline(svg) {
  const y = ROW_Y + 4;
  /* The path is mostly flat — a small wave gives it the not-quite-ruled
     feel of a line drawn by hand against an unknown horizon. */
  const d =
    `M 30 ${y} ` +
    `C 140 ${y - 1.4}, 220 ${y + 1.2}, 290 ${y - 0.6} ` +
    `S 460 ${y + 1.6}, ${VB_W - 30} ${y - 1.0}`;
  el("path", {
    d,
    stroke: "var(--tide)",
    "stroke-width": 0.9,
    "stroke-linecap": "round",
    "stroke-dasharray": "3.4 4.8",
    fill: "none",
    opacity: 0.7,
  }, svg);
}

/* Build the seven pebbles. Each is just two paths: a stroked outline
   (always visible) and a solid fill (opacity-toggled for wet/dry).
   A small italic numeral sits beneath each, then comes the
   pair-bracket layer (drawn on top so it sits beneath the pebbles
   visually but receives no clicks). */
function buildPebbles(svg) {
  _pebbles = [];
  _brackets = [];

  /* Pebble group, drawn first so other layers can sit on top. */
  const pebbleLayer = el("g", { class: "pebbles" }, svg);
  for (let i = 0; i < N; i++) {
    const seed = 17 + i * 113;
    const outline = pebbleOutline(seed, 56, 36);

    const cx = PEBBLE_X0 + i * PEBBLE_DX;
    /* A pinch of vertical scatter — diagrams drawn by hand are never
       perfectly ruled. */
    const cy = ROW_Y + ((seed * 0.13) % 1 - 0.5) * 3.6;

    const g = el("g", {
      class: "pebble",
      "data-idx": i,
      "data-state": _state[i] === STATE_WET ? "wet" : "dry",
    }, pebbleLayer);

    /* Placement on outer anchor; lift on inner CSS-transformed group. */
    const anchor = el("g", { transform: `translate(${cx} ${cy})` }, g);
    const lift = el("g", { class: "pebble-lift" }, anchor);

    const d = pathFromPoints(outline.points);

    /* The outline. Always visible. Ink stroke, no fill. */
    el("path", {
      class: "pebble-outline",
      d,
      fill: "none",
      stroke: "var(--ink)",
      "stroke-width": 1.5,
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
    }, lift);

    /* The wet fill. Opacity-crossfaded by data-state. */
    el("path", {
      class: "pebble-fill",
      d,
      fill: "var(--ink)",
      stroke: "var(--ink)",
      "stroke-width": 1.5,
      "stroke-linejoin": "round",
    }, lift);

    /* Numeric label, sitting just below the pebble. */
    el("text", {
      class: "pebble-label",
      x: cx,
      y: cy + outline.h / 2 + 22,
      "text-anchor": "middle",
      "font-family": "Spectral, Georgia, serif",
      "font-style": "italic",
      "font-size": "12",
      "font-weight": "400",
      fill: "var(--ink-faded)",
    }, svg).textContent = indexLabel(i);

    _pebbles.push({ gEl: g, lift, cx, cy, w: outline.w, h: outline.h });
  }

  /* Pair brackets — one between each adjacent pair. Light arcs.
     Hidden by default; armed pair fades in. */
  const bracketLayer = el("g", { class: "brackets" }, svg);
  for (let i = 0; i < N - 1; i++) {
    const a = _pebbles[i];
    const b = _pebbles[i + 1];
    const midX = (a.cx + b.cx) / 2;
    const yTop = Math.max(a.cy + a.h / 2, b.cy + b.h / 2) + 8;
    /* Two thin tick-marks down from each pebble base toward the line,
       plus a short horizontal joining them. A simple bracket glyph:
        |       |
        └───────┘
       Drawn very lightly. */
    const x0 = a.cx + a.w * 0.22;
    const x1 = b.cx - b.w * 0.22;
    const yMid = yTop + 6;
    const bracket = el("g", {
      class: "pair-bracket",
      "data-pair": i,
    }, bracketLayer);
    el("path", {
      d:
        `M ${x0.toFixed(2)} ${yTop.toFixed(2)} L ${x0.toFixed(2)} ${yMid.toFixed(2)} ` +
        `L ${x1.toFixed(2)} ${yMid.toFixed(2)} L ${x1.toFixed(2)} ${yTop.toFixed(2)}`,
      fill: "none",
      stroke: "var(--ink)",
      "stroke-width": 1.1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    }, bracket);
    _brackets.push(bracket);
  }
}

/* Pair-zone hit regions, on top of everything. */
function buildPairZones(svg) {
  _zones = [];
  const zoneLayer = el("g", { class: "zones" }, svg);
  for (let i = 0; i < N - 1; i++) {
    const left = _pebbles[i];
    const right = _pebbles[i + 1];
    const x0 = i === 0 ? 0 : left.cx;
    const x1 = i === N - 2 ? VB_W : right.cx;

    const r = el("rect", {
      class: "pair-zone",
      x: x0,
      y: ROW_Y - 50,
      width: x1 - x0,
      height: 120,
      "data-pair": i,
    }, zoneLayer);

    r.addEventListener("pointerenter", () => arm(i));
    r.addEventListener("pointermove",  () => arm(i));
    r.addEventListener("pointerleave", () => {
      requestAnimationFrame(() => { if (_armed === i) arm(-1); });
    });
    r.addEventListener("click", () => commit(i));

    _zones.push(r);
  }
}

/* ── interaction ─────────────────────────────────────────────────── */

function arm(pairIdx) {
  if (_solved) return;
  if (_armed === pairIdx) return;
  if (_armed !== -1) {
    _pebbles[_armed].gEl.classList.remove("is-armed");
    _pebbles[_armed + 1].gEl.classList.remove("is-armed");
    _brackets[_armed].classList.remove("is-armed");
  }
  _armed = pairIdx;
  if (pairIdx === -1) {
    _illustrationEl.classList.remove("is-armed");
    return;
  }
  _illustrationEl.classList.add("is-armed");
  _pebbles[pairIdx].gEl.classList.add("is-armed");
  _pebbles[pairIdx + 1].gEl.classList.add("is-armed");
  _brackets[pairIdx].classList.add("is-armed");
}

function commit(pairIdx) {
  if (_solved) return;
  flipPair(pairIdx);
  if (puzzle.isSolved()) onSolved();
}

function flipPair(i) {
  const a = i, b = i + 1;
  _state[a] = _state[a] === STATE_DRY ? STATE_WET : STATE_DRY;
  _state[b] = _state[b] === STATE_DRY ? STATE_WET : STATE_DRY;
  _pebbles[a].gEl.setAttribute("data-state", _state[a] === STATE_WET ? "wet" : "dry");
  _pebbles[b].gEl.setAttribute("data-state", _state[b] === STATE_WET ? "wet" : "dry");

  const goingWet = (_state[a] === STATE_WET) || (_state[b] === STATE_WET);
  _audio.plip(goingWet);
}

function onSolved() {
  _solved = true;
  _illustrationEl.classList.add("is-locked");
  arm(-1);
  setTimeout(() => {
    _pageEl.classList.add("is-solved");
    _audio.settle();
  }, 360);
}

/* ── public interface ────────────────────────────────────────────── */

export const puzzle = {
  id: "p001-the-tide",
  title: "The Tide",

  init(root) {
    _root = root;
    _state = INITIAL.slice();
    _solved = false;
    _armed = -1;
    _audio = makeAudio();
    build();
  },

  isSolved() {
    return _state.every((s) => s === STATE_DRY);
  },

  cleanup() {
    _root = null;
    _state = null;
    _pebbles = [];
    _brackets = [];
    _zones = [];
    _armed = -1;
    _solved = false;
    _audio = null;
    _illustrationEl = null;
    _pageEl = null;
  },
};
