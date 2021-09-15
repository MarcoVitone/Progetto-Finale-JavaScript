let menu = document.querySelector(".menu");
let ham = document.querySelector(".ham");
let menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    const span = document.createElement('span');
    span.className = "material-icons";
    span.innerHTML = `close`;
    menuIcon.style.display = "block";
  }
}

let menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)
