let lastScrollY = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hiddden");
  }
  lastScrollY = currentScrollY;
});
