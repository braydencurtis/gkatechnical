// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Scroll-to-top visibility
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id], div[id="trust"]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    Request Sent!
  `;
  btn.style.background = '#3d9e56';
  btn.style.color = '#fff';

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      Send Service Request
    `;
    btn.style.background = '';
    btn.style.color = '';
    document.getElementById('service-form').reset();
  }, 3000);
}

// Smooth active-link hover reset
navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    // keep active color from scroll observer
  });
});
