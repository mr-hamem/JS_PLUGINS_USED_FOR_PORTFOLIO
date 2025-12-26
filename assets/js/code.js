window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const bannerHeight = document.querySelector("#banner").offsetHeight;

  if (window.scrollY > bannerHeight - 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
