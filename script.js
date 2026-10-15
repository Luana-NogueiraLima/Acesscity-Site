/* ============================================================
   AcessCity - script.js
   ============================================================ */

/* ── 1. NAVBAR: scroll + mobile menu ── */
(function () {
  const navbar     = document.querySelector('.navbar');
  const toggle     = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 300);
  });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* Marca link ativo */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ── 2. TOAST ── */
function showToast(title, msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon"></span><div class="toast-text"><div class="toast-title"></div><div class="toast-msg"></div></div>`;
    document.body.appendChild(toast);
  }
  toast.className = 'toast' + (type === 'error' ? ' error' : '');
  toast.querySelector('.toast-icon').textContent  = type === 'success' ? '✅' : '❌';
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-msg').textContent   = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ── 3. MODAL ── */
function openModal(id)  { const m = document.getElementById(id); if (m) { m.classList.add('open');    document.body.style.overflow = 'hidden'; } }
function closeModal(id) { const m = document.getElementById(id); if (m) { m.classList.remove('open'); document.body.style.overflow = '';       } }
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
  if (e.target.classList.contains('modal-close'))   closeModal(e.target.closest('.modal-overlay').id);
});

/* ── 4. TABS ── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(group => {
    group.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target  = btn.dataset.tab;
        const section = btn.closest('section') || document;
        section.querySelectorAll('.tab-panel').forEach(p => {
          p.style.display = p.dataset.panel === target ? 'block' : 'none';
        });
      });
    });
  });
}

/* ── 5. FILTROS ── */
function initFiltros() {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.dataset.filtro;
      document.querySelectorAll('.ocorrencia-card').forEach(card => {
        card.style.display = (filtro === 'todos' || card.dataset.categoria === filtro) ? 'block' : 'none';
      });
    });
  });
}

/* ── 6. FORMULÁRIO DE DENÚNCIA ── */
function initFormDenuncia() {
  const form = document.getElementById('form-denuncia');
  if (!form) return;

  /* Categoria */
  form.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      form.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const input = document.getElementById('input-categoria');
      if (input) input.value = btn.dataset.categoria;
    });
  });

  /* Urgência */
  form.querySelectorAll('.urgencia-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      form.querySelectorAll('.urgencia-btn').forEach(b => {
        b.className = b.className.replace(/selected-\w+/, '');
      });
      btn.classList.add('selected-' + btn.dataset.nivel);
      const input = document.getElementById('input-urgencia');
      if (input) input.value = btn.dataset.nivel;
    });
  });

  /* Upload */
  const uploadArea = document.getElementById('upload-area');
  const fileInput  = document.getElementById('file-input');
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
    uploadArea.addEventListener('drop', e => {
      e.preventDefault(); uploadArea.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) handleFileUpload(file, uploadArea);
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files[0]) handleFileUpload(fileInput.files[0], uploadArea);
    });
  }

  /* Submit → WhatsApp */
  form.addEventListener('submit', e => { e.preventDefault(); enviarWhatsApp(); });
}

function handleFileUpload(file, area) {
  if (!file.type.startsWith('image/')) { showToast('Arquivo inválido', 'Selecione uma imagem.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = ev => {
    area.innerHTML = `<img src="${ev.target.result}" alt="Foto" style="max-height:160px;border-radius:8px;margin:0 auto;">
      <p style="margin-top:8px;font-size:0.82rem;color:var(--cinza-500)">${file.name}</p>`;
  };
  reader.readAsDataURL(file);
}

/* ── 7. ENVIO WHATSAPP ── */
function enviarWhatsApp() {
  const nome   = document.getElementById('nome')?.value?.trim()      || '';
  const email  = document.getElementById('email')?.value?.trim()     || '';
  const local  = document.getElementById('local')?.value?.trim()     || '';
  const categ  = document.getElementById('input-categoria')?.value   || '';
  const urgenc = document.getElementById('input-urgencia')?.value    || '';
  const descr  = document.getElementById('descricao')?.value?.trim() || '';

  if (!nome || !local || !categ || !urgenc) {
    showToast('Campos obrigatórios', 'Preencha nome, local, categoria e urgência.', 'error');
    return;
  }

  const mensagem =
    `🏙️ *AcessCity – Nova Denúncia*\n\n` +
    `👤 *Nome:* ${nome}\n` +
    `📧 *E-mail:* ${email || 'Não informado'}\n` +
    `📍 *Local:* ${local}\n` +
    `🏷️ *Categoria:* ${categ}\n` +
    `⚠️ *Urgência:* ${urgenc.toUpperCase()}\n` +
    `📝 *Descrição:* ${descr || 'Sem descrição adicional'}\n\n` +
    `_Enviado pelo site AcessCity_`;

  /* ⚠️ Troque o número abaixo pelo número real do projeto */
  const numero = '5581999999999';
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
  showToast('Denúncia enviada! 🎉', 'Você será redirecionado ao WhatsApp.');

  document.getElementById('form-denuncia')?.reset();
  document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.urgencia-btn').forEach(b => { b.className = b.className.replace(/selected-\w+/, ''); });
  const area = document.getElementById('upload-area');
  if (area) area.innerHTML = `<div class="upload-icon">📷</div><p>Clique ou arraste uma foto aqui</p><small>PNG, JPG ou WEBP · máx. 10MB</small>`;
}

/* ── 8. PROGRESS BARS ANIMADAS ── */
function animateProgressBars() {
  document.querySelectorAll('.progress-fill[data-width]').forEach(bar => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { bar.style.width = bar.dataset.width; obs.unobserve(bar); } });
    }, { threshold: 0.5 });
    obs.observe(bar);
  });
}

/* ── 9. CONTADORES ANIMADOS ── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target   = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start    = performance.now();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        obs.unobserve(el);
        function update(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target).toLocaleString('pt-BR') + (el.dataset.suffix || '');
          if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ── 10. ACESSIBILIDADE: alto contraste + tamanho de fonte ── */
function initAcessibilidade() {
  const btn = document.getElementById('btn-contraste');
  if (btn) {
    if (localStorage.getItem('highContrast') === 'true') document.body.classList.add('high-contrast');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
      showToast('Acessibilidade', document.body.classList.contains('high-contrast') ? 'Alto contraste ativado.' : 'Alto contraste desativado.');
    });
  }
  const btnFonte = document.getElementById('btn-fonte');
  if (btnFonte) {
    let fontSize = parseFloat(localStorage.getItem('fontSize') || '16');
    btnFonte.addEventListener('click', () => {
      fontSize = fontSize >= 20 ? 14 : fontSize + 2;
      document.documentElement.style.fontSize = fontSize + 'px';
      localStorage.setItem('fontSize', fontSize);
      showToast('Fonte', `Tamanho: ${fontSize}px`);
    });
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initFiltros();
  initFormDenuncia();
  animateProgressBars();
  animateCounters();
  initAcessibilidade();
});