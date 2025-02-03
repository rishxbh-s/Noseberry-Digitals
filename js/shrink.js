// script.js
function shrinkHeader() {
  var header = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}

window.addEventListener("scroll", shrinkHeader);
