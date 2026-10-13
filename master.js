// ==========================================================
// Mobile menu (hamburger)
// ==========================================================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

function openMenu() {
  navLinks.classList.add("open");
  menuBtn.classList.add("active");
  menuIcon.className = "fa-solid fa-xmark";
  menuBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuBtn.classList.remove("active");
  menuIcon.className = "fa-solid fa-bars";
  menuBtn.setAttribute("aria-expanded", "false");
}

// Click the button: open if closed, close if open
menuBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close the menu after clicking any link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Close the menu if the screen becomes big again
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});