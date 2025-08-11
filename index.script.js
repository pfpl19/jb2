document.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("shrink", window.scrollY > 50);
});

const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector("mobile-overlay");
const closeBtn = document.querySelector(".close-btn");
if(menuIcon) menuIcon.addEventListener("click", () => overlay.style.display = "flex");
if(closeBtn) closeBtn.addEventListener("click", () => overlay.style.display = "none");

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: el: ".swiper-pagination", clickable: true },
    slidesPerView: 1,
    spaceBetween: 20,
});
