const BASE = 'https://api.kriszzyy.xyz';
let currentType = 'youtube';
let ytMode = 'audio';

// ========== SVG ICONS (LENGKAP, TANPA EMOJI) ==========
const SVG = {
  // Icon dasar
  music: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  video: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  dl: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  play: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  stop: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  ext: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  img: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  clock: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  
  // Icon tambahan untuk platform pills
  youtube: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  instagram: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="18.5" y1="5.5" x2="18.51" y2="5.5"/></line></svg>`,
  tiktok: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  facebook: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  capcut: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2"><path d="M14 4v10.54a4 4 0 1 1-4 0V4M8 10h8"/><path d="M12 2v2"/></svg>`,
  twitter: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
  soundcloud: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 15a4 4 0 0 1 0-8 5 5 0 0 1 9.9 1.2A4 4 0 0 1 20 11a4 4 0 0 1-4 4H5z"/></svg>`,
  pinterest: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 11.3c-.2.4-.6.7-1.1.7-.9 0-1.5-1-1.5-2.5 0-1.2.7-1.8 1.4-1.8.4 0 .7.3.7.7 0 .4-.2.8-.7.8-.1 0-.2-.1-.2-.2 0-.2.1-.5.1-.7 0-.7-.4-1.2-1-1.2-1.4 0-2.3 1.1-2.3 2.8 0 1.2.4 2 .9 2 .3 0 .6-.2.7-.5l.2-.7c.1-.2.1-.3-.1-.5-.3-.3-.5-.6-.5-1 0-1.1.8-2.1 2.3-2.1 1.2 0 1.7.8 1.7 1.8 0 1.2-.6 2.2-1.4 2.2-.4 0-.8-.3-.7-.8.1-.5.3-1 .3-1.3 0-.3-.2-.5-.5-.5-.4 0-.7.4-.7 1 0 .4.1.7.1.7s-.5 1.8-.6 2.1c-.2.6.1 1.3.1 1.3 0 .0.1.1.2.1.1 0 .2-.1.2-.2.1-.2.3-.9.4-1.1.1-.2.1-.4-.1-.6z"/></svg>`,
  mediafire: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/><path d="M10 12l1.5 2.5L10 17l2.5-1.5L15 17l-1.5-3L15 11l-2.5 1.5L10 11z"/></svg>`,
  
  // Icon untuk theme toggle
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  
  // Icon untuk tombol type selector
  ytIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  igIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="18.5" y1="5.5" x2="18.51" y2="5.5"/></line></svg>`,
  ttIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  fbIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  ccIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4v10.54a4 4 0 1 1-4 0V4M8 10h8"/><path d="M12 2v2"/></svg>`,
  scIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 15a4 4 0 0 1 0-8 5 5 0 0 1 9.9 1.2A4 4 0 0 1 20 11a4 4 0 0 1-4 4H5z"/></svg>`,
  ptIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 11.3c-.2.4-.6.7-1.1.7-.9 0-1.5-1-1.5-2.5 0-1.2.7-1.8 1.4-1.8.4 0 .7.3.7.7 0 .4-.2.8-.7.8-.1 0-.2-.1-.2-.2 0-.2.1-.5.1-.7 0-.7-.4-1.2-1-1.2-1.4 0-2.3 1.1-2.3 2.8 0 1.2.4 2 .9 2 .3 0 .6-.2.7-.5l.2-.7c.1-.2.1-.3-.1-.5-.3-.3-.5-.6-.5-1 0-1.1.8-2.1 2.3-2.1 1.2 0 1.7.8 1.7 1.8 0 1.2-.6 2.2-1.4 2.2-.4 0-.8-.3-.7-.8.1-.5.3-1 .3-1.3 0-.3-.2-.5-.5-.5-.4 0-.7.4-.7 1 0 .4.1.7.1.7s-.5 1.8-.6 2.1c-.2.6.1 1.3.1 1.3 0 .0.1.1.2.1.1 0 .2-.1.2-.2.1-.2.3-.9.4-1.1.1-.2.1-.4-.1-.6z"/></svg>`,
  mfIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/><path d="M10 12l1.5 2.5L10 17l2.5-1.5L15 17l-1.5-3L15 11l-2.5 1.5L10 11z"/></svg>`,
  
  // Icon untuk link/input
  link: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></path></svg>`,
  
  // Icon untuk loading
  spinner: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>`
};

// ========== INITIALIZE TYPE BUTTONS WITH SVG ==========
function initTypeButtons() {
  const typeBtns = document.querySelectorAll('.type-btn');
  const typeMap = {
    'youtube': SVG.ytIcon,
    'instagram': SVG.igIcon,
    'tiktok': SVG.ttIcon,
    'facebook': SVG.fbIcon,
    'capcut': SVG.ccIcon,
    'soundcloud': SVG.scIcon,
    'pinterest': SVG.ptIcon,
    'mediafire': SVG.mfIcon
  };
  
  typeBtns.forEach(btn => {
    const type = btn.getAttribute('data-type');
    if (typeMap[type] && !btn.querySelector('svg')) {
      // Hapus emoji text kalo ada, ganti dengan SVG
      const oldSpan = btn.querySelector('span');
      if (oldSpan && oldSpan.textContent.match(/[SVG]/)) {
        oldSpan.remove();
      }
      btn.insertAdjacentHTML('afterbegin', typeMap[type]);
    }
  });
}

// ========== INITIALIZE YT MODE BUTTONS WITH SVG ==========
function initYtModeButtons() {
  const audioBtn = document.getElementById('yt-audio-btn');
  const videoBtn = document.getElementById('yt-video-btn');
  
  if (audioBtn && !audioBtn.querySelector('svg')) {
    audioBtn.insertAdjacentHTML('afterbegin', SVG.music);
  }
  if (videoBtn && !videoBtn.querySelector('svg')) {
    videoBtn.insertAdjacentHTML('afterbegin', SVG.video);
  }
}

// ========== INITIALIZE DL BUTTON ==========
function initDlButton() {
  const dlBtn = document.getElementById('dl-btn');
  const span = dlBtn?.querySelector('span:first-child');
  if (span && span.textContent === '⬇') {
    span.innerHTML = SVG.dl;
  }
}

// ========== INITIALIZE CLEAR BUTTON ==========
function initClearButton() {
  const clearBtn = document.getElementById('clear-btn');
  if (clearBtn && clearBtn.textContent === '✕') {
    clearBtn.innerHTML = SVG.ext;
  }
}

// ========== INITIALIZE INPUT ICON ==========
function initInputIcon() {
  const inputGroup = document.querySelector('.input-group');
  if (inputGroup && !inputGroup.querySelector('.input-icon')) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'input-icon';
    iconSpan.innerHTML = SVG.link;
    inputGroup.insertBefore(iconSpan, inputGroup.firstChild);
  }
}

// ========== THEME TOGGLE (UPDATED WITH SVG) ==========
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  updateThemeBtn(next);
  localStorage.setItem('theme', next);
}

function updateThemeBtn(theme) {
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (theme === 'dark') {
    icon.innerHTML = SVG.sun;
    label.textContent = 'Light';
  } else {
    icon.innerHTML = SVG.moon;
    label.textContent = 'Dark';
  }
}

// ========== INITIALIZE HERO BADGE ==========
function initHeroBadge() {
  const badge = document.querySelector('.hero-badge');
  if (badge && !badge.querySelector('svg')) {
    badge.insertAdjacentHTML('afterbegin', SVG.sun);
  }
}

// ========== INITIALIZE PLATFORM PILLS ==========
function initPlatformPills() {
  const pills = document.querySelectorAll('.pill');
  const pillIcons = {
    'pill-yt': SVG.youtube,
    'pill-ig': SVG.instagram,
    'pill-tt': SVG.tiktok,
    'pill-fb': SVG.facebook,
    'pill-cc': SVG.capcut,
    'pill-sc': SVG.soundcloud,
    'pill-pt': SVG.pinterest,
    'pill-mf': SVG.mediafire
  };
  
  pills.forEach(pill => {
    for (const [className, icon] of Object.entries(pillIcons)) {
      if (pill.classList.contains(className) && !pill.querySelector('svg')) {
        pill.insertAdjacentHTML('afterbegin', icon);
        break;
      }
    }
  });
}

// ========== RUN ALL INITIALIZATIONS ==========
document.addEventListener('DOMContentLoaded', () => {
  initTypeButtons();
  initYtModeButtons();
  initDlButton();
  initClearButton();
  initInputIcon();
  initHeroBadge();
  initPlatformPills();
  
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeBtn(saved);
});

// ========== ORIGINAL FUNCTIONS ==========
function setType(type, el) {
  currentType = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('yt-mode').classList.toggle('show', type === 'youtube');
  clearResult();
}

function setYTMode(mode) {
  ytMode = mode;
  document.getElementById('yt-audio-btn').classList.toggle('active', mode === 'audio');
  document.getElementById('yt-video-btn').classList.toggle('active', mode === 'video');
}

function onInput(el) {
  document.getElementById('clear-btn').style.display = el.value ? 'block' : 'none';
  hideError();
}

function clearInput() {
  document.getElementById('url-input').value = '';
  document.getElementById('clear-btn').style.display = 'none';
  hideError();
}

function extractURL(raw) {
  const match = raw.trim().match(/https?:\/\/[^\s]+/);
  return match ? match[0] : raw.trim();
}

function showError(msg) {
  document.getElementById('error-msg').textContent = msg;
  document.getElementById('error-box').classList.add('show');
}

function hideError() {
  document.getElementById('error-box').classList.remove('show');
}

function setLoading(show, text = 'Fetching data...') {
  document.getElementById('loading').classList.toggle('show', show);
  document.getElementById('loading-text').textContent = text;
  document.getElementById('dl-btn').disabled = show;
  if (show) clearResult();
}

function clearResult() {
  const card = document.getElementById('result-card');
  card.classList.remove('show');
  card.innerHTML = '';
}

function showResult(html) {
  const card = document.getElementById('result-card');
  card.innerHTML = html;
  card.classList.add('show');
}

async function doDownload() {
  const raw = document.getElementById('url-input').value;
  if (!raw.trim()) { showError('Masukkan link dulu ya!'); return; }
  const url = extractURL(raw);
  if (!url) { showError('URL tidak valid.'); return; }
  hideError();

  switch (currentType) {
    case 'youtube': return ytMode === 'audio' ? fetchYTA(url) : fetchYTV(url);
    case 'instagram': return fetchIG(url);
    case 'tiktok': return fetchTT(url);
    case 'facebook': return fetchFB(url);
    case 'capcut': return fetchCC(url);
    case 'soundcloud': return fetchSC(url);
    case 'pinterest': return fetchPT(url);
    case 'mediafire': return fetchMF(url);
    case 'twitter': return fetchTW(url);
  }
}

async function apiFetch(endpoint) {
  console.log('[FETCH]', endpoint);
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  console.log('[RESPONSE]', data);
  if (data.status === false) throw new Error(data.message || data.msg || 'API error');
  return data;
}

// YOUTUBE AUDIO
async function fetchYTA(url) {
  setLoading(true, 'Mengambil audio YouTube...');
  try {
    let data;
    try {
      data = await apiFetch(`${BASE}/downloader/yta2?url=${encodeURIComponent(url)}`);
    } catch (e) {
      setLoading(true, 'Fallback 1...');
      try {
        data = await apiFetch(`${BASE}/downloader/yta3?url=${encodeURIComponent(url)}`);
      } catch (e2) {
        setLoading(true, 'Fallback 2...');
        data = await apiFetch(`${BASE}/downloader/yta4?url=${encodeURIComponent(url)}&apikey=kyx-api`);
      }
    }
    setLoading(false);
    renderYTA(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal mengambil audio. Cek link YouTube-nya ya.');
  }
}

function renderYTA(data) {
  const d = data.data || {};
  const meta = d.metadata || {};
  const dl = d.download || {};
  const r4 = data.result?.data || {};
  const title = meta.title || r4.title || 'Unknown';
  const thumb = meta.thumbnail || r4.thumbnail || '';
  const dur = meta.duration ? fmtDur(meta.duration) : '';
  const dlUrl = dl.url || r4.audio || '';
  const fname = dl.filename || 'audio.mp3';
  const quality = dl.quality || 'MP3';

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(255,64,64,0.12);">${SVG.music}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(255,64,64,0.12);color:#ff4040;">YT Audio</span>
    </div>
    ${thumb ? thumbHTML(thumb, title, dur ? `${SVG.clock} ${dur}` : '') : ''}
    <div class="result-body">
      <div class="result-grid">${dlItemHTML(SVG.music, fname, quality + ' · MP3', dlUrl, false)}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// YOUTUBE VIDEO
async function fetchYTV(url) {
  setLoading(true, 'Mengambil video YouTube...');
  try {
    let data;
    try {
      data = await apiFetch(`${BASE}/downloader/ytv2?url=${encodeURIComponent(url)}`);
    } catch (e) {
      setLoading(true, 'Fallback...');
      data = await apiFetch(`${BASE}/downloader/ytv3?url=${encodeURIComponent(url)}&apikey=kyx-api`);
    }
    setLoading(false);
    renderYTV(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal mengambil video. Cek link YouTube-nya ya.');
  }
}

function renderYTV(data) {
  const d = data.data || {};
  const meta = d.metadata || {};
  const dl = d.download || {};
  const title = meta.title || 'Unknown';
  const thumb = meta.thumbnail || '';
  const dur = meta.duration ? fmtDur(meta.duration) : '';
  const dlUrl = dl.url || '';
  const fname = dl.filename || 'video.mp4';
  const quality = dl.quality || dl.format || 'MP4';

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(255,64,64,0.12);">${SVG.video}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(255,64,64,0.12);color:#ff4040;">YT Video</span>
    </div>
    ${thumb ? thumbHTML(thumb, title, dur ? `${SVG.clock} ${dur} · ${quality}` : quality) : ''}
    <div class="result-body">
      <div class="result-grid">${dlItemHTML(SVG.video, fname, quality, dlUrl, true)}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// INSTAGRAM
async function fetchIG(url) {
  setLoading(true, 'Mengambil dari Instagram...');
  try {
    const data = await apiFetch(`${BASE}/downloader/instagram?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderIG(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari Instagram. Pastikan link publik & coba lagi.');
    console.error(e);
  }
}

function renderIG(data) {
  const result = data.result;
  if (!result) {
    showError('Response tidak valid');
    return;
  }
  
  let audios = [];
  let authorHtml = '';
  let timestampHtml = '';
  
  if (result.media?.audios && result.media.audios.length > 0) {
    audios = result.media.audios;
  }
  
  if (result.author) {
    authorHtml = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;padding:8px;background:var(--card);border-radius:12px;">
        ${result.author.profilePic ? `<img src="${esc(result.author.profilePic)}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">` : ''}
        <div style="flex:1">
          <div style="font-weight:600;font-size:.9rem">${esc(result.author.fullName || result.author.username)}</div>
          <div style="font-size:.75rem;color:var(--muted)">@${esc(result.author.username)}</div>
        </div>
        ${result.author.verified ? '<span style="font-size:1rem;color:#1da1f2;">✓</span>' : ''}
      </div>
    `;
  }
  
  if (result.metadata?.createTime) {
    timestampHtml = `<div style="font-size:.7rem;color:var(--muted);margin-top:8px;">${SVG.clock} ${esc(result.metadata.createTime)}</div>`;
  }
  
// SLIDE / CAROUSEL
if (result.type === 'slide') {
  const slides = result.media?.slides || [];
  
  // Cek apakah ada slide yang punya video
  const videoSlide = slides.find(slide => slide.videos && slide.videos.length > 0);
  const hasVideoSlide = !!videoSlide;
  
  // KALAU ADA VIDEO DI CAROUSEL
  if (hasVideoSlide) {
    const images = videoSlide?.images || [];
    const videos = videoSlide?.videos || [];
    const bestImg = images.find(img => img.resolution === '1080x1350') || images[0];
    const thumb = bestImg?.url || '';
    const caption = result.metadata?.caption || 'Instagram Video';
    
    // Ambil cuma 1 video kualitas tertinggi
    const sortedVideos = [...videos].sort((a, b) => {
      const qualityA = parseInt(a.resolution) || 0;
      const qualityB = parseInt(b.resolution) || 0;
      return qualityB - qualityA;
    });
    const bestVideo = sortedVideos[0];
    
    // Audio items
    let audioItems = '';
    if (audios.length > 0) {
      audios.forEach((audio, idx) => {
        if (audio.url) {
          const label = `Audio ${idx + 1}${audio.bandwidth ? ` (${Math.round(audio.bandwidth / 1000)}kbps)` : ''}`;
          audioItems += dlItemHTML(SVG.music, label, audio.mimeType || 'Audio', audio.url, false);
        }
      });
    }
    
    // TAMPILKAN GALLERY IMAGE SLIDE LAINNYA (kotak kecil kayak awal)
    let imageSlidesHtml = '';
    slides.forEach((slide, idx) => {
      // Lewati slide yang berisi video
      if (slide.videos && slide.videos.length > 0) return;
      
      const images = slide.images || [];
      const bestImg = images.find(img => img.resolution === '1080x1350') || images[0];
      const imgUrl = bestImg?.url || '';
      if (imgUrl) {
        imageSlidesHtml += `<div class="slide-item">
          <img src="${esc(imgUrl)}" alt="slide ${idx + 1}" loading="lazy" onerror="this.style.opacity='.3'">
          <a href="${esc(imgUrl)}" target="_blank">${SVG.dl}</a>
        </div>`;
      }
    });
    
    showResult(`
      <div class="result-header">
        <div class="result-header-icon" style="background:rgba(217,70,239,0.12);">${SVG.video}</div>
        <span class="result-header-title">${esc(caption.substring(0, 100))}</span>
        <span class="result-platform-tag" style="background:rgba(217,70,239,0.12);color:#d946ef;">Instagram</span>
      </div>
      ${authorHtml}
      ${thumb ? thumbHTML(thumb, 'Preview Video', '') : ''}
      <div class="result-body">
        <!-- Video: cuma 1 item -->
        ${bestVideo?.url ? `
          <div style="margin-bottom:12px;">
            <div style="font-weight:500;margin-bottom:8px;">${SVG.video} Video</div>
            <div class="result-grid">
              ${dlItemHTML(SVG.video, bestVideo.resolution || 'Video', 'video/mp4', bestVideo.url, true)}
            </div>
          </div>
        ` : ''}
        
        <!-- Gambar slide lainnya (kotak kecil kayak awal) -->
        ${imageSlidesHtml ? `
          <div style="margin-top:12px;">
            <div style="font-weight:500;margin-bottom:8px;">${SVG.img} Gambar Lainnya</div>
            <div class="slide-gallery" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${imageSlidesHtml}</div>
          </div>
        ` : ''}
        
        ${audioItems ? `
          <div style="margin-top:12px;">
            <div style="font-weight:500;margin-bottom:8px;">${SVG.music} Audio</div>
            <div class="result-grid">${audioItems}</div>
          </div>
        ` : ''}
        ${timestampHtml}
      </div>
      <div class="media-player" id="media-player"></div>
    `);
    return;
  }
  
  // KALAU TIDAK ADA VIDEO, TAMPILIN CAROUSEL GAMBAR BIASA (SEMUA SLIDE)
  let slidesHtml = '';
  slides.forEach(slide => {
    const images = slide.images || [];
    const bestImg = images.find(img => img.resolution === '1080x1350') || images[0];
    const imgUrl = bestImg?.url || '';
    if (imgUrl) {
      slidesHtml += `<div class="slide-item">
        <img src="${esc(imgUrl)}" alt="slide" loading="lazy" onerror="this.style.opacity='.3'">
        <a href="${esc(imgUrl)}" target="_blank">${SVG.dl}</a>
      </div>`;
    }
  });
  
  const caption = result.metadata?.caption || '';
  
  let audioItems = '';
  if (audios.length > 0) {
    audios.forEach((audio, idx) => {
      if (audio.url) {
        const label = `Audio ${idx + 1}${audio.bandwidth ? ` (${Math.round(audio.bandwidth / 1000)}kbps)` : ''}`;
        audioItems += dlItemHTML(SVG.music, label, audio.mimeType || 'Audio', audio.url, false);
      }
    });
  }
  
  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(217,70,239,0.12);">${SVG.img}</div>
      <span class="result-header-title">Instagram Carousel</span>
      <span class="result-platform-tag" style="background:rgba(217,70,239,0.12);color:#d946ef;">Instagram</span>
    </div>
    ${authorHtml}
    <div class="result-body">
      ${caption ? `<div style="margin-bottom:12px;font-size:.82rem;color:var(--muted)">${esc(caption.substring(0, 150))}${caption.length > 150 ? '...' : ''}</div>` : ''}
      ${slidesHtml ? `<div class="slide-gallery" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;">${slidesHtml}</div>` : '<p style="color:var(--muted);font-size:.82rem">Tidak ada gambar.</p>'}
      ${audioItems ? `<div style="margin-top:12px;"><div style="font-weight:500;margin-bottom:8px;">${SVG.music} Audio</div><div class="result-grid">${audioItems}</div></div>` : ''}
      ${timestampHtml}
    </div>
  `);
  return;
}
  
  // VIDEO
  if (result.type === 'video') {
    let videos = [];
    let thumbnails = [];
    let caption = result.metadata?.caption || 'Instagram Video';
    
    if (result.media) {
      if (result.media.video_url) {
        videos.push({
          url: result.media.video_url,
          qualityLabel: 'Video',
          resolution: 'HD',
          mimeType: 'video/mp4'
        });
      }
      if (result.media.thumbnails) {
        thumbnails.push({ url: result.media.thumbnails });
      }
    }
    
    if (result.media?.videos && result.media.videos.length > 0) {
      videos = [...result.media.videos];
    }
    
    if (result.media?.thumbnails && result.media.thumbnails.length > 0 && thumbnails.length === 0) {
      thumbnails = result.media.thumbnails;
    }
    
    const thumb = thumbnails.length > 0 ? (thumbnails[0].url || thumbnails[0]) : '';
    
    const sortedVideos = [...videos].sort((a, b) => {
      const qualityA = parseInt(a.qualityLabel) || 0;
      const qualityB = parseInt(b.qualityLabel) || 0;
      return qualityB - qualityA;
    });
    
    let videoItems = '';
    sortedVideos.forEach(v => {
      if (v.url) {
        const label = v.qualityLabel || v.resolution || 'Video';
        videoItems += dlItemHTML(SVG.video, label, v.mimeType || 'MP4', v.url, true);
      }
    });
    
    let audioItems = '';
    if (audios.length > 0) {
      audios.forEach((audio, idx) => {
        if (audio.url) {
          const label = `Audio ${idx + 1}${audio.bandwidth ? ` (${Math.round(audio.bandwidth / 1000)}kbps)` : ''}`;
          audioItems += dlItemHTML(SVG.music, label, audio.mimeType || 'Audio', audio.url, false);
        }
      });
    }
    
    showResult(`
      <div class="result-header">
        <div class="result-header-icon" style="background:rgba(217,70,239,0.12);">${SVG.video}</div>
        <span class="result-header-title">${esc(caption.substring(0, 100))}</span>
        <span class="result-platform-tag" style="background:rgba(217,70,239,0.12);color:#d946ef;">Instagram</span>
      </div>
      ${authorHtml}
      ${thumb ? thumbHTML(thumb, 'Preview Video', '') : ''}
      <div class="result-body">
        ${videoItems ? `<div style="margin-bottom:12px;"><div style="font-weight:500;margin-bottom:8px;">${SVG.video} Video</div><div class="result-grid">${videoItems}</div></div>` : ''}
        ${audioItems ? `<div style="margin-top:12px;"><div style="font-weight:500;margin-bottom:8px;">${SVG.music} Audio</div><div class="result-grid">${audioItems}</div></div>` : ''}
        ${timestampHtml}
      </div>
      <div class="media-player" id="media-player"></div>
    `);
    return;
  }
  
  showError('Tipe konten tidak dikenali');
}

// TIKTOK
async function fetchTT(url) {
  setLoading(true, 'Mengambil dari TikTok...');
  try {
    const data = await apiFetch(`${BASE}/downloader/tiktok?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderTT(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari TikTok.');
  }
}

function renderTT(data) {
  const d = data.result?.data || data.data || {};
  const title = d.title || 'TikTok Video';
  const cover = d.cover || d.origin_cover || d.ai_dynamic_cover || '';
  const hdplay = d.hdplay || d.play || '';
  const play = d.play || d.hdplay || '';
  const wmplay = d.wmplay || '';
  const music = d.music || '';
  const author = d.author || {};
  const musicInfo = d.music_info || {};
  const dur = d.duration ? fmtDur(d.duration) : '';
  
  // Ambil array images (untuk konten foto/slideshow) - SAMA KAYAK INSTAGRAM
  const images = d.images || [];
  
  const stats = [
    d.play_count ? `${SVG.video} ${fmtNum(d.play_count)}` : null,
    d.digg_count ? `♥ ${fmtNum(d.digg_count)}` : null,
    d.comment_count ? `◎ ${fmtNum(d.comment_count)}` : null,
    d.share_count ? `⇗ ${fmtNum(d.share_count)}` : null,
    d.collect_count ? `⊕ ${fmtNum(d.collect_count)}` : null,
  ].filter(Boolean);
  
  let items = '';
  if (hdplay) items += dlItemHTML(SVG.video, 'HD · No Watermark', 'MP4 · High Quality', hdplay, true);
  if (play && play !== hdplay) items += dlItemHTML(SVG.video, 'Standard No WM', 'MP4', play, true);
  if (wmplay && wmplay !== play) items += dlItemHTML(SVG.video, 'Watermark', 'MP4 · WM', wmplay, true);
  if (music) items += dlItemHTML(SVG.music, musicInfo.title || 'Original Sound', `by ${musicInfo.author || 'Unknown'}`, music, false);
  
  const authorLine = author.nickname ? `@${esc(author.unique_id || '')} · ${esc(author.nickname)}` : '';
  const metaSub = [dur, authorLine].filter(Boolean).join(' · ');
  
  // BUAT SLIDE/GALLERY GAMBAR - STYLE SAMA PERSIS KAYAK INSTAGRAM
  let slideHtml = '';
  if (images.length > 0) {
    let slidesHtml = '';
    images.forEach((imgUrl, idx) => {
      slidesHtml += `
        <div class="slide-item">
          <img src="${esc(imgUrl)}" alt="Slide ${idx + 1}" loading="lazy" onerror="this.style.opacity='.3'">
          <a href="${esc(imgUrl)}" target="_blank">${SVG.dl}</a>
        </div>
      `;
    });
    
    slideHtml = `
      <div class="slide-gallery">
        ${slidesHtml}
      </div>
    `;
  }
  
  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(0,229,189,0.12);">${images.length > 0 ? SVG.img : SVG.video}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(0,229,189,0.12);color:#00e5bd;">TikTok</span>
    </div>
    ${!images.length && cover ? thumbHTML(cover, title, metaSub) : ''}
    ${slideHtml}
    <div class="result-body">
      <div class="result-grid">${items}</div>
    </div>
    ${stats.length ? `<div class="stats-bar">${stats.map(s => `<span class="stat">${s}</span>`).join('')}</div>` : ''}
    <div class="media-player" id="media-player"></div>
  `);
}

// FACEBOOK
async function fetchFB(url) {
  setLoading(true, 'Mengambil dari Facebook...');
  try {
    const data = await apiFetch(`${BASE}/downloader/facebook?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderFB(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari Facebook.');
  }
}

function renderFB(data) {
  const r = data.result || {};
  const title = r.title || 'Facebook Video';
  const hd = r.hd || '';
  const sd = r.sd || '';

  let items = '';
  if (hd) items += dlItemHTML(SVG.video, 'HD Quality', `${r.hd_size || 'MP4'} · 720p`, hd, true);
  if (sd) items += dlItemHTML(SVG.video, 'SD Quality', `${r.sd_size || 'MP4'} · 360p`, sd, true);

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(74,144,226,0.12);">${SVG.video}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(74,144,226,0.12);color:#4a90e2;">Facebook</span>
    </div>
    <div class="result-body">
      <div class="result-grid">${items || '<p style="color:var(--muted);font-size:.82rem">Tidak ada video.</p>'}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// CAPCUT
async function fetchCC(url) {
  setLoading(true, 'Mengambil dari CapCut...');
  try {
    const data = await apiFetch(`${BASE}/downloader/capcut?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderCC(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari CapCut.');
  }
}

function renderCC(data) {
  const r = data.result || {};
  const title = r.title || 'CapCut Template';
  const poster = r.posterUrl || '';
  const videoUrl = r.videoUrl || '';
  const author = r.author || {};
  const sub = [r.date, r.pengguna, r.likes].filter(Boolean).join(' · ');

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(251,191,36,0.12);">${SVG.video}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(251,191,36,0.12);color:#fbbf24;">CapCut</span>
    </div>
    ${poster ? thumbHTML(poster, title, author.name ? `by ${esc(author.name)}` : sub) : ''}
    <div class="result-body">
      <div class="result-grid">
        ${videoUrl ? dlItemHTML(SVG.video, title, sub, videoUrl, true) : '<p style="color:var(--muted);font-size:.82rem">Tidak ada video ditemukan.</p>'}
      </div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// SOUNDCLOUD
async function fetchSC(url) {
  setLoading(true, 'Mengambil dari SoundCloud...');
  try {
    const data = await apiFetch(`${BASE}/downloader/soundcloud?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderSC(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari SoundCloud. Pastikan link valid.');
    console.error(e);
  }
}

function renderSC(data) {
  const r = data.result || {};
  const title = r.title || 'SoundCloud Audio';
  const thumb = r.thumbnail || '';
  const dur = r.duration || '';
  const audios = Array.isArray(r.audios) ? r.audios : [];
  const items = audios.map(audio => {
    const label = `${audio.quality || 'Audio'}${audio.extension ? ` · ${audio.extension.toUpperCase()}` : ''}`.trim();
    const sub = [audio.size, audio.extension ? audio.extension.toUpperCase() : ''].filter(Boolean).join(' · ');
    return dlItemHTML(SVG.music, label, sub, audio.download || audio.url || '', false);
  }).join('');

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(255,119,0,0.12);">${SVG.music}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(255,119,0,0.12);color:#ff7700;">SoundCloud</span>
    </div>
    ${thumb ? thumbHTML(thumb, title, dur ? `${SVG.clock} ${dur}` : '') : ''}
    <div class="result-body">
      <div class="result-grid">${items || '<p style="color:var(--muted);font-size:.82rem">Tidak ada audio ditemukan.</p>'}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// PINTEREST
async function fetchPT(url) {
  setLoading(true, 'Mengambil dari Pinterest...');
  try {
    let data;
    try {
      data = await apiFetch(`${BASE}/downloader/pinterest?url=${encodeURIComponent(url)}`);
    } catch (e) {
      try {
        data = await apiFetch(`${BASE}/downloader/pinterest2?url=${encodeURIComponent(url)}`);
      } catch (e2) {
        data = await apiFetch(`${BASE}/downloader/pinterest3?url=${encodeURIComponent(url)}`);
      }
    }
    setLoading(false);
    renderPT(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari Pinterest. Pastikan link valid.');
    console.error(e);
  }
}

function renderPT(data) {
  const r = data.result || {};
  const title = r.title || 'Pinterest Media';
  const thumb = r.thumbnail || '';
  const medias = Array.isArray(r.medias) ? r.medias : [];
  const items = medias.map(media => {
    const icon = media.type === 'video' ? SVG.video : SVG.img;
    const label = media.quality || (media.type ? media.type.toUpperCase() : 'Media');
    const sub = [media.extension ? media.extension.toUpperCase() : '', media.type].filter(Boolean).join(' · ');
    return dlOnlyItemHTML(icon, label, sub, media.url || media.download || '');
  }).join('');

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(255,0,128,0.12);">${SVG.img}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(255,0,128,0.12);color:#ff0080;">Pinterest</span>
    </div>
    ${thumb ? thumbHTML(thumb, title, '') : ''}
    <div class="result-body">
      <div class="result-grid">${items || '<p style="color:var(--muted);font-size:.82rem">Tidak ada media ditemukan.</p>'}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// MEDIAFIRE
async function fetchMF(url) {
  setLoading(true, 'Mengambil dari MediaFire...');
  try {
    let data;
    try {
      data = await apiFetch(`${BASE}/downloader/mediafire?url=${encodeURIComponent(url)}`);
    } catch (e) {
      data = await apiFetch(`${BASE}/downloader/mediafire2?url=${encodeURIComponent(url)}`);
    }
    setLoading(false);
    renderMF(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari MediaFire. Pastikan link valid.');
    console.error(e);
  }
}

function renderMF(data) {
  const r = data.result || {};
  const title = r.title || r.filename || 'MediaFire File';
  const thumb = r.thumbnail || '';
  const downloadUrl = r.downloadUrl || r.url || r.download || r.link || '';
  const size = r.size || '';
  let items = '';

  if (Array.isArray(r.medias)) {
    items = r.medias.map(media => {
      const label = media.quality || media.extension || media.type || 'Download';
      const sub = [media.extension ? media.extension.toUpperCase() : '', media.type, media.size].filter(Boolean).join(' · ');
      return dlOnlyItemHTML(SVG.dl, label, sub, media.url || media.download || '');
    }).join('');
  }

  if (!items && downloadUrl) {
    items = dlOnlyItemHTML(SVG.dl, title, size || 'Unduhan', downloadUrl);
  }

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(87,88,255,0.12);">${SVG.dl}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(87,88,255,0.12);color:#5758ff;">MediaFire</span>
    </div>
    ${thumb ? thumbHTML(thumb, title, size ? `${size}` : '') : ''}
    <div class="result-body">
      <div class="result-grid">${items || '<p style="color:var(--muted);font-size:.82rem">Tidak ada link download ditemukan.</p>'}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

// TWITTER
async function fetchTW(url) {
  setLoading(true, 'Mengambil dari Twitter...');
  try {
    const data = await apiFetch(`${BASE}/downloader/twitter?url=${encodeURIComponent(url)}`);
    setLoading(false);
    renderTW(data);
  } catch (e) {
    setLoading(false);
    showError('Gagal ambil dari Twitter.');
  }
}

function renderTW(data) {
  const r = data.result || {};
  const title = r.title || 'Twitter Video';
  const hd = r.hd || '';
  const sd = r.sd || '';

  let items = '';
  if (hd) items += dlItemHTML(SVG.video, 'HD Quality', `${r.hd_size || 'MP4'} · 720p`, hd, true);
  if (sd) items += dlItemHTML(SVG.video, 'SD Quality', `${r.sd_size || 'MP4'} · 360p`, sd, true);

  showResult(`
    <div class="result-header">
      <div class="result-header-icon" style="background:rgba(29,161,242,0.12);">${SVG.video}</div>
      <span class="result-header-title">${esc(title)}</span>
      <span class="result-platform-tag" style="background:rgba(29,161,242,0.12);color:#1da1f2;">Twitter</span>
    </div>
    <div class="result-body">
      <div class="result-grid">${items || '<p style="color:var(--muted);font-size:.82rem">Tidak ada video.</p>'}</div>
    </div>
    <div class="media-player" id="media-player"></div>
  `);
}

function thumbHTML(src, title, sub) {
  return `<div class="thumb-wrap">
    <img src="${esc(src)}" alt="thumbnail" onerror="this.parentElement.style.display='none'">
    <div class="meta-overlay">
      <div class="meta-title">${esc(title)}</div>
      ${sub ? `<div class="meta-sub">${sub}</div>` : ''}
    </div>
  </div>`;
}

function dlItemHTML(iconSVG, title, sub, url, isVideo) {
  const playFn = isVideo ? 'toggleVideo' : 'toggleAudio';
  const safeUrl = esc(url);
  const safeTitle = esc(title);
  const safeSub = esc(sub);
  const randomId = Math.random().toString(36).slice(2, 7);
  
  return `<div class="dl-item">
    <div class="dl-item-icon">${iconSVG}</div>
    <div class="dl-item-info">
      <div class="dl-item-title">${safeTitle}</div>
      <div class="dl-item-sub">${safeSub}</div>
    </div>
    <div class="dl-item-actions">
      <button class="action-btn btn-play" id="play-${randomId}" onclick="${playFn}('${safeUrl.replace(/'/g, "\\'")}', this)">
        ${SVG.play} Play
      </button>
      <button class="action-btn btn-dl" onclick="forceDownload('${safeUrl.replace(/'/g, "\\'")}', '${safeTitle.replace(/'/g, "\\'")}', ${isVideo})">
        ${SVG.dl} DL
      </button>
    </div>
  </div>`;
}

function dlOnlyItemHTML(iconSVG, title, sub, url) {
  const safeUrl = esc(url);
  const safeTitle = esc(title);
  const safeSub = esc(sub);
  const randomId = Math.random().toString(36).slice(2, 7);

  return `<div class="dl-item">
    <div class="dl-item-icon">${iconSVG}</div>
    <div class="dl-item-info">
      <div class="dl-item-title">${safeTitle}</div>
      <div class="dl-item-sub">${safeSub}</div>
    </div>
    <div class="dl-item-actions">
      <button class="action-btn btn-dl" id="dl-${randomId}" onclick="forceDownload('${safeUrl.replace(/'/g, "\\'")}', '${safeTitle.replace(/'/g, "\\'")}', false)">
        ${SVG.dl} DL
      </button>
    </div>
  </div>`;
}

async function forceDownload(url, title, isVideo) {
  const btn = event.target;
  const originalText = btn.innerHTML;
  
  try {
    btn.innerHTML = '⏳ Downloading...';
    btn.disabled = true;
    showToast('⏳ Mengambil file...', 'info');
    
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const blob = await response.blob();
    
    // Bersihin nama file dari title
    let cleanName = title.replace(/[^\w\s.-]/gi, '').substring(0, 40);
    if (cleanName === '') cleanName = isVideo ? 'video' : 'audio';
    
    // Hapus ekstensi yang udah ada
    cleanName = cleanName.replace(/\.(mp3|mp4|m4a|webm|mkv|media)$/i, '');
    
    // TAMBAHIN EKSTENSI YANG BENER
    if (isVideo) {
      cleanName += '.mp4';
    } else {
      // Audio: paksa .mp3 walau blob type nya mp4
      cleanName += '.mp3';
    }
    
    // Paksa MIME type
    const mimeType = isVideo ? 'video/mp4' : 'audio/mpeg';
    const finalBlob = new Blob([blob], { type: mimeType });
    
    const blobUrl = URL.createObjectURL(finalBlob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = cleanName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
    showToast(`✅ ${cleanName} selesai!`, 'success');
  } catch (error) {
    console.error('Download gagal:', error);
    showToast('❌ Gagal download, buka di tab baru', 'error');
    window.open(url, '_blank');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// ========== TOAST NOTIFICATION FUNCTION ==========
function showToast(message, type = 'info') {
  const existingToast = document.querySelector('.download-toast');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = `download-toast toast-${type}`;
  toast.innerHTML = `<div class="toast-content">${message}</div>`;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleAudio(url, btn) {
  const player = document.getElementById('media-player');
  if (!player) return;
  const ex = player.querySelector('audio');
  if (ex && ex.src === url) {
    player.classList.remove('show');
    player.innerHTML = '';
    btn.innerHTML = `${SVG.play} Play`;
    return;
  }
  document.querySelectorAll('.action-btn.btn-play').forEach(b => { b.innerHTML = `${SVG.play} Play`; });
  player.innerHTML = `
    <audio controls autoplay src="${esc(url)}" onerror="onMediaError(this)"></audio>
    <div class="player-note">Jika tidak bisa play, gunakan tombol DL untuk download langsung.</div>
  `;
  player.classList.add('show');
  btn.innerHTML = `${SVG.stop} Stop`;
  player.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toggleVideo(url, btn) {
  const player = document.getElementById('media-player');
  if (!player) return;
  const ex = player.querySelector('video');
  if (ex && ex.src === url) {
    player.classList.remove('show');
    player.innerHTML = '';
    btn.innerHTML = `${SVG.play} Play`;
    return;
  }
  document.querySelectorAll('.action-btn.btn-play').forEach(b => { b.innerHTML = `${SVG.play} Play`; });
  player.innerHTML = `
    <video controls autoplay src="${esc(url)}" playsinline onerror="onMediaError(this)"></video>
    <div class="player-note">Jika tidak bisa play, gunakan tombol DL untuk download langsung.</div>
  `;
  player.classList.add('show');
  btn.innerHTML = `${SVG.stop} Stop`;
  player.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function onMediaError(el) {
  const wrap = el.parentElement;
  const src = el.src || el.currentSrc || '';
  wrap.innerHTML = `
    <div style="padding:12px;text-align:center">
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:10px">Preview tidak bisa dimuat (CORS/CDN restriction).</p>
      <button class="action-btn btn-dl" onclick="forceDownload('${esc(src)}', 'media')">${SVG.ext} Download Langsung</button>
    </div>
  `;
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function fmtDur(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

function fmtNum(n) {
  return n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(1)+'K' : String(n);
}

document.getElementById('url-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') doDownload();
});