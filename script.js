const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const navLinks = document.getElementById("nav");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});
closeicon.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
