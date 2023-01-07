 const menuBar = document.querySelector(".menu-bar");
 const menuNav = document.querySelector(".menu-navigation");

 menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
 });

const navBar = document.querySelector(".navbar");

window.addEventListener('click', () => {
  document.getElementById("song").play()
});