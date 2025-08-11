document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(nav) nav.classList.toggle("shrink", window.scrollY > 50);
});

const menuIconMenu = document.querySelector(".menu-icon");

if(menuIconMenu) menuIconMenu.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "flex";
});

const closeMenuBtn = document.querySelector(".close-btn");

if(closeMenuBtn) closeMenuBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "none";
});
