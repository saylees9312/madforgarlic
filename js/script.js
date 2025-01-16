const snsSlider = new Swiper(".sns-slider", {
    loop: true,
    autoplay: true,
    speed: 1000,
    centeredSlides: true, // 활성화된 슬라이드를 가운데로
    slidesPerView: 1,
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

    breakpoints: {
        // when window width is >= 320px
        380: {
            slidesPerView: 1.5,
        },
        // when window width is >= 560px
        560: {
            slidesPerView: 3,
        },

        // when window width is >= 800px
        800: {
            slidesPerView: 6,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 8,
        },
    },
});

AOS.init();
