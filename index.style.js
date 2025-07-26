document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const overlayMenu = document.getElementById('overlay-menu');
  const closeOverlay = document.getElementById('close-overlay');

  // toggle overlay on hamburger click
  menuToggle.addEventListener('click', () => {
    overlayMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // close overlay on close button
  closeOverlay.addEventListener('click', () => {
    overlayMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  });

  // close overlay when a nav link is clicked
  overlayMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlayMenu.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
});
