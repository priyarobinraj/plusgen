const harmburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const navLinks = document.getElementById("nav");

harmburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
