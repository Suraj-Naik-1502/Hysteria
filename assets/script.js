var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

