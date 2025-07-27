document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobile-menu");
  const mobileNav = document.getElementById("mobile-nav");

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  // Optional: Close mobile nav on link click
  document.querySelectorAll("#mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
});
