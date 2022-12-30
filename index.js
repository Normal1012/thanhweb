// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        dalay: 2000,
        disableinteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const header = document.querySelector(".header");

window.onscroll = () => {
    const navbar = window.pageYOffset;
    if (navbar > 150) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
};
