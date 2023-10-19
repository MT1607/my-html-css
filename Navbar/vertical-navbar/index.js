let body = document.querySelector("body");
let toggleNav = document.querySelector(".mobile-nav-toggle");

function click() {
  body.classList.toggle("mobile-nav-active");
  toggleNav.classList.toggle("bi-list");
  toggleNav.classList.toggle("bi-x");
}

toggleNav.addEventListener("click", click);
