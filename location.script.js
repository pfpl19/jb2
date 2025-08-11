document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(nav) nav.classList.toggle("shrink", window.scrollY > 50);
});

const menuIconLocation = document.querySelector(".menu-icon");

if(menuIconLocation) menuIconLocation.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "flex";
});

const closeLocationBtn = document.querySelector(".close-btn");

if(closeLocationBtn) closeLocationBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "none";
});
