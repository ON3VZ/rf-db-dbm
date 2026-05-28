/**
 * WLD ON6WL — Sidebar builder
 * Wordt geïnjecteerd via renderSidebar()
 */

const SIDEBAR_CHAPTERS = [
  { deel:0, chapters:[{id:'h00',full:true}] },
  { deel:1, chapters:[{id:'h01',full:true},{id:'h02',full:true},{id:'h03',stub:true}] },
  { deel:2, chapters:[{id:'h04',full:true},{id:'h05',stub:true},{id:'h06',stub:true},{id:'h07',stub:true},{id:'h08',stub:true},{id:'h09',stub:true}] },
  { deel:3, chapters:[{id:'h10',full:true},{id:'h11',full:true},{id:'h12',stub:true},{id:'h13',stub:true},{id:'h14',stub:true}] },
  { deel:4, chapters:[{id:'h15',stub:true},{id:'h16',stub:true},{id:'h17',stub:true}] },
  { deel:5, chapters:[{id:'h18',stub:true},{id:'h19',stub:true},{id:'h20',stub:true},{id:'h21',full:true},{id:'h22',stub:true},{id:'h23',stub:true}] },
  { deel:6, chapters:[{id:'h24',stub:true},{id:'h25',stub:true},{id:'h26',full:true}] },
  { deel:7, chapters:[{id:'h27',stub:true},{id:'h28',stub:true},{id:'h29',stub:true}] },
];

function renderSidebar(activeId) {
  const lang = (function() {
    try { return JSON.parse(localStorage.getItem('wld_dbcursus'))?.lang || 'nl'; } catch { return 'nl'; }
  })();

  const state = (function() {
    try { return JSON.parse(localStorage.getItem('wld_dbcursus')) || {}; } catch { return {}; }
  })();

  const isInChapterDir = window.location.pathname.includes('/chapters/');
  const base = isInChapterDir ? '../' : '';

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
      const title = (CHAPTER_TITLES[lang] || CHAPTER_TITLES.nl)[ch.id];
      const num   = ch.id.replace('h','H');
      const done  = !!state['done_' + ch.id];
      const isActive = ch.id === activeId;
      const href = ch.stub
        ? `${base}chapters/${ch.id}.html`
        : `${base}chapters/${ch.id}.html`;
      const doneIcon = done ? '<span class="nav-status done">✓</span>' : `<span class="nav-status${isActive?' active':''}"></span>`;

      html += `<li data-chid="${ch.id}">
        <a href="${href}" ${isActive ? 'class="active"' : ''}>
          <span class="nav-ch-num">${num}</span>
          <span>${title}</span>
          ${doneIcon}
        </a>
      </li>`;
    });

    html += `</ul></div>`;
  });

  // Voeg practicum-sectie toe onderaan
  const lang_l = (JSON.parse(localStorage.getItem('wld_dbcursus')||'{}').lang)||'nl';
  const pracTitle = {nl:'📡 Practicum',fr:'📡 Pratique',en:'📡 Practicum'}[lang_l]||'📡 Practicum';
  const pracSub   = {nl:'Spectrum-analyse VHF/UHF',fr:'Analyse spectre VHF/UHF',en:'Spectrum Analysis VHF/UHF'}[lang_l]||'';
  const isActive30 = activeId === 'h30';
  const isInChap = window.location.pathname.includes('/chapters/');
  const pracUrl = isInChap ? 'h30-practicum.html' : 'chapters/h30-practicum.html';
  html += `<div class="sidebar-section">
    <div class="sidebar-section-label" style="color:var(--orange);border-color:rgba(255,107,53,.3)"><span class="sidebar-section-num" style="background:rgba(255,107,53,.12);color:var(--orange)">⚗</span>${pracTitle}</div>
    <ul class="sidebar-nav"><li>
      <a href="${pracUrl}" ${isActive30?'class="active"':''}>
        <span class="nav-ch-num" style="color:var(--orange)">P</span>
        <span>${pracSub}</span>
      </a>
    </li></ul>
  </div>`;

  const el = document.querySelector('.app-sidebar');
  if (el) el.innerHTML = html;
}
