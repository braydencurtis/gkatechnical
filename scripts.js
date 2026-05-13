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
// Smooth active-link hover reset
navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    // keep active color from scroll observer
  });
});
