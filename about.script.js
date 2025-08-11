document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(nav) nav.classList.toggle("shrink", window.scrollY > 50);
});

const menuIconAbout = document.querySelector(".menu-icon");

if(menuIconAbout) menuIconAbout.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "flex";
});

const closeAboutBtn = document.querySelector(".close-btn");

if(closeAboutBtn) closeAboutBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "none";
});
