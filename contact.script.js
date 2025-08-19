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

function openDrawer() {
  lastFocus = document.activeElement;
  drawer.classList.add('open');
  drawer.hidden = false;
  toggleBtn.setAttribute('aria-expanded','true');
  drawer.querySelector('a').focus();
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawer.hidden = true;
  toggleBtn.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
toggleBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
drawer?.addEventListener('click', e => { if(e.target.tagName==="A") closeDrawer(); });
window.addEventListener('keydown', e => { if(e.key==="Escape" && drawer.classList.contains('open')) closeDrawer(); });

// Footer year (if you want to include it like index page)
document.getElementById('year')?.textContent = new Date().getFullYear();
