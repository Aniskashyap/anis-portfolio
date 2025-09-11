document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('show');
    });
  }

  const heroImg = document.querySelector('.hero-photo');
  const fallback = document.querySelector('.avatar');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      if (heroImg) heroImg.style.display = 'none';
      if (fallback) fallback.style.display = 'grid';
    });
  }
});

