<p align="center">
  <a href="https://luxbase.github.io/qualis-slider/">
    <img src="https://img.shields.io/badge/demo-live-1D9E75?style=flat-square" alt="Demo">
  </a>
  <img src="https://img.badges.size.io/github/raw/luxbase/qualis-slider/main/dist/widget.js?style=flat-square&label=size&color=1D9E75" alt="Size">
  <img src="https://img.shields.io/badge/dependencies-none-1D9E75?style=flat-square" alt="Dependencies">
  <img src="https://img.shields.io/npm/l/qualis-slider?style=flat-square&color=1D9E75" alt="License">
</p>

# qualis-slider

Widget de comparación visual **Original vs. Staging** para portales inmobiliarios. Sin dependencias, ~4 KB embebido, funciona en cualquier sitio con dos líneas de HTML.

**[Ver demo →](https://luxbase.github.io/qualis-slider/)**

---

## Instalación

Agregá el script una vez en el `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

Luego colocá el comparador donde lo necesites:

```html
<div class="qualis-slider" data-before="original.jpg" data-after="staging.jpg"></div>
```

El widget se inicializa automáticamente al cargar la página.

---

## Modos de visualización

### Slider (default)

Arrastrá la barra divisoria para revelar la foto con staging.

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

Control deslizante para transicionar entre ambas fotos.

```html
<div class="qualis-slider"
  data-mode="fade"
  data-before="original.jpg"
  data-after="staging.jpg"
  data-color="#378ADD">
</div>
```

### Toggle

Click o tap para alternar entre las dos imágenes al instante.

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

## Opciones

| Atributo | Default | Descripción |
|---|---|---|
| `data-before` | — | URL de la foto original **(requerido)** |
| `data-after` | — | URL de la foto con staging **(requerido)** |
| `data-mode` | `slider` | `slider` · `fade` · `toggle` |
| `data-label-before` | `Original` | Texto del label izquierdo |
| `data-label-after` | `Staging` | Texto del label derecho |
| `data-color` | `#ffffff` | Color de barra, handle y controles |
| `data-icon` | `arrows` | `arrows` · `drag` · `eye` · `none` |
| `data-ratio` | `0.6` | Relación de aspecto (ej: `0.75` para 4:3) |
| `data-height` | — | Alto fijo en CSS (ej: `400px`). Reemplaza `data-ratio` |

### Paleta de colores sugerida

| Color | Hex |
|---|---|
| Verde Qualis | `#1D9E75` |
| Azul | `#378ADD` |
| Coral | `#D85A30` |
| Ámbar | `#BA7517` |
| Violeta | `#7F77DD` |
| Blanco | `#ffffff` |

---

## Múltiples sliders en una misma página

El widget inicializa automáticamente todos los elementos con clase `.qualis-slider`. No hay límite de instancias:

```html
<div class="qualis-slider" data-before="sala-original.jpg" data-after="sala-staging.jpg"></div>
<div class="qualis-slider" data-mode="fade" data-before="cocina-original.jpg" data-after="cocina-staging.jpg"></div>
```

---

## Versiones (jsDelivr)

Para entornos productivos, se recomienda fijar una versión específica:

```html
<!-- Versión específica (recomendado) -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@1.0.0/dist/widget.js"></script>

<!-- Última versión disponible -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

---

## Créditos y licencia

Cada widget incluye un badge `qualis.studio` en la esquina inferior derecha. Agradecemos mantenerlo visible — es el único mecanismo que mantiene este widget gratuito y sostenible.

Desarrollado por [Qualis Studio](https://qualis.studio) — Asunción, Paraguay. Licencia MIT.
