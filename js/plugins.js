var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

let toggler = document.querySelector('.navbar-toggler i'),
    content = document.querySelector('.content');

toggler.addEventListener('click', function () {
    content.classList.toggle('opacity');
});

let li = document.querySelectorAll('.navbar-nav li');

li.forEach(el => {

    el.addEventListener('click', () => {
        [...el.parentElement.children].forEach(ele => ele.classList.remove('active'));
        el.classList.add('active');
    })
})


