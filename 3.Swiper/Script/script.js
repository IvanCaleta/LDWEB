let swiperInstance;

function initializeSwiper() {
    swiperInstance = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        on: {
            init: function () {
                console.log("Swiper initialized");
            },
            slideChange: function () {
                console.log(`Active slide index: ${this.realIndex + 1}`);
            },
        },
    });
}

function destroySwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
        console.log("Swiper destroyed");
    }
}

function toggleSwiper() {
    if (swiperInstance) {
        destroySwiper();
    } else {
        initializeSwiper();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSwiper();

    const toggleButton = document.querySelector('.toggle-swiper');
    toggleButton.addEventListener('click', toggleSwiper);
});
