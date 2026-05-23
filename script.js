  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 120);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  window.addEventListener('load', () => {
    setTimeout(() => {
      const pb1 = document.getElementById('pb1');
      const pb2 = document.getElementById('pb2');
      if (pb1) { pb1.style.transition = 'width 1.4s cubic-bezier(.22,1,.36,1)'; pb1.style.width = '68%'; }
      if (pb2) { pb2.style.transition = 'width 1.4s cubic-bezier(.22,1,.36,1) 0.3s'; pb2.style.width = '42%'; }
    }, 600);
  });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.querySelector('.nav-links');
  let menuOpen = false;

  hamburgerBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      navLinks.style.cssText = `
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 68px; right: 0; left: 0;
        background: white;
        padding: 24px 5%;
        border-bottom: 1px solid var(--border);
        z-index: 99;
        gap: 18px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        animation: slideDown 0.3s ease;
      `;
    } else {
      navLinks.style.display = 'none';
    }
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (menuOpen) {
        menuOpen = false;
        navLinks.style.display = 'none';
      }
    });
  });
