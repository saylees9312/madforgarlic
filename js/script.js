const snsSlider = new Swiper(".sns-slider", {
    loop: true,
    autoplay: true,
    speed: 1000,
    centeredSlides: true, // 활성화된 슬라이드를 가운데로
    slidesPerView: 8,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".sw-btn-next",
        prevEl: ".sw-btn-prev",
    },
});

AOS.init();
