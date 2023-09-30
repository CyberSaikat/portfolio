$(document).ready(function () {
  $(".controller i").click(function () {
    $(".controller").toggleClass("active");
    $(".menu").toggleClass("active");
  });
  $("#experience").html(new Date().getFullYear() - 2020);
  document.querySelector('video').play();
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    breakpoints: {
      860: {
        slidesPerView: 2,
      },
    },
    spaceBetween: 30,
    direction: "horizontal",
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
