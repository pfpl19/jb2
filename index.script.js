// Navbar shrink + background
const nav = document.querySelector('.navbar');
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile drawer toggle + basic focus trap
const drawer = document.getElementById('mobile-drawer');
const toggleBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.drawer-close');
let lastFocus = null;

function openDrawer(){
  lastFocus = document.activeElement;
  drawer.hidden = false;
  toggleBtn.setAttribute('aria-expanded','true');
  drawer.querySelector('a, button').focus();
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  drawer.hidden = true;
  toggleBtn.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

drawer?.addEventListener('click', (e)=>{
  if(e.target.tagName === 'A') closeDrawer();
});

// Escape key closes drawer
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && !drawer.hidden) closeDrawer();
});

// Reveal-on-scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal-visible');
      io.unobserve(entry.target);
    }
  });
},{threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Swiper for reviews
const reviewSwiper = new Swiper('.review-swiper', {
  loop: true,
  autoplay: { delay: 3200, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: { enabled: true },
  breakpoints: {
    700: { slidesPerView: 2, spaceBetween: 18 }
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
