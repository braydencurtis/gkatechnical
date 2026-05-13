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
const serviceForm = document.getElementById('service-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');
const submitBtn = document.getElementById('submit-btn');
const submitBtnOriginalHTML = submitBtn ? submitBtn.innerHTML : '';

if (serviceForm) {
  serviceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending…';
    formError.style.display = 'none';

    try {
      const res = await fetch('https://formspree.io/f/xlgzvnjy', {
        method: 'POST',
        body: new FormData(serviceForm),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        serviceForm.style.display = 'none';
        serviceForm.closest('.contact-form').querySelector('.form-title').style.display = 'none';
        formSuccess.style.display = 'flex';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        formError.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnOriginalHTML;
      }
    } catch {
      formError.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.innerHTML = submitBtnOriginalHTML;
    }
  });
}

// Smooth active-link hover reset
navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    // keep active color from scroll observer
  });
});
