/**
 * WLD ON6WL — Sidebar builder
 * Wordt geïnjecteerd via renderSidebar()
 */

// ── Volledige bestandsnamen per chapter-ID ───────────────────
const CHAPTER_FILES = {
  h00: 'h00-orientatie.html',
  h01: 'h01-verhoudingen.html',
  h02: 'h02-logaritmen.html',
  h03: 'h03-logaritmische-schaal.html',
  h04: 'h04-wat-is-db.html',
  h05: 'h05-vermogensverhouding.html',
  h06: 'h06-spanning-stroom.html',
  h07: 'h07-versterking-verlies.html',
  h08: 'h08-ketens.html',
  h09: 'h09-mentaal-rekenen.html',
  h10: 'h10-dbm-definitie.html',
  h11: 'h11-omrekenen.html',
  h12: 'h12-dbw.html',
  h13: 'h13-typische-waarden.html',
  h14: 'h14-dbm-optellen.html',
  h15: 'h15-dbi.html',
  h16: 'h16-dbd.html',
  h17: 'h17-dbc-dbuv.html',
  h18: 'h18-zendvermogen.html',
  h19: 'h19-kabelverlies.html',
  h20: 'h20-rf-ketens.html',
  h21: 'h21-ontvangst.html',
  h22: 'h22-link-budget.html',
  h23: 'h23-shack-betekenis.html',
  h24: 'h24-meten.html',
  h25: 'h25-s-meter.html',
  h26: 'h26-fouten.html',
  h27: 'h27-oefenreeks.html',
  h28: 'h28-samenvattingen.html',
  h29: 'h29-eindtest.html',
  h30: 'h30-practicum.html',
};

const SIDEBAR_CHAPTERS = [
  { deel:0, chapters:[{id:'h00'}] },
  { deel:1, chapters:[{id:'h01'},{id:'h02'},{id:'h03'}] },
  { deel:2, chapters:[{id:'h04'},{id:'h05'},{id:'h06'},{id:'h07'},{id:'h08'},{id:'h09'}] },
  { deel:3, chapters:[{id:'h10'},{id:'h11'},{id:'h12'},{id:'h13'},{id:'h14'}] },
  { deel:4, chapters:[{id:'h15'},{id:'h16'},{id:'h17'}] },
  { deel:5, chapters:[{id:'h18'},{id:'h19'},{id:'h20'},{id:'h21'},{id:'h22'},{id:'h23'}] },
  { deel:6, chapters:[{id:'h24'},{id:'h25'},{id:'h26'}] },
  { deel:7, chapters:[{id:'h27'},{id:'h28'},{id:'h29'}] },
];

function renderSidebar(activeId) {
  const lang = (function() {
    try { return JSON.parse(localStorage.getItem('wld_dbcursus'))?.lang || 'nl'; }
    catch { return 'nl'; }
  })();

  const state = (function() {
    try { return JSON.parse(localStorage.getItem('wld_dbcursus')) || {}; }
    catch { return {}; }
  })();

  // Pad-prefix bepalen: zitten we in /chapters/ of in de root?
  const inChapters = window.location.pathname.includes('/chapters/');
  const base = inChapters ? '../' : '';

  let html = '';

  SIDEBAR_CHAPTERS.forEach(section => {
    const dTitle = (DEEL_TITLES[lang] || DEEL_TITLES.nl)[section.deel];
    html += `<div class="sidebar-section">
      <div class="sidebar-section-label">
        <span class="sidebar-section-num">0${section.deel}</span>
        ${dTitle}
      </div>
      <ul class="sidebar-nav">`;

    section.chapters.forEach(ch => {
      const title    = (CHAPTER_TITLES[lang] || CHAPTER_TITLES.nl)[ch.id] || ch.id;
      const num      = ch.id.replace('h', 'H');
      const done     = !!state['done_' + ch.id];
      const isActive = ch.id === activeId;
      const filename = CHAPTER_FILES[ch.id] || (ch.id + '.html');
      const href     = `${base}chapters/${filename}`;

      const statusIcon = done
        ? '<span class="nav-status done">✓</span>'
        : `<span class="nav-status${isActive ? ' active' : ''}"></span>`;

      html += `<li data-chid="${ch.id}">
        <a href="${href}"${isActive ? ' class="active"' : ''}>
          <span class="nav-ch-num">${num}</span>
          <span>${title}</span>
          ${statusIcon}
        </a>
      </li>`;
    });

    html += `</ul></div>`;
  });

  // ── Practicum onderaan ───────────────────────────────────
  const pracTitles = {
    nl: 'Spectrum-analyse VHF/UHF',
    fr: 'Analyse spectre VHF/UHF',
    en: 'Spectrum Analysis VHF/UHF',
  };
  const pracLabel = { nl:'📡 Practicum', fr:'📡 Pratique', en:'📡 Practicum' };
  const pracUrl   = `${base}chapters/h30-practicum.html`;
  const isActiveP = activeId === 'h30';

  html += `<div class="sidebar-section">
    <div class="sidebar-section-label" style="color:var(--orange);border-color:rgba(255,107,53,.3)">
      <span class="sidebar-section-num" style="background:rgba(255,107,53,.12);color:var(--orange)">⚗</span>
      ${pracLabel[lang] || pracLabel.nl}
    </div>
    <ul class="sidebar-nav">
      <li>
        <a href="${pracUrl}"${isActiveP ? ' class="active"' : ''}>
          <span class="nav-ch-num" style="color:var(--orange)">P</span>
          <span>${pracTitles[lang] || pracTitles.nl}</span>
        </a>
      </li>
    </ul>
  </div>`;

  const el = document.querySelector('.app-sidebar');
  if (el) el.innerHTML = html;
}
