# qualis-slider

Widget de comparación **Antes / Después** para portales inmobiliarios. Desarrollado por [Qualis Studio](https://qualis.studio).

Sin dependencias. ~4 KB. Funciona en cualquier HTML con dos líneas.

---

## Instalación

Pegá el script una vez en el `<head>` de tu página:

```html
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

Luego usá el div donde necesites el comparador:

```html
<div class="qualis-slider"
  data-before="URL_FOTO_ORIGINAL.jpg"
  data-after="URL_FOTO_STAGING.jpg">
</div>
```

Listo.

---

## Modos

### Slider vertical (default)

Arrastrá la barra para revelar la foto de staging.

```html
<div class="qualis-slider"
  data-before="antes.jpg"
  data-after="despues.jpg"
  data-label-before="Original"
  data-label-after="Staging"
  data-color="#1D9E75"
  data-icon="arrows">
</div>
```

### Fade / dissolve

Deslizá el control para hacer crossfade entre las dos fotos.

```html
<div class="qualis-slider"
  data-mode="fade"
  data-before="antes.jpg"
  data-after="despues.jpg"
  data-color="#378ADD">
</div>
```

### Click toggle

Click / tap para alternar entre las dos fotos.

```html
<div class="qualis-slider"
  data-mode="toggle"
  data-before="antes.jpg"
  data-after="despues.jpg"
  data-color="#D85A30"
  data-icon="eye">
</div>
```

---

## Opciones

| Atributo | Default | Descripción |
|---|---|---|
| `data-before` | — | URL de la foto original (requerido) |
| `data-after` | — | URL de la foto con staging (requerido) |
| `data-mode` | `slider` | `slider` · `fade` · `toggle` |
| `data-label-before` | `Original` | Texto del label izquierdo / antes |
| `data-label-after` | `Staging` | Texto del label derecho / después |
| `data-color` | `#ffffff` | Color de la barra, handle y controles |
| `data-icon` | `arrows` | `arrows` · `drag` · `eye` · `none` |
| `data-ratio` | `0.6` | Relación alto/ancho (ej: `0.75` para 4:3) |
| `data-height` | — | Alto fijo en CSS (ej: `400px`). Reemplaza `data-ratio` |

### Colores sugeridos

| Color | Hex |
|---|---|
| Verde Qualis | `#1D9E75` |
| Azul | `#378ADD` |
| Coral | `#D85A30` |
| Ámbar | `#BA7517` |
| Violeta | `#7F77DD` |
| Blanco | `#ffffff` |

---

## Múltiples sliders en la misma página

El widget inicializa automáticamente todos los `.qualis-slider` del DOM. Podés tener tantos como necesites:

```html
<div class="qualis-slider" data-before="sala-antes.jpg" data-after="sala-despues.jpg"></div>
<div class="qualis-slider" data-mode="fade" data-before="cocina-antes.jpg" data-after="cocina-despues.jpg"></div>
```

---

## Versioning via jsDelivr

Para pinear una versión específica en producción:

```html
<!-- versión específica -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@1.0.0/dist/widget.js"></script>

<!-- siempre la última -->
<script src="https://cdn.jsdelivr.net/gh/luxbase/qualis-slider@latest/dist/widget.js"></script>
```

---

## Demo

[qualis-slider demo →](https://luxbase.github.io/qualis-slider/)

---

## Créditos

Cada widget incluye un pequeño badge `qualis.studio` en la esquina inferior derecha. Apreciamos que lo mantengas — es la única forma en que este widget es gratuito y sostenible.

---

Hecho con ♥ por [Qualis Studio](https://qualis.studio) — Asunción, Paraguay.