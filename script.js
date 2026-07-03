document.addEventListener('DOMContentLoaded', function () {
  // ----- Scroll-reveal for cards, stack columns, about text -----
  var revealables = document.querySelectorAll('.card, .stack-col, .about-body');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // reveal once, don't re-hide
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (el) { observer.observe(el); });
  }

  // ----- Active nav link highlighting -----
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll('main section[id]');

  function highlightNav() {
    var current = '';
    sections.forEach(function (section) {
      if (window.pageYOffset >= section.offsetTop - section.clientHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  // ----- Dynamic year in footer -----
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
