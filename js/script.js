// ─── NAVIGATION ───────────────────────────────────────────────
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.sidebar-link[data-section]');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');

  links.forEach(l => {
    if (l.dataset.section === id) l.classList.add('active');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#' + id);
  updateNavButtons(id);
  closeSidebar();
}

// ─── SECTION ORDER ─────────────────────────────────────────────
const sectionOrder = Array.from(links).map(l => l.dataset.section).filter(Boolean);

function updateNavButtons(currentId) {
  const idx = sectionOrder.indexOf(currentId);
  const prevBtn = document.getElementById('nav-prev');
  const nextBtn = document.getElementById('nav-next');

  if (!prevBtn || !nextBtn) return;

  if (idx > 0) {
    const prevId = sectionOrder[idx - 1];
    const prevLink = document.querySelector(`.sidebar-link[data-section="${prevId}"]`);
    prevBtn.style.display = '';
    prevBtn.querySelector('.nav-title').textContent = prevLink?.textContent.trim() || '';
    prevBtn.onclick = () => showSection(prevId);
  } else {
    prevBtn.style.display = 'none';
  }

  if (idx < sectionOrder.length - 1) {
    const nextId = sectionOrder[idx + 1];
    const nextLink = document.querySelector(`.sidebar-link[data-section="${nextId}"]`);
    nextBtn.style.display = '';
    nextBtn.querySelector('.nav-title').textContent = nextLink?.textContent.trim() || '';
    nextBtn.onclick = () => showSection(nextId);
  } else {
    nextBtn.style.display = 'none';
  }
}

links.forEach(l => {
  l.addEventListener('click', () => showSection(l.dataset.section));
});

// ─── THEME TOGGLE ─────────────────────────────────────────────
const themeBtn = document.getElementById('theme-btn');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeBtn(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

function updateThemeBtn(theme) {
  themeBtn.innerHTML = theme === 'dark'
    ? '<span>☀️</span> Světlý režim'
    : '<span>🌙</span> Tmavý režim';
}

// ─── MOBILE MENU ─────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');

menuBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
});

overlay?.addEventListener('click', closeSidebar);

function closeSidebar() {
  if (window.innerWidth > 768) return;
  sidebar.classList.remove('open');
  if (overlay) overlay.style.display = 'none';
}

// ─── COPY BUTTONS ─────────────────────────────────────────────
document.querySelectorAll('pre').forEach(pre => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Kopírovat';
  pre.appendChild(btn);

  btn.addEventListener('click', () => {
    const code = pre.querySelector('code')?.innerText || pre.innerText.replace('Kopírovat', '').trim();
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = '✓ Zkopírováno!';
      setTimeout(() => btn.textContent = 'Kopírovat', 2000);
    });
  });
});

// ─── SEARCH ─────────────────────────────────────────────────
const searchInput = document.getElementById('sidebar-search');
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  links.forEach(l => {
    const parent = l.closest('.sidebar-section');
    const match = l.textContent.toLowerCase().includes(q);
    l.style.display = (q === '' || match) ? '' : 'none';
  });
  document.querySelectorAll('.sidebar-section-title').forEach(t => {
    const section = t.closest('.sidebar-section');
    const visible = section.querySelectorAll('.sidebar-link:not([style*="none"])').length;
    section.style.display = (q === '' || visible > 0) ? '' : 'none';
  });
});

// ─── OVERVIEW CARDS ─────────────────────────────────────────────
document.querySelectorAll('.overview-item[data-target]').forEach(item => {
  item.addEventListener('click', () => showSection(item.dataset.target));
});

// ─── INIT ─────────────────────────────────────────────────
const hash = location.hash.slice(1);
if (hash && document.getElementById(hash)) {
  showSection(hash);
} else {
  showSection(sectionOrder[0]);
}
