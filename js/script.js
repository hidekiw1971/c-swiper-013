jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper1
  const swiper1 = new Swiper(".swiper1", {
    effect: "fade",
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
      // waitForTransition: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  // swiper2
  const swiper2 = new Swiper(".swiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
});
