// windows smooth scroll js start here
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const bannerHeight = document.querySelector("#banner").offsetHeight;

  if (window.scrollY > bannerHeight - 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// windows smooth scroll js ends here
// slick slider js starts here
$(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 2, 
    autoplay: true,
    slidesToScroll: 2,
    autoplaySpeed: 1000000,
    arrows: false,
    dots: true,
    dotsClass: 'dots_design'
  });
});
// slick slider js ends here
// typed js starts 
var typed = new Typed('#element', {
      strings: ['high-converting','modern websites'],
      typeSpeed: 150,
    });
// typed js ends
// sweetalert starts here
Swal.fire({
  title: 'Page Loading Successfull',
  icon: 'success',
  timer: 10000,
  timerProgressBar: true,
  showConfirmButton: true,
});
// sweetalert ends here
