var swiper = new Swiper(".swiper-container", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000, // トランジション速度を2秒に設定
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
