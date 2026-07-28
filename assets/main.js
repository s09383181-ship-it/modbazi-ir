// ===== Render Games =====
function renderGames() {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    grid.innerHTML = GAMES.map(g => `
        <a href="games/${g.slug}.html" class="game-card">
            <div class="game-card-inner">
                <div class="game-card-img">
                    <span class="game-card-badge">${g.badge}</span>
                    ${g.icon}
                </div>
                <div class="game-card-content">
                    <h3 class="game-card-title">${g.title}</h3>
                    <p class="game-card-desc">${g.shortDesc}</p>
                    <div class="game-card-meta">
                        <span class="game-card-stars">⭐ ${g.rating}</span>
                        <span class="game-card-link">دانلود ←</span>
                    </div>
                </div>
            </div>
        </a>
    `).join('');
}

// ===== Render Blog =====
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = BLOG_POSTS.slice(0, 6).map(p => `
        <a href="blog/${p.slug}.html" class="blog-card">
            <div class="blog-card-img">
                <span class="blog-card-cat">${p.cat}</span>
                ${p.icon}
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title">${p.title}</h3>
                <p class="blog-card-meta">${p.date}</p>
            </div>
        </a>
    `).join('');
}

// ===== Render Latest =====
function renderLatest() {
    const list = document.getElementById('latestList');
    if (!list) return;
    list.innerHTML = LATEST_MODS.map(m => `
        <a href="#${m.game}" class="latest-item">
            <div class="latest-icon">${m.icon}</div>
            <div class="latest-info">
                <div class="latest-title">${m.game}</div>
                <div class="latest-meta">${m.version} • ${m.date}</div>
            </div>
            ${m.isNew ? '<span class="latest-new">جدید</span>' : ''}
        </a>
    `).join('');
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.remove('open'));
    });
}

// ===== Stats Counter =====
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    const startVal = 0;
    const isLarge = target >= 1000;

    const format = (n) => {
        if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M+';
        if (n >= 1000) return (n / 1000).toFixed(0) + 'K+';
        return n + '+';
    };

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(startVal + (target - startVal) * ease);
        el.textContent = format(val);
        if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

function initCounters() {
    const els = document.querySelectorAll('.stat-num');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target);
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    els.forEach(el => observer.observe(el));
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    renderBlog();
    renderLatest();
    initMobileMenu();
    initCounters();
});
