// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
const themeImage = document.getElementById('theme-image');
const html = document.documentElement;

// Set default theme to dark and image on page load
window.addEventListener("DOMContentLoaded", () => {
  html.classList.add("dark");
  toggleBtn.textContent = "☀️"; // Light mode icon
  themeImage.src = './claymorphic-programmer.png';
});

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  // Change icon based on theme
  if (html.classList.contains("dark")) {
    toggleBtn.textContent = "☀️"; // Light mode icon
    themeImage.src = './claymorphic-programmer.png';
  } else {
    toggleBtn.textContent = "🌙"; // Dark mode icon
    themeImage.src = './claymorphic-programmer-light-mode.jpg';
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
