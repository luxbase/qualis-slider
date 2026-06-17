(function () {
  'use strict';

  var BADGE_TEXT = 'qualis.studio';
  var BADGE_URL  = 'https://qualis.studio';

  var ICONS = {
    arrows: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10H14M6 10L3 7M6 10L3 13M14 10L17 7M14 10L17 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    drag:   '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="6" r="1.2" fill="currentColor"/><circle cx="13" cy="6" r="1.2" fill="currentColor"/><circle cx="7" cy="10" r="1.2" fill="currentColor"/><circle cx="13" cy="10" r="1.2" fill="currentColor"/><circle cx="7" cy="14" r="1.2" fill="currentColor"/><circle cx="13" cy="14" r="1.2" fill="currentColor"/></svg>',
    eye:    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="10" cy="10" rx="7" ry="4.5" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="10" r="2" fill="currentColor"/></svg>',
    none:   ''
  };

  var CSS = [
    '.qs-wrap{position:relative;width:100%;overflow:hidden;background:#111;user-select:none;}',
    '.qs-wrap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;}',
    '.qs-label{position:absolute;top:12px;background:rgba(0,0,0,.5);color:#fff;font-size:12px;font-family:sans-serif;padding:3px 8px;border-radius:4px;pointer-events:none;z-index:4;}',
    '.qs-label-before{left:12px;}',
    '.qs-label-after{right:12px;}',
    '.qs-badge{position:absolute;bottom:8px;right:10px;font-size:10px;color:rgba(255,255,255,.7);text-decoration:none;font-family:sans-serif;letter-spacing:.03em;z-index:10;}',
    '.qs-bar{position:absolute;top:0;bottom:0;width:3px;transform:translateX(-50%);cursor:col-resize;z-index:5;}',
    '.qs-handle{position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.25);}',
    '.qs-clip{position:absolute;inset:0;overflow:hidden;z-index:2;}',
    '.qs-fade-ctrl{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;background:rgba(0,0,0,.45);border-radius:999px;padding:6px 14px;z-index:5;}',
    '.qs-fade-ctrl span{font-size:12px;color:#fff;font-weight:500;font-family:sans-serif;}',
    '.qs-toggle-btn{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-size:13px;font-weight:500;font-family:sans-serif;padding:6px 18px;border-radius:999px;display:flex;align-items:center;gap:6px;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.2);cursor:pointer;z-index:5;}',
  ].join('');

  function injectStyles() {
    if (document.getElementById('qs-styles')) return;
    var s = document.createElement('style');
    s.id = 'qs-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function cfg(el, key, fallback) {
    return el.dataset[key] !== undefined ? el.dataset[key] : fallback;
  }

  function makeBadge() {
    var a = document.createElement('a');
    a.className = 'qs-badge';
    a.href = BADGE_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = BADGE_TEXT;
    return a;
  }

  function makeWrap(el, ratio) {
    var wrap = document.createElement('div');
    wrap.className = 'qs-wrap';
    var h = el.dataset.height || null;
    if (h) {
      wrap.style.height = h;
    } else {
      wrap.style.paddingBottom = (ratio * 100).toFixed(2) + '%';
      wrap.style.height = '0';
    }
    return wrap;
  }

  function makeImg(src) {
    var img = document.createElement('img');
    img.src = src;
    img.alt = '';
    return img;
  }

  // ─── SLIDER ───────────────────────────────────────────────────────────────
  function initSlider(el) {
    var before      = el.dataset.before;
    var after       = el.dataset.after;
    var color       = cfg(el, 'color', '#ffffff');
    var icon        = cfg(el, 'icon', 'arrows');
    var labelBefore = cfg(el, 'labelBefore', 'Original');
    var labelAfter  = cfg(el, 'labelAfter', 'Staging');
    var ratio       = parseFloat(cfg(el, 'ratio', '0.6'));

    var wrap = makeWrap(el, ratio);
    wrap.style.cursor = 'col-resize';

    var imgB = makeImg(before);
    imgB.style.zIndex = '1';

    var clip = document.createElement('div');
    clip.className = 'qs-clip';
    var imgA = makeImg(after);
    clip.appendChild(imgA);

    var bar = document.createElement('div');
    bar.className = 'qs-bar';
    bar.style.background = color;
    bar.style.left = '50%';

    var handle = document.createElement('div');
    handle.className = 'qs-handle';
    handle.style.background = color;
    handle.style.color = isLight(color) ? '#333' : '#fff';
    handle.innerHTML = ICONS[icon] || '';
    bar.appendChild(handle);

    var lB = document.createElement('div');
    lB.className = 'qs-label qs-label-before';
    lB.textContent = labelBefore;

    var lA = document.createElement('div');
    lA.className = 'qs-label qs-label-after';
    lA.textContent = labelAfter;

    wrap.appendChild(imgB);
    wrap.appendChild(clip);
    wrap.appendChild(bar);
    wrap.appendChild(lB);
    wrap.appendChild(lA);
    wrap.appendChild(makeBadge());
    el.replaceWith(wrap);

    function setPos(clientX) {
      var rect = wrap.getBoundingClientRect();
      var pct = Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100));
      bar.style.left = pct + '%';
      clip.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
    }

    wrap.addEventListener('mousedown', function (e) {
      e.preventDefault();
      var onMove = function (ev) { setPos(ev.clientX); };
      var onUp   = function ()   { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      setPos(e.clientX);
    });

    wrap.addEventListener('touchstart', function (e) { setPos(e.touches[0].clientX); }, { passive: true });
    wrap.addEventListener('touchmove',  function (e) { e.preventDefault(); setPos(e.touches[0].clientX); }, { passive: false });
  }

  // ─── FADE ─────────────────────────────────────────────────────────────────
  function initFade(el) {
    var before      = el.dataset.before;
    var after       = el.dataset.after;
    var color       = cfg(el, 'color', '#1D9E75');
    var labelBefore = cfg(el, 'labelBefore', 'Original');
    var labelAfter  = cfg(el, 'labelAfter', 'Staging');
    var ratio       = parseFloat(cfg(el, 'ratio', '0.6'));

    var wrap = makeWrap(el, ratio);

    var imgB = makeImg(before);
    imgB.style.zIndex = '1';

    var imgA = makeImg(after);
    imgA.style.zIndex = '2';
    imgA.style.opacity = '0';
    imgA.style.transition = 'opacity 0.35s ease';

    var ctrl = document.createElement('div');
    ctrl.className = 'qs-fade-ctrl';

    var spB = document.createElement('span');
    spB.textContent = labelBefore;

    var range = document.createElement('input');
    range.type  = 'range';
    range.min   = '0';
    range.max   = '100';
    range.value = '0';
    range.step  = '1';
    range.style.cssText = 'width:110px;accent-color:' + color + ';';
    range.addEventListener('input', function () {
      imgA.style.transition = 'none';
      imgA.style.opacity = String(range.value / 100);
    });

    var spA = document.createElement('span');
    spA.textContent = labelAfter;

    ctrl.appendChild(spB);
    ctrl.appendChild(range);
    ctrl.appendChild(spA);

    wrap.appendChild(imgB);
    wrap.appendChild(imgA);
    wrap.appendChild(ctrl);
    wrap.appendChild(makeBadge());
    el.replaceWith(wrap);
  }

  // ─── TOGGLE ───────────────────────────────────────────────────────────────
  function initToggle(el) {
    var before      = el.dataset.before;
    var after       = el.dataset.after;
    var color       = cfg(el, 'color', '#ffffff');
    var icon        = cfg(el, 'icon', 'arrows');
    var labelBefore = cfg(el, 'labelBefore', 'Original');
    var labelAfter  = cfg(el, 'labelAfter', 'Staging');
    var ratio       = parseFloat(cfg(el, 'ratio', '0.6'));

    var wrap = makeWrap(el, ratio);
    wrap.style.cursor = 'pointer';

    var imgB = makeImg(before);
    imgB.style.zIndex = '1';

    var imgA = makeImg(after);
    imgA.style.zIndex = '2';
    imgA.style.opacity = '0';
    imgA.style.transition = 'opacity 0.3s ease';

    var btn = document.createElement('div');
    btn.className = 'qs-toggle-btn';
    btn.style.background = color;
    btn.style.color = isLight(color) ? '#222' : '#fff';
    if (ICONS[icon]) {
      var iconSpan = document.createElement('span');
      iconSpan.style.display = 'flex';
      iconSpan.innerHTML = ICONS[icon];
      btn.appendChild(iconSpan);
    }
    var lbl = document.createElement('span');
    lbl.textContent = labelAfter;
    btn.appendChild(lbl);

    var showing = false;
    wrap.addEventListener('click', function () {
      showing = !showing;
      imgA.style.opacity = showing ? '1' : '0';
      lbl.textContent = showing ? labelBefore : labelAfter;
    });

    wrap.appendChild(imgB);
    wrap.appendChild(imgA);
    wrap.appendChild(btn);
    wrap.appendChild(makeBadge());
    el.replaceWith(wrap);
  }

  // ─── UTILS ────────────────────────────────────────────────────────────────
  function isLight(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function(c){ return c+c; }).join('');
    var r = parseInt(hex.substring(0,2),16);
    var g = parseInt(hex.substring(2,4),16);
    var b = parseInt(hex.substring(4,6),16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 155;
  }

  function initOne(el) {
    var mode = cfg(el, 'mode', 'slider');
    if (mode === 'fade')        initFade(el);
    else if (mode === 'toggle') initToggle(el);
    else                        initSlider(el);
  }

  function init() {
    injectStyles();
    document.querySelectorAll('.qualis-slider').forEach(initOne);
  }

  window.QualisSlider = { init: function(el) { injectStyles(); initOne(el); } };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();