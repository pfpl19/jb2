document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(nav) nav.classList.toggle("shrink", window.scrollY > 50);
});

const menuIconContact = document.querySelector(".menu-icon");

if(menuIconContact) menuIconContact.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "flex";
});

const closeContactBtn = document.querySelector(".close-btn");

if(closeContactBtn) closeContactBtn.addEventListener("click", () => {
  const overlay = document.querySelector(".mobile-overlay");
  if(overlay) overlay.style.display = "none";
});
