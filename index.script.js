// Navbar shrink
const navbars = document.querySelectorAll('.navbar');
const onScroll = () => {
  navbars.forEach(nav => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile drawer
const drawer = document.getElementById('mobile-drawer');
const toggleBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.drawer-close');
let lastFocus = null;

function trapFocus(e) {
  const focusable = drawer.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.key === "Tab") {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

function openDrawer() {
  lastFocus = document.activeElement;
  drawer.classList.add('open');
  drawer.hidden = false;
  toggleBtn.setAttribute('aria-expanded','true');
  document.body.classList.add('no-scroll');
  drawer.querySelector('a, button').focus();
  drawer.addEventListener('keydown', trapFocus);
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.hidden = true;
  toggleBtn.setAttribute('aria-expanded','false');
  document.body.classList.remove('no-scroll');
  drawer.removeEventListener('keydown', trapFocus);
  if (lastFocus) lastFocus.focus();
}

toggleBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);

// Click outside drawer closes it
drawer?.addEventListener('click', e => {
  if (e.target === drawer || e.target.tagName === "A") closeDrawer();
});

// Escape key closes drawer
window.addEventListener('keydown', e => {
  if (e.key === "Escape" && drawer.classList.contains('open')) closeDrawer();
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal-visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
