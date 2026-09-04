// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

// Typed effect
const phrases = [
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'React + Flask Builder',
  'End-to-End ML Systems',
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed');
function type() {
  const phrase = phrases[pi];
  el.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
  if (!deleting && ci > phrase.length) { deleting = true; setTimeout(type, 1400); return; }
  if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; ci = 0; }
  setTimeout(type, deleting ? 45 : 80);
}
type();

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .skill-card, .stat, .cert-card, .contact-card, .timeline-item, .about-text, .about-avatar, .resume-card')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });


// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent2)' : '';
  });
});
