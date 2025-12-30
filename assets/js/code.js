// slick slider js starts here
$(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 2, 
    autoplay: true,
    slidesToScroll: 2,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    dotsClass: 'dots_design',
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
let clickToShowPop0 = document.querySelector(`.part_2 .overlayClick0`);
let clickToShowPop1 = document.querySelector(`.part_2 .overlayClick1`);
let clickToShowPop2 = document.querySelector(`.part_2 .overlayClick2`);
let clickToShowPop3 = document.querySelector(`.part_2 .overlayClick3`);
let clickToShowPop4 = document.querySelector(`.part_2 .overlayClick4`);
let clickToShowPop5 = document.querySelector(`.part_2 .overlayClick5`);
clickToShowPop0.addEventListener(`click`, function () { 
  Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/gallery/g-lamp.jpg",
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: "Custom image"
});
})
clickToShowPop1.addEventListener(`click`, function () { 
  Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/woodcraft.jpg",
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: "Custom image"
});
})
clickToShowPop2.addEventListener(`click`, function () { 
  Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/tropical.jpg",
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: "Custom image"
});
})
clickToShowPop3.addEventListener(`click`, function () { 
  Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/grayscale.jpg",
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: "Custom image"
});
})
clickToShowPop4.addEventListener(`click`, function () { 
  Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/caffeine_and_tulips.jpg",
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: "Custom image"
});
})
clickToShowPop5.addEventListener(`click`, function () { 
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    // imageUrl: "../img/lamp.jpg",
  imageUrl: "https://themewagon.github.io/Hudson/images/folio/gallery/g-lamp.jpg",
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: "Custom image"
});
})
// sweetalert ends here
