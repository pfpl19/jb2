document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('mobile-nav');


  mobileMenu.addEventListener('click', () => {
    const isVisible = mobileNav.syle.display === 'flex';
    mobileNav.style.display = isVisible ? 'none' : 'flex';
  });

  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
    });
  });
});
