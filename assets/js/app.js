/**
 * WLD ON6WL — dB & dBm Cursus
 * i18n · Voortgang · Interactiviteit
 */
'use strict';

/* ── Vertalingen UI-strings ─────────────────────────────── */
const T = {
  nl: {
    progress:        'Voortgang',
    completed:       'voltooid',
    of:              'van',
    chapters:        'hoofdstukken',
    mark_done:       '✓ Markeer als voltooid',
    marked_done:     '✓ Voltooid!',
    show_solution:   '▼ Toon oplossing',
    hide_solution:   '▲ Verberg oplossing',
    prev:            '← Vorige',
    next:            'Volgende →',
    objectives:      'Na dit hoofdstuk kun je',
    summary_title:   'Samenvatting',
    memory_title:    '🧠 Onthoud dit',
    key_title:       '🔑 Kernregel',
    warning_title:   '⚠️ Let op!',
    tip_title:       '💡 Tip',
    shack_title:     '📻 In de shack',
    exercises_title: 'Oefeningen',
    example_title:   'Voorbeeld',
    overview:        'Overzicht',
    glossary:        'Begrippen',
    downloads:       'Downloads',
    start:           'Start',
    back_to_overview:'← Terug naar overzicht',
    learning_path:   'Leerpad',
    all_chapters:    'Alle hoofdstukken',
    search_terms:    'Zoek een begrip...',
    in_preparation:  'In voorbereiding',
    login_title:     'dB & dBm Cursus',
    login_sub:       'Leertraject voor radioamateurs. Voer je roepletters in en kies je taal om te starten.',
    login_callsign:  'Jouw roepletters',
    login_callsign_ph: 'bijv. ON3XYZ',
    login_lang:      'Taal / Language / Langue',
    login_btn:       'Start de cursus',
    login_guest:     'Doorgaan als gast',
  },
  fr: {
    progress:        'Progression',
    completed:       'terminé(s)',
    of:              'sur',
    chapters:        'chapitres',
    mark_done:       '✓ Marquer comme terminé',
    marked_done:     '✓ Terminé !',
    show_solution:   '▼ Voir la solution',
    hide_solution:   '▲ Cacher la solution',
    prev:            '← Précédent',
    next:            'Suivant →',
    objectives:      'Après ce chapitre, vous serez capable de',
    summary_title:   'Résumé',
    memory_title:    '🧠 À retenir',
    key_title:       '🔑 Règle clé',
    warning_title:   '⚠️ Attention !',
    tip_title:       '💡 Astuce',
    shack_title:     '📻 En pratique',
    exercises_title: 'Exercices',
    example_title:   'Exemple',
    overview:        'Aperçu',
    glossary:        'Glossaire',
    downloads:       'Téléchargements',
    start:           'Démarrer',
    back_to_overview:'← Retour à l\'aperçu',
    learning_path:   'Parcours',
    all_chapters:    'Tous les chapitres',
    search_terms:    'Rechercher un terme...',
    in_preparation:  'En préparation',
    login_title:     'Cours dB & dBm',
    login_sub:       'Parcours d\'apprentissage pour radioamateurs. Entrez votre indicatif et choisissez votre langue.',
    login_callsign:  'Votre indicatif',
    login_callsign_ph: 'ex. ON3XYZ',
    login_lang:      'Langue / Taal / Language',
    login_btn:       'Démarrer le cours',
    login_guest:     'Continuer en tant qu\'invité',
  },
  en: {
    progress:        'Progress',
    completed:       'completed',
    of:              'of',
    chapters:        'chapters',
    mark_done:       '✓ Mark as completed',
    marked_done:     '✓ Completed!',
    show_solution:   '▼ Show solution',
    hide_solution:   '▲ Hide solution',
    prev:            '← Previous',
    next:            'Next →',
    objectives:      'After this chapter you will be able to',
    summary_title:   'Summary',
    memory_title:    '🧠 Remember this',
    key_title:       '🔑 Key rule',
    warning_title:   '⚠️ Watch out!',
    tip_title:       '💡 Tip',
    shack_title:     '📻 In the shack',
    exercises_title: 'Exercises',
    example_title:   'Example',
    overview:        'Overview',
    glossary:        'Glossary',
    downloads:       'Downloads',
    start:           'Start',
    back_to_overview:'← Back to overview',
    learning_path:   'Learning path',
    all_chapters:    'All chapters',
    search_terms:    'Search a term...',
    in_preparation:  'Coming soon',
    login_title:     'dB & dBm Course',
    login_sub:       'Learning track for radio amateurs. Enter your callsign and choose your language to begin.',
    login_callsign:  'Your callsign',
    login_callsign_ph: 'e.g. ON3XYZ',
    login_lang:      'Language / Taal / Langue',
    login_btn:       'Start the course',
    login_guest:     'Continue as guest',
  }
};

/* ── Hoofdstuk-titels per taal ──────────────────────────── */
const CHAPTER_TITLES = {
  nl: {
    h00:'Oriëntatie & leeswijzer', h01:'Verhoudingen', h02:'Logaritmen',
    h03:'Logaritmische schaal', h04:'Wat is dB?', h05:'Vermogensverhouding',
    h06:'Spanning & stroom in dB', h07:'Versterking & verlies',
    h08:'dB-ketens', h09:'Mentaal rekenen', h10:'dBm',
    h11:'Omrekenen W ↔ dBm', h12:'dBW', h13:'Typische waarden',
    h14:'dBm optellen', h15:'dBi', h16:'dBd', h17:'dBc & dBµV',
    h18:'Zendvermogen', h19:'Kabelverlies', h20:'RF-ketens',
    h21:'Ontvangst & S-niveaus', h22:'Link budget', h23:'Wat dB betekent',
    h24:'Meten', h25:'S-meter', h26:'Veelgemaakte fouten',
    h27:'Oefenreeks', h28:'Samenvattingen', h29:'Eindtest',
  },
  fr: {
    h00:'Orientation', h01:'Ratios', h02:'Logarithmes',
    h03:'Échelle logarithmique', h04:"Qu'est-ce que le dB?", h05:'Rapport de puissance',
    h06:'Tension & courant en dB', h07:'Gain & atténuation',
    h08:'Chaînes dB', h09:'Calcul mental', h10:'dBm',
    h11:'Conversion W ↔ dBm', h12:'dBW', h13:'Valeurs typiques',
    h14:'Addition dBm', h15:'dBi', h16:'dBd', h17:'dBc & dBµV',
    h18:'Puissance émise', h19:'Perte câble', h20:'Chaînes RF',
    h21:'Réception & niveaux S', h22:'Bilan de liaison', h23:'Ce que dB signifie',
    h24:'Mesures', h25:'S-mètre', h26:'Erreurs fréquentes',
    h27:'Séries d\'exercices', h28:'Résumés', h29:'Test final',
  },
  en: {
    h00:'Orientation', h01:'Ratios', h02:'Logarithms',
    h03:'Logarithmic scale', h04:'What is dB?', h05:'Power ratio',
    h06:'Voltage & current in dB', h07:'Gain & loss',
    h08:'dB chains', h09:'Mental arithmetic', h10:'dBm',
    h11:'Converting W ↔ dBm', h12:'dBW', h13:'Typical values',
    h14:'Adding dBm', h15:'dBi', h16:'dBd', h17:'dBc & dBµV',
    h18:'Transmit power', h19:'Cable loss', h20:'RF chains',
    h21:'Reception & S-levels', h22:'Link budget', h23:'What dB means',
    h24:'Measuring', h25:'S-meter', h26:'Common mistakes',
    h27:'Exercise series', h28:'Summaries', h29:'Final test',
  }
};

/* ── Deel-titels per taal ───────────────────────────────── */
const DEEL_TITLES = {
  nl: { 0:'Oriëntatie', 1:'Fundamenten', 2:'Decibel', 3:'dBm & Eenheden', 4:'Antennes', 5:'Toepassingen', 6:'Meten', 7:'Synthese' },
  fr: { 0:'Orientation', 1:'Fondements', 2:'Décibel', 3:'dBm & Unités', 4:'Antennes', 5:'Applications', 6:'Mesures', 7:'Synthèse' },
  en: { 0:'Orientation', 1:'Foundations', 2:'Decibel', 3:'dBm & Units', 4:'Antennas', 5:'Applications', 6:'Measuring', 7:'Synthesis' },
};

const CHAPTER_DEEL = {
  h00:0, h01:1, h02:1, h03:1, h04:2, h05:2, h06:2, h07:2, h08:2, h09:2,
  h10:3, h11:3, h12:3, h13:3, h14:3,
  h15:4, h16:4, h17:4,
  h18:5, h19:5, h20:5, h21:5, h22:5, h23:5,
  h24:6, h25:6, h26:6,
  h27:7, h28:7, h29:7,
};

const TOTAL_CHAPTERS = 30;
const STORAGE_KEY    = 'wld_dbcursus';

/* ── State ──────────────────────────────────────────────── */
let currentLang = 'nl';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}
function getState() { return loadState(); }

function markDone(chId) {
  const s = getState();
  s['done_' + chId] = true;
  s['done_ts_' + chId] = Date.now();
  saveState(s);
  refreshAllUI();
}
function isDone(chId) { return !!getState()['done_' + chId]; }
function getDoneCount() {
  const s = getState();
  return Object.keys(s).filter(k => k.startsWith('done_') && !k.includes('_ts_')).length;
}

/* ── Taal ───────────────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  const s = getState(); s.lang = lang; saveState(s);

  // Taallagen omwisselen
  document.querySelectorAll('.lang-block').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  // Taalknopjes
  document.querySelectorAll('.lang-switch-btn, .login-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // data-i18n elementen
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
  });

  // data-i18n-placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang] && T[lang][key]) el.placeholder = T[lang][key];
  });

  // HTML lang attribuut
  document.documentElement.lang = lang;
}

/* ── Voortgang UI ───────────────────────────────────────── */
function refreshAllUI() {
  const done = getDoneCount();
  const pct  = Math.round((done / TOTAL_CHAPTERS) * 100);

  // Header progress
  document.querySelectorAll('.header-progress-fill').forEach(el => el.style.width = pct + '%');
  document.querySelectorAll('.header-progress-done').forEach(el => el.textContent = done + ' / ' + TOTAL_CHAPTERS);

  // Dashboard circle
  const circle = document.querySelector('.progress-circle');
  if (circle) {
    circle.style.background = `conic-gradient(var(--teal) ${pct * 3.6}deg, var(--bg-light) 0deg)`;
    const pctEl = circle.querySelector('.progress-pct');
    if (pctEl) pctEl.textContent = pct + '%';
  }

  // Progress bars
  document.querySelectorAll('.progress-bar-fill').forEach(el => el.style.width = pct + '%');
  document.querySelectorAll('.progress-count').forEach(el => {
    const lang = currentLang;
    el.textContent = done + ' ' + T[lang].of + ' ' + TOTAL_CHAPTERS + ' ' + T[lang].completed;
  });

  // Sidebar & card status
  document.querySelectorAll('[data-chid]').forEach(el => {
    const id = el.dataset.chid;
    if (isDone(id)) {
      el.querySelector('.nav-status')?.classList.add('done');
      const s = el.querySelector('.nav-status');
      if (s) s.textContent = '✓';
      el.querySelector('.card-status-done')?.style && (el.querySelector('.card-status-done').style.display = 'block');
    }
  });

  // Complete button on current page
  const btn = document.getElementById('btn-complete');
  if (btn) {
    const id = btn.dataset.chid;
    if (isDone(id)) {
      btn.textContent = T[currentLang].marked_done;
      btn.classList.add('done');
    } else {
      btn.textContent = T[currentLang].mark_done;
    }
  }
}

/* ── Oplossingen toggle ─────────────────────────────────── */
function initSolutionToggles() {
  document.querySelectorAll('.solution-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const target = document.getElementById(this.dataset.target);
      if (!target) return;
      const visible = target.classList.toggle('visible');
      this.textContent = visible ? T[currentLang].hide_solution : T[currentLang].show_solution;
    });
  });
}

/* ── Complete knop ──────────────────────────────────────── */
function initCompleteBtn() {
  const btn = document.getElementById('btn-complete');
  if (!btn) return;
  btn.addEventListener('click', function() {
    markDone(this.dataset.chid);
    this.textContent = T[currentLang].marked_done;
    this.classList.add('done');
    // Pulse animatie
    this.style.transform = 'scale(1.06)';
    setTimeout(() => this.style.transform = '', 300);
  });
}

/* ── Mobiel sidebar ─────────────────────────────────────── */
function initMobileMenu() {
  const toggle  = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.app-sidebar');
  if (!toggle || !sidebar) return;
  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggle)
      sidebar.classList.remove('open');
  });
}

/* ── Actieve sidebar link ────────────────────────────────── */
function markActiveSidebarLink() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.split('/').pop() === current) a.classList.add('active');
  });
}

/* ── dBm Calculator ─────────────────────────────────────── */
function initCalculator() {
  const calc = document.getElementById('dbm-calc');
  if (!calc) return;
  const wIn   = calc.querySelector('#cw');
  const dIn   = calc.querySelector('#cd');
  const res   = calc.querySelector('#cr');

  function fmtW(w) {
    if (w >= 1000) return (w/1000).toFixed(3) + ' kW';
    if (w >= 1)    return w.toFixed(4) + ' W';
    if (w >= 0.001) return (w*1000).toFixed(3) + ' mW';
    if (w >= 1e-6)  return (w*1e6).toFixed(3) + ' µW';
    return (w*1e9).toFixed(3) + ' nW';
  }

  if (wIn) wIn.addEventListener('input', function() {
    const w = parseFloat(this.value);
    if (!isNaN(w) && w > 0) {
      const dbm = 10 * Math.log10(w * 1000);
      if (dIn) dIn.value = dbm.toFixed(2);
      if (res) res.textContent = fmtW(w) + ' = ' + dbm.toFixed(2) + ' dBm';
    }
  });

  if (dIn) dIn.addEventListener('input', function() {
    const dbm = parseFloat(this.value);
    if (!isNaN(dbm)) {
      const w = Math.pow(10, dbm/10) / 1000;
      if (wIn) wIn.value = w.toPrecision(4);
      if (res) res.textContent = fmtW(w) + ' = ' + dbm.toFixed(2) + ' dBm';
    }
  });

  // Snelknoppen
  calc.querySelectorAll('.qbtn').forEach(b => {
    b.addEventListener('click', function() {
      const w = parseFloat(this.dataset.w);
      if (wIn) { wIn.value = w; wIn.dispatchEvent(new Event('input')); }
    });
  });
}

/* ── Glossary zoek ──────────────────────────────────────── */
function initGlossarySearch() {
  const inp = document.getElementById('glossary-search');
  if (!inp) return;
  inp.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.glossary-entry').forEach(e => {
      e.style.display = (e.dataset.terms || '').toLowerCase().includes(q) || e.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Laad opgeslagen taal
  const saved = getState();
  if (saved.lang) currentLang = saved.lang;

  setLang(currentLang);
  initSolutionToggles();
  initCompleteBtn();
  initMobileMenu();
  markActiveSidebarLink();
  initCalculator();
  initGlossarySearch();
  refreshAllUI();

  // Lang-switch knoppen (header + main)
  document.querySelectorAll('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});

/* ── Zwevende sneltoetsenbalk ───────────────────────────── */
function injectQuickBar() {
  // Bepaal relatief pad (zijn we in /chapters/ of root?)
  const inChapters = window.location.pathname.includes('/chapters/');
  const base = inChapters ? '../' : '';

  // Quick-bar HTML
  const bar = document.createElement('div');
  bar.className = 'quick-bar';
  bar.innerHTML = `
    <a href="${base}printables/spiekfiche.html" target="_blank" class="quick-btn quick-btn-spiek" title="Spiekfiche openen">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      <span class="lang-block active" data-lang="nl">Spiekfiche</span>
      <span class="lang-block" data-lang="fr">Aide-mémoire</span>
      <span class="lang-block" data-lang="en">Cheat sheet</span>
    </a>
    <button class="quick-btn quick-btn-pdf" onclick="showPdfModal()" title="Handboek downloaden">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      <span class="lang-block active" data-lang="nl">PDF Handboek</span>
      <span class="lang-block" data-lang="fr">Manuel PDF</span>
      <span class="lang-block" data-lang="en">PDF Manual</span>
    </button>
  `;
  document.body.appendChild(bar);

  // Modal HTML
  const modal = document.createElement('div');
  modal.id = 'pdf-modal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">📄</div>
      <div class="modal-title lang-block active" data-lang="nl">Handboek downloaden</div>
      <div class="modal-title lang-block" data-lang="fr">Télécharger le manuel</div>
      <div class="modal-title lang-block" data-lang="en">Download manual</div>

      <div class="modal-body lang-block active" data-lang="nl">
        <strong>⚠️ Opmerking voor de lezer</strong><br><br>
        Dit handboek bevat uitgebreide technische uitleg over <strong>dB, dBm, logaritmen en RF-meting</strong>.
        Het document is bedoeld als naslagwerk bij de online cursus.<br><br>
        <strong>Let op bij het openen:</strong>
        <ul>
          <li>Het bestand wordt aangeboden in <strong>.docx</strong> formaat (Word)</li>
          <li>Je hebt Microsoft Word, LibreOffice of Google Docs nodig om het te openen</li>
          <li>Het document bevat <strong>formules in wiskundige notatie</strong> — sommige weergaven tonen deze anders</li>
          <li>Voor de beste weergave: gebruik Microsoft Word of LibreOffice Writer</li>
          <li>Dit document is <strong>uitsluitend in het Nederlands</strong> opgesteld</li>
        </ul>
      </div>
      <div class="modal-body lang-block" data-lang="fr">
        <strong>⚠️ Remarque pour le lecteur</strong><br><br>
        Ce manuel contient des explications techniques sur <strong>dB, dBm, logarithmes et mesures RF</strong>.
        Il est destiné à être utilisé comme référence pour le cours en ligne.<br><br>
        <strong>Note :</strong> Ce document est <strong>uniquement en néerlandais</strong>. Utilisez le cours en ligne pour la version française.
      </div>
      <div class="modal-body lang-block" data-lang="en">
        <strong>⚠️ Notice to the reader</strong><br><br>
        This manual contains detailed technical explanations on <strong>dB, dBm, logarithms and RF measurement</strong>.
        It is intended as a reference document alongside the online course.<br><br>
        <strong>Note:</strong> This document is <strong>in Dutch only</strong>. Use the online course for English content.
      </div>

      <div class="modal-actions">
        <button class="modal-btn-cancel" onclick="closePdfModal()">
          <span class="lang-block active" data-lang="nl">Annuleren</span>
          <span class="lang-block" data-lang="fr">Annuler</span>
          <span class="lang-block" data-lang="en">Cancel</span>
        </button>
        <a href="${base}downloads/WLD-ON6WL-dBdBm-Handboek-v1.docx" download class="modal-btn-confirm" onclick="closePdfModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span class="lang-block active" data-lang="nl">Download handboek</span>
          <span class="lang-block" data-lang="fr">Télécharger</span>
          <span class="lang-block" data-lang="en">Download manual</span>
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Sluit bij klik buiten card
  modal.addEventListener('click', e => { if (e.target === modal) closePdfModal(); });
}

function showPdfModal() {
  const m = document.getElementById('pdf-modal');
  if (m) {
    m.classList.add('visible');
    setLang(currentLang); // taallagen opnieuw toepassen in modal
  }
}
function closePdfModal() {
  const m = document.getElementById('pdf-modal');
  if (m) m.classList.remove('visible');
}

// Injecteer de bar zodra DOM klaar is
document.addEventListener('DOMContentLoaded', () => {
  injectQuickBar();
});

/* ── Resource-balk & PDF-modal ─────────────────────────────── */
function buildResourceBar() {
  if (document.querySelector('.resource-bar')) return; // Voorkom dubbele bar
  const isChapter = window.location.pathname.includes('/chapters/');
  const base = isChapter ? '../' : '';
  const bar = document.createElement('div');
  bar.className = 'resource-bar';
  const lang = (JSON.parse(localStorage.getItem('wld_dbcursus')||'{}').lang) || 'nl';
  const labels = {
    nl: { quick:'Snelle toegang:', cheat:'📄 Spiekfiche', pdf:'📥 Handboek PDF', prog:'📊 Voortgang' },
    fr: { quick:'Accès rapide :', cheat:'📄 Aide-mémoire', pdf:'📥 Manuel PDF', prog:'📊 Progression' },
    en: { quick:'Quick access:', cheat:'📄 Cheat sheet', pdf:'📥 Manual PDF', prog:'📊 Progress' },
  };
  const L = labels[lang] || labels.nl;
  bar.innerHTML = `
    <span class="resource-bar-label">${L.quick}</span>
    <a href="${base}printables/spiekfiche.html" class="rb-btn rb-btn-teal" target="_blank">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      ${L.cheat}
    </a>
    <button class="rb-btn rb-btn-orange" onclick="openPdfModal()">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ${L.pdf}
    </button>
    <a href="${base}index.html#voortgang" class="rb-btn rb-btn-slate">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      ${L.prog}
    </a>`;
  document.body.appendChild(bar);
  // Ruimte onderaan de content
  const main = document.querySelector('.app-main');
  if (main) main.style.paddingBottom = '54px';
}

function buildPdfModal() {
  const modal = document.createElement('div');
  modal.className = 'pdf-modal-overlay';
  modal.id = 'pdfModal';
  modal.innerHTML = `
    <div class="pdf-modal">
      <h2>📥 Handboek downloaden</h2>
      <div class="pdf-modal-warn">
        <strong>⚠️ Let op voordat je downloadt:</strong><br>
        Dit handboek is opgesteld als didactisch hulpmiddel voor radioamateurs. 
        Het bevat <strong>geen gecertificeerde keuringsresultaten</strong>. 
        Meetwaarden in het practicum zijn indicatief en afkomstig van workshopmetingen 
        met niet-gecalibreerde apparatuur. Ze zijn <strong>niet juridisch bindend</strong> 
        en kunnen <strong>niet gebruikt worden als officieel conformiteitsbewijs</strong> 
        (CE-keuring, type-goedkeuring of regelgevingsdocument). 
        Raadpleeg een erkend EMC-laboratorium voor officiële keuringen.
      </div>
      <div class="pdf-modal-body">
        Het Word-handboek (DOCX) bevat alle 30 hoofdstukken in het Nederlands, 
        inclusief formules, tabellen, oefeningen en oplossingen.<br><br>
        <strong>Versie:</strong> 1.0 · WLD ON6WL · on6wl.be
      </div>
      <div class="pdf-modal-btns">
        <a href="" + base + "downloads/WLD-ON6WL-dBdBm-Handboek-v1.docx" 
           class="pdf-dl-btn" download onclick="closePdfModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Handboek downloaden (DOCX)
        </a>
        <button class="pdf-cancel-btn" onclick="closePdfModal()">Annuleren</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closePdfModal(); });
}

function openPdfModal()  { document.getElementById('pdfModal')?.classList.add('open'); }
function closePdfModal() { document.getElementById('pdfModal')?.classList.remove('open'); }

// Voeg toe aan DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  buildResourceBar();
  buildPdfModal();
});
