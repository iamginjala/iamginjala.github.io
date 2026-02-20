// ================================
// NAVBAR SCROLL EFFECT
// ================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ================================
// HAMBURGER MENU
// ================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================================
// TYPED TEXT EFFECT
// ================================
const roles = [
  'Software Developer',
  'Data Engineer',
  'Problem Solver',
  'Open Source Enthusiast',
];

let roleIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;
const typedEl   = document.getElementById('typed');

function type() {
  const current = roles[roleIndex];
  const displayed = isDeleting
    ? current.slice(0, charIndex--)
    : current.slice(0, charIndex++);

  typedEl.innerHTML = displayed + '<span class="cursor"></span>';

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex > current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    charIndex  = 0;
    roleIndex  = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}
type();

// ================================
// FOOTER YEAR
// ================================
document.getElementById('year').textContent = new Date().getFullYear();

// ================================
// FADE-IN ON SCROLL
// ================================
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.about-grid, .skill-category, .project-card, .contact-grid, .about-stats .stat'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ================================
// SMOOTH ACTIVE NAV LINK
// ================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navItems.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});

// ================================
// CONTACT FORM (placeholder handler)
// ================================
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Contact form submitted!\n\nTo make this work, connect it to Formspree or a backend service.');
});
