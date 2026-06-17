<p align="center">
  <a href="https://luxbase.github.io/qualis-slider/">
    <img src="https://img.shields.io/badge/demo-live-1D9E75?style=flat-square" alt="Demo">
  </a>
  <img src="https://img.shields.io/github/size/luxbase/qualis-slider/dist/widget.js?style=flat-square&label=size&color=1D9E75" alt="Size">
  <img src="https://img.shields.io/badge/dependencies-none-1D9E75?style=flat-square" alt="Dependencies">
  <img src="https://img.shields.io/npm/l/qualis-slider?style=flat-square&color=1D9E75" alt="License">
  <img src="https://img.shields.io/badge/built%20with-vanilla%20js-F7DF1E?style=flat-square&logo=javascript&labelColor=1D9E75" alt="Vanilla JS">
</p>

<h1 align="center">Qualis Slider</h1>

<p align="center">
  A lightweight, dependency-free **before & after** image comparison widget built for real estate portals. <br>
  ~4 KB gzipped · Zero dependencies · Drop-in via two lines of HTML.
</p>

<p align="center">
  <a href="https://luxbase.github.io/qualis-slider/"><strong>Live demo →</strong></a>
</p>

---

## Installation

Add the script once in your `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

Then place the comparison widget anywhere on your page:

```html
<div class="qualis-slider" data-before="original.jpg" data-after="staging.jpg"></div>
```

The widget auto-initializes on DOMContentLoaded. No JavaScript setup required.

---

## Display modes

### Slider (default)

Drag the divider handle to reveal the staged photo interactively.

```html
<div class="qualis-slider"
  data-before="original.jpg"
  data-after="staging.jpg"
  data-label-before="Original"
  data-label-after="Staging"
  data-color="#1D9E75"
  data-icon="arrows">
</div>
```

### Fade / Dissolve

A smooth crossfade slider between both images.

```html
<div class="qualis-slider"
  data-mode="fade"
  data-before="original.jpg"
  data-after="staging.jpg"
  data-color="#378ADD">
</div>
```

### Toggle

Click or tap to instantly swap between the two images.

```html
<div class="qualis-slider"
  data-mode="toggle"
  data-before="original.jpg"
  data-after="staging.jpg"
  data-color="#D85A30"
  data-icon="eye">
</div>
```

---

## Options

| Attribute | Default | Description |
|---|---|---|
| `data-before` | — | URL of the original photo **(required)** |
| `data-after` | — | URL of the staged photo **(required)** |
| `data-mode` | `slider` | `slider` · `fade` · `toggle` |
| `data-label-before` | `Original` | Left label text |
| `data-label-after` | `Staging` | Right label text |
| `data-color` | `#ffffff` | Handle, divider bar, and control accent color |
| `data-icon` | `arrows` | `arrows` · `drag` · `eye` · `none` |
| `data-ratio` | `0.6` | Aspect ratio (e.g. `0.75` for 4:3) |
| `data-height` | — | Fixed CSS height (e.g. `400px`). Overrides `data-ratio` |

### Suggested color palette

| Color | Hex |
|---|---|
| Qualis Green | `#1D9E75` |
| Blue | `#378ADD` |
| Coral | `#D85A30` |
| Amber | `#BA7517` |
| Violet | `#7F77DD` |
| White | `#ffffff` |

---

## Multiple sliders on one page

Every element with the `.qualis-slider` class is auto-initialized. There is no instance limit:

```html
<div class="qualis-slider" data-before="living-original.jpg" data-after="living-staging.jpg"></div>
<div class="qualis-slider" data-mode="fade" data-before="kitchen-original.jpg" data-after="kitchen-staging.jpg"></div>
```

---

## Versioning (jsDelivr)

Pin a specific version for production environments:

```html
<!-- Specific version (recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@1.0.0/dist/widget.js"></script>

<!-- Latest available version -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

---

## Credits & license

Each widget includes a `qualis.studio` badge in the bottom-right corner. We appreciate keeping it visible — it's the only mechanism that keeps this widget free and sustainable.

Built by [Qualis Studio](https://qualis.studio) — Asunción, Paraguay. MIT License.
